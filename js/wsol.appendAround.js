/**
 * wsol.appendAround.js 1.0.0
 * http://github.com/websolutions/append-around
 */


;(function ($, window, document, undefined) {

  var elementId = 0,
      defaults = {
    setAttr: "data-set"
  };

  function AppendAround(element, options) {
    this.$element = $(element);
    this.settings = $.extend({}, defaults, options);
    this.elementId = elementId++;

    this.appendToVisibleContainer = $.proxy(this.appendToVisibleContainer, this);

    this.init();
  }

  AppendAround.prototype.init = function() {
    this.$parent = this.$element.parent();
    this.set = this.$parent.attr(this.settings.setAttr);
    this.$set = $("[" + this.settings.setAttr + "='" + this.set + "']");

    this.appendToVisibleContainer();

    // Handle events
    $(window).on("resize.appendAround.appendAround-" + this.elementId, this.appendToVisibleContainer);
  };

  AppendAround.prototype.appendToVisibleContainer = function() {
    var _ = this;

    if (this.$parent.is(":hidden")) {
      // Append to the first visible set
      this.$set.each(function() {
        var $this = $(this);

        if (!$this.is(":hidden")) {
          _.$element.appendTo($this);
          _.$parent = $this;

          return false;
        }
      });
    }
  };

  AppendAround.prototype.destroy = function() {
    // Remove event listeners
    $(window).off(".appendAround-" + this.elementId);
  };

  $.fn.appendAround = function(options) {
    return this.each(function(index, element) {
      element.appendAround = new AppendAround(element, options);
    });
  };

  $.fn.unappendAround = function() {
    return this.each(function(index, element) {
      if (element.appendAround) {
        element.appendAround.destroy();
      }
    });
  };

})(jQuery, window, document);
