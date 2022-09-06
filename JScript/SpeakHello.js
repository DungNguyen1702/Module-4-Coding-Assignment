// Hello Function
(function(window){
  var Hello = {};
  var speakWord = "Hello";
  Hello.speak = function (name) {
    console.log(speakWord + " " + name);
    document.write(speakWord + " " + name + '<br>');
  }
  window.Hello = Hello; 
})(window);
