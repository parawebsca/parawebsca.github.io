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


var show = Math.floor((Math.random() * 4) + 1);

google_ad_client = "ca-pub-1109863368642493";
google_ad_slot = "6117690412";
google_ad_width = 300;
google_ad_height = 250;
setTimeout(function() {
 
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

    }, 3000);


}, 3000);