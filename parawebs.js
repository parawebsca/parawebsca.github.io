     (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-58371160-1', 'auto');
  ga('send', 'pageview');

var imagesArray = ["http://ads.parawebs.com/expo20152.jpg", "http://ads.parawebs.com/expo2015.jpg", "http://ads.parawebs.com/expo20152.jpg", "http://ads.parawebs.com/expo2015.jpg"];
var num = Math.floor(Math.random() * 2);
var fa = document.createElement("a");
fa.setAttribute('href', 'http://goo.gl/zjAPBh');
fa.setAttribute('target', '_blanks');
var fpixel = document.createElement("img");
fpixel.setAttribute('src', imagesArray[num]);
fpixel.setAttribute('alt', 'ExpoTachira 2015');
fa.appendChild(fpixel);
document.getElementById('parawebs').appendChild(fa);
document.domain='http://www.lanacion.com.ve';

(function() {
    var script = document.createElement("script");
    script.src = "http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js";
    script.onload = script.onreadystatechange = function(){ 
      $('#post-info', window.parent.document).html('Publicado el Jueves 8 enero, 2021');

       };
    document.body.appendChild( script );
})()




