var Coffee = require('coffee-script')
var COFFEE_SOURCE = "() -> console.log 'coffee!'"

ready(function () {
  var src = document.getElementById('coffee')
  var dst = document.getElementById('js')
  
  src.innerHTML = COFFEE_SOURCE
  dst.innerHTML = Coffee.compile(COFFEE_SOURCE)  

  return src;
})

function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}