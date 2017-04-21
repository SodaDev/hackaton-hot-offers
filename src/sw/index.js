export const registerWorker = () => {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('sw.js', { insecure: true })
            .then(function (swRegistration) {
                var serviceWorker;

                if (swRegistration.installing) {
                    console.log('Resolved at installing: ', swRegistration);
                    serviceWorker = swRegistration.installing;
                } else if (swRegistration.waiting) {
                    console.log('Resolved at installed/waiting: ', swRegistration);
                    serviceWorker = swRegistration.waiting;
                } else if (swRegistration.active) {
                    console.log('Resolved at activated: ', swRegistration);
                    serviceWorker = swRegistration.active;
                }

            }).catch(function (error) {
            console.error('Error occurred during service worker registration', error);
        });
    } else {
        console.error('Workers are not supported');
    }
};