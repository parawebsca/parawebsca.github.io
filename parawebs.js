
var imagesArray = ["http://ads.parawebs.com/expo20152.jpg","http://ads.parawebs.com/expo2015.jpg", "http://ads.parawebs.com/expo20152.jpg","http://ads.parawebs.com/expo2015.jpg"];
var num = Math.floor(Math.random() * 2); // 0...6
var fa=document.createElement("a");
fa.setAttribute('href','http://goo.gl/zjAPBh');
fa.setAttribute('target','_blanks');
var fpixel=document.createElement("img");
fpixel.setAttribute('src', imagesArray[num]);
fpixel.setAttribute('alt', 'ExpoTachira 2015');
fa.appendChild(fpixel);
document.getElementById('parawebs').appendChild(fa);


google_ad_client = "ca-pub-1109863368642493";
google_ad_slot = "6117690412";
google_ad_width = 300;
google_ad_height = 250;
document.getElementsByClassName("widget-ad")[0].setAttribute("style","height:250px;width:300px");
document.getElementsByClassName("widget-ad")[0].innerHTML = ""; 
var script = document.createElement("script");
script.type = "text/javascript";
script.src = "//pagead2.googlesyndication.com/pagead/show_ads.js";
if(!document._write) document._write = document.write;
document.write = function (str) {
    document.getElementsByClassName("widget-ad")[0].innerHTML += str;
};
document.getElementsByClassName("widget-ad")[0].appendChild(script);