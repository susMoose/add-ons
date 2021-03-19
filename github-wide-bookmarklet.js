// Sourced from https://sethflowers.com/2017/06/27/make-github-code-review-full-width.html
// Bookmark must look like this 
// javascript:var makeFullWidth = function(element) { element.style.width = document.body.clientWidth + 'px'; }; var content = document.getElementsByClassName('repository-content')[0]; makeFullWidth(content); makeFullWidth(content.closest('.container'));
javascript:
var makeFullWidth = function(element) {
  var wide = document.body.clientWidth - (document.body.clientWidth / 4 );
  element.style.maxWidth = wide  + 'px';
};
var content = document.getElementsByClassName('container-lg clearfix')[1];
makeFullWidth(content);
