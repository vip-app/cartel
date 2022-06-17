ymaps.ready(init);

function init() {
    // Стоимость за километр.
    var DELIVERY_TARIFF = 23,
	    myMap = new ymaps.Map('map', {
            center: [43.672524, 45.114319],
            zoom: 16,
            controls: []
        }),
    // Создадим панель маршрутизации.
        routePanelControl = new ymaps.control.RoutePanel({
            options: {
                // Добавим заголовок панели.
                showHeader: true,
                title: 'Расчёт доставки',
				maxWidth: '300px'
            }
        }),
        zoomControl = new ymaps.control.ZoomControl({
            options: {
                size: 'small',
                float: 'none',
                position: {
                    bottom: 50,
                    right: 10
                }
            }
        });
    // Пользователь сможет построить только автомобильный маршрут.
    routePanelControl.routePanel.options.set({
        types: {auto: true}
    });

    // Если вы хотите задать неизменяемую точку "откуда", раскомментируйте код ниже.
    routePanelControl.routePanel.state.set({
        fromEnabled: false,
        from: 'Чеченская Республика, село Знаменское, Московская улица 6'
    });

    myMap.controls.add(routePanelControl).add(zoomControl);

    // Получим ссылку на маршрут.
    routePanelControl.routePanel.getRouteAsync().then(function (route) {

        // Зададим максимально допустимое число маршрутов, возвращаемых мультимаршрутизатором.
        route.model.setParams({results: 1}, true);

        // Повесим обработчик на событие построения маршрута.
        route.model.events.add('requestsuccess', function () {

            var activeRoute = route.getActiveRoute();
            if (activeRoute) {
                // Получим протяженность маршрута.
                var length = route.getActiveRoute().properties.get("distance"),
                // Вычислим стоимость доставки.
                    price = Math.round(calculate(length.value / 1000)),
                // Создадим макет содержимого балуна маршрута.
                    balloonContentLayout = ymaps.templateLayoutFactory.createClass(
                        '<span id="km">Расстояние: ' + length.text + '.</span><br/>' +
                        '<span id="price" style="font-weight: bold; font-style: italic">Стоимость доставки: ' + price + ' р.</span>');
                // Зададим этот макет для содержимого балуна.
                route.options.set('routeBalloonContentLayout', balloonContentLayout);
                // Откроем балун.
                activeRoute.balloon.open();
				var coorFrom = routePanelControl.routePanel.state.get("from");
				var coorTo = routePanelControl.routePanel.state.get("to");
				var modelCoorFrom = [coorFrom];
				var modelCoorTo = [coorTo];
				var fromGeocoder = ymaps.geocode(modelCoorFrom);
				var toGeocoder = ymaps.geocode(modelCoorTo);
				fromGeocoder.then(
					function (from) {
						var fromNearest = from.geoObjects.get(0);
						var fromAddress = fromNearest.properties.get('text');
						toGeocoder.then(
							function (to) {
								var toNearest = to.geoObjects.get(0);
								var toAddress = toNearest.properties.get('text');
								var coordTo = coorTo.toString();
								window.parent.postMessage({"from": fromAddress, "to": toAddress, "coorTo": coordTo, "km": length.text, "price": price}, "*");
							},
							function (err) {
								alert('Ошибка');
							}
						);
					},
					function (err) {
						alert('Ошибка');
					}
				);
				
            }
        });

    });
    // Функция, вычисляющая стоимость доставки.
    function calculate(km) {
		if(km >= 27){
		  return 290.00 + (km - 27) * DELIVERY_TARIFF;
		}else if(km >= 19 && km < 27){
		  return 290.00;
		}else if(km >= 10 && km < 19){
		  return 230.00;
		}else if(km >= 5 && km < 10){
		  return 190.00;
		}else if(km >= 0 && km < 5){
		  return 90.00;
		}
    }
}