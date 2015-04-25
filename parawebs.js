(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-61679308-1', 'auto');
ga('send', 'pageview');

(function() {
    console.log("active");
    google_ad_client = "ca-pub-1109863368642493";
    oogle_ad_slot = "1397388415";
    google_ad_width = 300;
    google_ad_height = 250;
    var lugar = document.getElementsByClassName("ads")[0];
    lugar.setAttribute("style", "height:250px;width:300px");
    lugar.innerHTML = "";
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "//pagead2.googlesyndication.com/pagead/show_ads.js";
    if (!document._write) document._write = document.write;
    document.write = function(str) {
        lugar.innerHTML += str;
    };
    lugar.appendChild(script);

})();