// Goodbye function
(function(window){
  var GoodBye = {};
  var speakWord = "Good Bye";
  GoodBye.speak = function(name){
    console.log(speakWord + " " + name);
    document.write(speakWord + " "+ name + '<br>');
  }
  window.GoodBye = GoodBye;
})(window);


