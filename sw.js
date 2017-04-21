"use strict";

var offersSocket = new WebSocket("ws://10.48.20.95:8080/hot-offers/websocket");

offersSocket.addEventListener('error', function(event) {
    console.error('WebSocket error occurred', event)
});

offersSocket.addEventListener('open', function (event) {
    offersSocket.send('Hej Januszek from ws.js!');
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

//New

/*var carDealsCacheName = 'carDealsCacheV1';
var carDealsCachePagesName = 'carDealsCachePagesV1';
var carDealsCacheImagesName = 'carDealsCacheImagesV1';

var carDealsCacheFiles = [
  'js/app.js', 
  'js/carService.js',
  'js/clientStorage.js',
  'js/swRegister.js',
  'js/template.js',
  './',
  'resources/es6-promise/es6-promise.js',
  'resources/fetch/fetch.js',
  'resources/localforage/localforage.min.js',
  'resources/localforage/localforage-getitems.js',
  'resources/localforage/localforage-setitems.js',
  'resources/material-design-lite/material.min.js',
  'resources/material-design-lite/material.min.js.map',
  'resources/material-design-lite/material.red-indigo.min.css',
  'resources/systemjs/system.js',
  'resources/systemjs/system-polyfills.js'
];

var latestPath = '/pluralsight/courses/progressive-web-apps/service/latest-deals.php';
var imagePath = '/pluralsight/courses/progressive-web-apps/service/car-image.php';
var carPath = '/pluralsight/courses/progressive-web-apps/service/car.php';

self.addEventListener('install', function(event){
    console.log('From SW: Install Event', event);
    self.skipWaiting();
    event.waitUntil(
        caches.open(carDealsCacheName)
        .then(function(cache){
            return cache.addAll(carDealsCacheFiles);
        })
    );
});

self.addEventListener('activate', function(event){
    console.log('From SW: Activate State', event);
    self.clients.claim();
    event.waitUntil(
        caches.keys()
        .then(function(cacheKeys){
            var deletePromises = [];
            for(var i = 0; i < cacheKeys.length; i++){
                if(cacheKeys[i] != carDealsCacheName &&
                   cacheKeys[i] != carDealsCachePagesName &&
                   cacheKeys[i] != carDealsCacheImagesName){
                       deletePromises.push(caches.delete(cacheKeys[i]));
                   }
            }
            return Promise.all(deletePromises);
        })
    )
});

self.addEventListener('fetch', function(event){
    var requestUrl = new URL(event.request.url);
    var requestPath = requestUrl.pathname;
    var fileName = requestPath.substring(requestPath.lastIndexOf('/') + 1);

    if(requestPath == latestPath || fileName == "sw.js"){
        event.respondWith(fetch(event.request));
    }else if(requestPath == imagePath){
        event.respondWith(networkFirstStrategy(event.request));
    }else{
        event.respondWith(cacheFirstStrategy(event.request));
    }
});

function cacheFirstStrategy(request){
    return caches.match(request).then(function(cacheResponse){
        return cacheResponse || fetchRequestAndCache(request);
    });
}

function networkFirstStrategy(request){
    return fetchRequestAndCache(request).catch(function(response){
        return caches.match(request);
    });
}

function fetchRequestAndCache(request){
    return fetch(request).then(function(networkResponse){
        caches.open(getCacheName(request)).then(function(cache){
            cache.put(request, networkResponse);
        });
        return networkResponse.clone();
    });
}

function getCacheName(request){
    var requestUrl = new URL(request.url);
    var requestPath = requestUrl.pathname;

    if(requestPath == imagePath){
        return carDealsCacheImagesName;
    }else if(requestPath == carPath){
        return carDealsCachePagesName;
    }else{
        return carDealsCacheName;
    }
}*/

/*self.addEventListener('message', function(event){
    event.source.postMessage({clientId:event.source.id, message:'sw'});
})*/