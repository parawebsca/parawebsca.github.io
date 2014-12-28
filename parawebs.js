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

document.addEventListener('DOMContentLoaded', function() {

    setTimeout(function() {

        var show = Math.floor((Math.random() * 4) + 1);

        google_ad_client = "ca-pub-1109863368642493";
        google_ad_slot = "6117690412";
        google_ad_width = 300;
        google_ad_height = 250;

        var lugar = document.getElementsByClassName("widget-ad")[0];

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
        setTimeout(function() {
            document.getElementById("wpstats").setAttribute('style', 'display:none;');

        }, 0);


    }, 0);

    google_ad_client = "ca-pub-1109863368642493";
    google_ad_slot = "7953703613";
    google_ad_width = 728;
    google_ad_height = 90;
    setTimeout(function() {
        var location = document.getElementsByClassName("publiFin")[0];
        location.setAttribute("style", "height:90px;width:728px");
        location.innerHTML = "";
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "//pagead2.googlesyndication.com/pagead/show_ads.js";
        if (!document._write) document._write = document.write;
        document.write = function(str) {
            location.innerHTML += str;
        };
        location.appendChild(script);
        setTimeout(function() {
            document.getElementById("wpstats").setAttribute('style', 'display:none;');

        }, 0);


    }, 0);

});