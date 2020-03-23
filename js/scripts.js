$(document).ready(function() {
  var sentence = prompt("Please enter a sentence.");
  console.log(sentence);
  function capitalize(sen) {
    var sent = sen;
    
    var firstChar = sent.charAt(0).toUpperCase();
    var midSent = sent.slice(1, (sent.length - 1));
    var lastChar = sent.charAt(sent.length - 1).toUpperCase();

    var newSent = firstChar + midSent + lastChar;

    return newSent;
  }

  alert(capitalize(sentence));

});