const CACHE_NAME = 'geovision-v1';

// Evento Fetch para ignorar llamadas a la API de la nube
self.addEventListener('fetch', (event) => {
    // Si la petición va dirigida a JSONStorage, dejamos que el navegador la maneje directamente sin intervenir
    if (event.request.url.includes('api.jsonstorage.net')) {
        return;
    }

    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        }).catch(() => {
            // Manejo opcional para offline si es necesario
        })
    );
});
