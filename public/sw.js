"use strict";

var offersSocket = new WebSocket("ws://10.48.20.95:8080/hot-offers/offers");

offersSocket.addEventListener('error', function (event) {
    console.error('WebSocket error occurred', event)
});

offersSocket.addEventListener('open', function (event) {
    offersSocket.send('12345');
});

offersSocket.addEventListener('close', function (event) {
    offersSocket.send('Closed WS connection');
});

offersSocket.addEventListener('message', function (event) {
    console.log('Message from server in ws.js', event);
    var price = JSON.parse(event.data).fares[0].outbound.price;
    var arrival = JSON.parse(event.data).fares[0].outbound.arrivalAirport.name;
    self.registration.showNotification("Got new offers!", {
        body: 'To ' +  arrival + ' for ' + price.value.toFixed(2) + ' ' + price.currencyCode,
        icon: 'icons/icon-192x192.png',
        data: event.data
    });
});


self.addEventListener('notificationclick', function (event) {
    console.log('On notification click: ', event);
    // Android doesn’t close the notification when you click on it
    // See: http://crbug.com/463146
    event.notification.close();

    // This looks to see if the current is already open and
    // focuses if it is
    event.waitUntil(clients.matchAll({
        type: 'window'
    }).then(function (clientList) {
        for (var i = 0; i < clientList.length; i++) {
            var client = clientList[i];
            if (client.url === '/' && 'focus' in client) {
                return client.focus();
            }
        }
        if (clients.openWindow) {
            var notificationBody = JSON.parse(event.notification.data);
            console.info("Opening for", notificationBody.fares[0]);
            var from = notificationBody.fares[0].outbound.departureAirport.iataCode;
            console.info("from: ", from);
            var to = notificationBody.fares[0].outbound.arrivalAirport.iataCode;
            console.info("to: ", to);
            var fromDate = notificationBody.fares[0].outbound.departureDate.split("T")[0];
            console.info("fromDate: ", fromDate);
            var toDate = notificationBody.fares[0].outbound.arrivalDate.split("T")[0];
            console.info("toDate: ", toDate);


            return clients.openWindow('https://www.ryanair.com/ie/en/booking/home/' + from + '/' + to +'/' + fromDate + '/' + toDate + '/1/0/0/0');
        }
    }));
});