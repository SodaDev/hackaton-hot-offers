"use strict";

var offersSocket = new WebSocket("ws://10.48.20.95:8080/hot-offers/websocket");

offersSocket.addEventListener('error', function(event) {
    console.error('WebSocket error occurred', event)
});

offersSocket.addEventListener('open', function (event) {
    offersSocket.send('I\'m ready to rumble');
});

offersSocket.addEventListener('close', function (event) {
    offersSocket.send('Closed WS connection');
});

offersSocket.addEventListener('message', function (event) {
    console.log('Message from server in ws.js', event);
    self.registration.showNotification("Got new offers!", event);
});


self.addEventListener('notificationclick', function(event) {
    console.log('On notification click: ', event.notification.tag);
    // Android doesn’t close the notification when you click on it
    // See: http://crbug.com/463146
    event.notification.close();

    // This looks to see if the current is already open and
    // focuses if it is
    event.waitUntil(clients.matchAll({
        type: 'window'
    }).then(function(clientList) {
        for (var i = 0; i < clientList.length; i++) {
            var client = clientList[i];
            if (client.url === '/' && 'focus' in client) {
                return client.focus();
            }
        }
        if (clients.openWindow) {
            return clients.openWindow('/');
        }
    }));
});