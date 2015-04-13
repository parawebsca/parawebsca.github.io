(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-61679308-1', 'auto');
ga('send', 'pageview');

var request = new XMLHttpRequest();
request.open('GET', 'http://www.zulia.citastag.dyndns.org/regional/index.php?ac=cita', true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
     console.log("sucess");
    var resp = request.responseText;
  } else {
    console.log("error");

  }
};

request.onerror = function() {
  // There was a connection error of some sort
};

request.send();
