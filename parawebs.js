
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

