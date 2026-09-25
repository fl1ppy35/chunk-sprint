/* Service worker: rede primeiro, cópia local como reserva.
   Com internet, sempre carrega a versão mais nova do GitHub Pages;
   sem internet, abre a última versão que ficou guardada no aparelho. */
var CACHE = 'chunk-sprint-v3';
self.addEventListener('install', function(){ self.skipWaiting(); });
self.addEventListener('activate', function(e){
  e.waitUntil(caches.keys().then(function(keys){
    return Promise.all(keys.filter(function(k){ return k !== CACHE; }).map(function(k){ return caches.delete(k); }));
  }).then(function(){ return self.clients.claim(); }));
});
self.addEventListener('fetch', function(e){
  if(e.request.method !== 'GET') return;
  e.respondWith(fetch(e.request).then(function(res){
    if(res && res.ok && (res.type === 'basic' || res.type === 'cors')){
      var copy = res.clone();
      caches.open(CACHE).then(function(c){ c.put(e.request, copy); });
    }
    return res;
  }).catch(function(){
    return caches.match(e.request).then(function(hit){ return hit || caches.match('./'); });
  }));
});
