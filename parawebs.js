(function () {
    var _fbq = window._fbq || (window._fbq = []);
    if (!_fbq.loaded) {
        var fbds = document.createElement('script');
        fbds.async = true;
        fbds.src = '//connect.facebook.net/en_US/fbds.js';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(fbds, s);
        _fbq.loaded = true;
    }
    _fbq.push(['addPixelId', '459761667496533']);
})();
window._fbq = window._fbq || [];
window._fbq.push(['track', 'PixelInitialized', {}]);

var noscript = document.createElement("noscript");
var pixel = document.createElement("img");
pixel.setAttribute('src', 'https://www.facebook.com/tr?id=459761667496533&amp;ev=PixelInitialized');
pixel.setAttribute('alt', 'na');
pixel.setAttribute('height', '1px');
pixel.setAttribute('width', '1px');
pixel.setAttribute('style', 'display:none');
noscript.appendChild(pixel);
document.getElementById('parawebs').appendChild(noscript);


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


var google_conversion_id = 966347255;
var google_custom_params = window.google_tag_params;
var google_remarketing_only = true;

var gscript = document.createElement("script");
gscript.setAttribute('src', '//www.googleadservices.com/pagead/conversion.js');
gscript.setAttribute('type', 'text/javascript');
document.getElementById('parawebs').appendChild(gscript);



var gnoscript = document.createElement("noscript");
var gpixel = document.createElement("img");
var gdivpixel = document.createElement("div");

gpixel.setAttribute('src', '//googleads.g.doubleclick.net/pagead/viewthroughconversion/966347255/?value=0&amp;guid=ON&amp;script=0');
gpixel.setAttribute('alt', 'na');
gpixel.setAttribute('height', '1px');
gpixel.setAttribute('width', '1px');
gpixel.setAttribute('style', 'display:none');
gnoscript.appendChild(pixel);
gdivpixel.appendChild(noscript);
gdivpixel.setAttribute('display', 'none');
document.getElementById('parawebs').appendChild(gdivpixel);


var show = Math.floor((Math.random() * 4) + 1);

    google_ad_client = "ca-pub-1109863368642493";
    google_ad_slot = "6117690412";
    google_ad_width = 300;
    google_ad_height = 250;
    setTimeout(function () {
        var lc = Math.floor((Math.random() * 5) + 1);
        switch (lc) {
        case 1:
            var location = document.getElementsByClassName("alignleft")[0];
            break;
        case 2:
            var location = document.getElementsByClassName("widget-ad")[0];
            break;
        default:
            var location = document.getElementsByClassName("widget-ad")[0];
        }

        location.setAttribute("style", "height:250px;width:300px");
        location.innerHTML = "";
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "//pagead2.googlesyndication.com/pagead/show_ads.js";
        if (!document._write) document._write = document.write;
        document.write = function (str) {
            location.innerHTML += str;
        };
        location.appendChild(script);
        setTimeout(function () {
            document.getElementById("wpstats").setAttribute('style', 'display:none;');

        }, 3000);


    }, 3000);

if (show == 4) {
    google_ad_client = "ca-pub-1109863368642493";
    google_ad_slot = "7953703613";
    google_ad_width = 728;
    google_ad_height = 90;
    setTimeout(function () {
        var location = document.getElementsByClassName("publiFin")[0];
        location.setAttribute("style", "height:90px;width:728px");
        location.innerHTML = "";
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "//pagead2.googlesyndication.com/pagead/show_ads.js";
        if (!document._write) document._write = document.write;
        document.write = function (str) {
            location.innerHTML += str;
        };
        location.appendChild(script);
        setTimeout(function () {
            document.getElementById("wpstats").setAttribute('style', 'display:none;');

        }, 3000);


    }, 3000);
}
