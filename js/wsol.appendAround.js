/**
 * wsol.appendAround.js 2.0.0
 * http://github.com/websolutions/append-around
 */

 ;(function(factory) {
  if (typeof module === 'object' && typeof module.exports === 'object') {
    factory(require('jquery'), window, document);
  } else {
    factory(jQuery, window, document);
  }
}(function($, window, document, undefined) {
  if (!$.wsol) {
    $.wsol = {};
  }

  $.wsol.appendAround = function(el, options) {
    var base = this;

    base.$el = $(el);
    base.el = el;

    base.$el.data("wsol.appendAround", base);

    base.init = function() {
      base.options = $.extend({}, $.wsol.appendAround.defaultOptions, options);

      base.$parent = base.$el.parent();
      base.set = base.$parent.attr(base.options.setAttr);
      base.$set = $("[" + base.options.setAttr + "='" + base.set + "']");

      base.append();

      // Handle events
      $(window).on("resize.wsol.appendAround", base.append);
    };

    base.isHidden = function( elem ) {
      return $(elem).css( "display" ) === "none";
    };

    base.append = function() {
      if ( base.isHidden( base.$parent ) ) {
        // Append to the first visible set
        base.$set.each(function() {
          var $target = $(this);

          if ( !base.isHidden( $target ) ) {
            base.$el.appendTo($target);
            base.$parent = $target;

            return false;
          }
        });
      }
    };

    base.destroy = function() {
      // Remove event listeners
      $(window).off(".wsol.appendAround");
    };

    base.init();
  };

  $.wsol.appendAround.defaultOptions = {
    setAttr: "data-set"
  };

  $.fn.wsol_appendAround = function(options) {
    return this.each(function() {
      new $.wsol.appendAround(this, options);
    });
  };

}));
