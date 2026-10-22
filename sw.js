/* Android (Samsung Internet / Chrome) ana ekrana UYGULAMA olarak eklesin diye gereken boş yardımcı.
   Hiçbir şeyi önbelleğe ALMAZ: her açılışta panel ağdan gelir, eski sürümde takılma olmaz. */
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',()=>{});
