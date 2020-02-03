self.addEventListener('install', function(event) {
    console.log("Installing...");
    event.waitUntil(caches
        .open("henrik-becker-v1")
        .then(function(cache) {
            console.log("Opened cache");
            return cache.addAll([
                "/index.js",
                "/favicon.ico"
            ]);
    })) 
});