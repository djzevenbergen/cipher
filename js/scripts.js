$(document).ready(function() {
  var sentence = prompt("Please enter a sentence.");
  console.log(sentence);
  function capitalize(sen) {
    var sent = sen;
    var firstChar = sent.charAt(0).toUpperCase();
    var lastChar = sent.charAt(sent.length - 1).toUpperCase();
    var newSent = firstChar + lastChar;

    return newSent;
  }

  function reverseFirstLast(sen) {
    var sent = sen;
    var firstChar = sent.charAt(0);
    var lastChar = sent.charAt(sent.length -1);
    return lastChar + firstChar
  }

  function reverseCapital(sen) {
    return sen + capitalize(reverseFirstLast(sen));
  }

  function scramble(sen) {
    var senLength = sen.length;
    var senIndex = ((senLength - 1) / 2).toFixed(); 
    return sen[senIndex] + reverseCapital(sen);
  }

  function revAll(sen) {
    var fullSent = scramble(sen);
    
    var count = fullSent.length;
    var newSent = "";
    while (count > 0) {
      newSent += fullSent[count - 1];
      count--;

    }

    return newSent;

  }

  alert(revAll(sentence));

});