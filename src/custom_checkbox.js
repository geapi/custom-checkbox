(function($) {
	$.fn.styleCheckbox = function() {
		var $wrapper = $(this),
				$el = $wrapper.find('input.styled_checkbox');
		// check the ones that are set to check on initialize
		// TODO should move into it's own function
		$el.each(function(index) {
			var $checkBox = $($el[index]);
			if ($checkBox.is(':checked')) {
				$checkBox.parents('.styled_checkbox_wrap').addClass('wrap_checked');
			}
		});

		$el.live('click', function(e) {
			var $currentCheckbox = $(e.currentTarget);
			if (!$currentCheckbox.attr("disabled")) {
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
