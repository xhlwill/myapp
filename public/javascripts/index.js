var foo = document.getElementById('foo');
var fooOffsetTop = foo.offsetTop;


window.addEventListener('scroll', function() {
  var scrollTop = document.body.scrollTop || document.documentElement.scrollTop || 0;
  if (scrollTop - fooOffsetTop > 0) {
    foo.style.cssText = "position:fixed;width:100%;right:0px;top:0px;background-color:#fff;";
  } else {
    foo.style.cssText = "position:static;";
  }
})