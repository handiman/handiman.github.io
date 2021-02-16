(function () {
  var keepApiAlive = function () {
    var local = 'localhost' === document.location.hostname, ping = function () {
      console.log('Ping');
      fetch(local ? 'https://localhost:5001/api/v1/ping' : 'https://henrikbecker.azurewebsites.net/api/v1/ping')
        .then(function (response) { return response.text(); })
        .then(function (response) { console.log(response); });
    };
    ping();
    var handle = window.setInterval(ping, local ? 600000 : 30000);
    window.addEventListener('unload', function () { window.clearInterval(handle); });
  }
  keepApiAlive();
})();