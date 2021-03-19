// Sourced from https://sethflowers.com/2017/06/27/make-github-code-review-full-width.html
var makeFullWidth = function(element) {
  element.style.width = document.body.clientWidth + 'px';
};

var content = document.getElementsByClassName('repository-content')[0];
makeFullWidth(content);
makeFullWidth(content.closest('.container'));
