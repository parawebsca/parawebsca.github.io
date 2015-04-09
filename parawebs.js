(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-61679308-1', 'auto');
ga('send', 'pageview');



window.__insp = window.__insp || [];
__insp.push(['wid', 1080301835]);
(function() {
function __ldinsp(){var insp = document.createElement('script'); insp.type = 'text/javascript'; insp.async = true; insp.id = "inspsync"; insp.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://cdn.inspectlet.com/inspectlet.js'; var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(insp, x); }
if (window.attachEvent) window.attachEvent('onload', __ldinsp);
else window.addEventListener('load', __ldinsp, false);
})();



var head = document.getElementsByTagName('head')[0],
script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://parse.com/downloads/javascript/parse/latest/min.js';
head.appendChild(script);


document.addEventListener("DOMContentLoaded", function(event) { 
  Parse.initialize("mxPOm008hyVfunzWFCKB98kEiMHnwkFrMNiOoS4n", "BQmKHEKKpTePs7xtWZpU2FNavF29PCEzdiCwu4iT");
    
    var TestObject = Parse.Object.extend("TestObject");
    var testObject = new TestObject();
      testObject.save({foo: "bar"}, {
      success: function(object) {
        console.log("sucess");
      },
      error: function(model, error) {
        console.log("error");
      }
    });

});

