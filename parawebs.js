(function (i, s, o, g, r, a, m) {
	i['GoogleAnalyticsObject'] = r;
	i[r] = i[r] || function () {
		(i[r].q = i[r].q || [])
		.push(arguments)
	}, i[r].l = 1 * new Date();
	a = s.createElement(o),
		m = s.getElementsByTagName(o)[0];
	a.async = 1;
	a.src = g;
	m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
ga('create', 'UA-58371160-1', 'auto');
ga('send', 'pageview');
var imagesArray = ["http://ads.parawebs.com/expo20152.jpg", "http://ads.parawebs.com/expo2015.jpg", "http://ads.parawebs.com/expo20152.jpg", "http://ads.parawebs.com/expo2015.jpg"];
var linkArray = ["http://goo.gl/zjAPBh", "http://goo.gl/dsMxsE","http://goo.gl/zjAPBh", "http://goo.gl/dsMxsE"];

var num = Math.floor(Math.random() * 2);
var fa = document.createElement("a");
fa.setAttribute('href', linkArray[num]);
fa.setAttribute('target', '_blanks');
var fpixel = document.createElement("img");
fpixel.setAttribute('id', 'myBtn');
fpixel.setAttribute('src', imagesArray[num]);
fpixel.setAttribute('alt', 'ExpoTachira 2015');
fa.appendChild(fpixel);
document.getElementById('parawebs')
	.appendChild(fa);
//document.domain = 'www.lanacion.com.ve';
document.addEventListener("DOMContentLoaded", function (event) {
	document.getElementById("myBtn")
		.addEventListener("click", function () {
			_gaq.push(["_trackEvent", "click_ads", "click"]);
		});
});