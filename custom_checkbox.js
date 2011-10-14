(function($) {
  $.fn.styleCheckbox = function() {
    var $wrapper = $(this),
    $el = $wrapper.find('input.styled_checkbox');

    $el.live('click', function(e) {
      var $currentCheckbox = $(e.currentTarget);
      if ($currentCheckbox.attr("disabled", false)) {
        var $currentWrapper = $currentCheckbox.parents('.styled_checkbox_wrap');
        if ($currentCheckbox.is(':checked')) {
          $currentWrapper.addClass('wrap_checked');
        } else {
          $currentWrapper.removeClass('wrap_checked');
        }
      }
    });
  }
})(jQuery);