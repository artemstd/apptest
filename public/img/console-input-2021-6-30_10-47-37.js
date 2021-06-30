var evtSource = new EventSource("http://ml.loc/users/profile");
evtSource.onopen = function(e) {
    console.log("Событие: open");
  };

evtSource.addEventListener('message', function() {
console.log(arguments)
})