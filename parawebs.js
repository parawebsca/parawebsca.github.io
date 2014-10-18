(function() {
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

var noscript =document.createElement("noscript");
var pixel=document.createElement("img");
pixel.setAttribute('src', 'https://www.facebook.com/tr?id=459761667496533&amp;ev=PixelInitialized');
pixel.setAttribute('alt', 'na');
pixel.setAttribute('height', '1px');
pixel.setAttribute('width', '1px');
pixel.setAttribute('style', 'display:none');
noscript.appendChild(pixel);
document.getElementById('parawebs').appendChild(noscript);

var fa=document.createElement("a");
fa.setAttribute('href','http://expotachira.net');
fa.setAttribute('target','_blanks');
var fpixel=document.createElement("img");
fpixel.setAttribute('src', 'http://ads.parawebs.com/expo2015.jpg');
fpixel.setAttribute('alt', 'ExpoTachira 2015');
fa.appendChild(fpixel);
document.getElementById('parawebs').appendChild(fa);
