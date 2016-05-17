Chances are (it you are  viewing this code) you have used JQuery and have used JQuery plugins. they are not difficult to write.

Here is a simple JQuery plugin that proofs this, the plugin find a specified text in an element using Regex and replaces the specified replacement.

users of this plugin will call it just like they will any other JQuery function and optionally pass in parameters in form of an a Javascript object for (text to find), (text to replace) and a callback function when the operation is complete.

sample HTML 
&lt;p&gt;
  Lorem Ipsum ok we have beeen replaced
</p>
<p>
  Another lorem ipsum Lorem Ipsum ok we have beeen replaced
</p>
<p>
  A thrid Lorem Ipsum ok we have beeen replaced
</p>
<span class="notification"></span>

Sample User JS
$('p').findReplace({
  findText:"Lorem",
  replaceText:"I have been replaced"
});

Make sure you include JQuery and the Plugin in your project.

NB.
This is not intended for real use, it is just a simplified demonstration of JQuery Plugin development.
