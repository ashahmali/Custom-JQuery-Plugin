(function($) {
  $.fn.findReplace = function(options) {
    var settings = $.extend({
      findText: null,
      replaceText: "",
      background: "Black",
      color: "White",
      completeCallback: function(){
      	$('.notification').text('Executed the plugin on all Ps').fadeOut(5000);
      }
    }, options);
    return this.each(function() {
      var StringToFind = settings.findText;
      var regexpression = new RegExp(StringToFind, "g");
      var replacement = "<span style='background:" + settings.background + "; color:" + settings.color + ";'>" + settings.replaceText + "</span>";
      $(this).html(
        $(this).html().replace(regexpression, replacement)
      );
      if ($.isFunction(settings.completeCallback)){
      	settings.completeCallback.call(this);
      }
    });
  };
}(jQuery));