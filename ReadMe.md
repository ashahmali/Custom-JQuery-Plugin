Chances are (it you are  viewing this code) you have used JQuery and have used JQuery plugins. they are not difficult to write.

Here is a simple JQuery plugin that proofs this, the plugin find a specified text in an element using Regex and replaces the specified replacement.

users of this plugin will call it just like they will any other JQuery function and optionally pass in parameters in form of an a Javascript object for (text to find), (text to replace) and a callback function when the operation is complete.

sample HTML <br>
&lt;p&gt;<br>
  Lorem Ipsum ok we have beeen replaced<br>
&lt;/p&gt;<br>
&lt;p&gt;<br>
  Another lorem ipsum Lorem Ipsum ok we have beeen replaced<br>
&lt;/p&gt;<br>
&lt;p&gt;<br>
  A thrid Lorem Ipsum ok we have beeen replaced<br>
&lt;/p&gt;<br>
&lt;span class="notification"&gt; &lt;/span&gt;<br>

Sample User JS <br>
$('p').findReplace({<br>
  findText:"Lorem",<br>
  replaceText:"I have been replaced"<br>
});<br>

Make sure you include JQuery and the Plugin in your project.

NB.
This is not intended for real use, it is just a simplified demonstration of JQuery Plugin development.
