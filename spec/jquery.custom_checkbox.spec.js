describe("custom_checkbox", function() {
	var checkedCheckbox, 
		unCheckedCheckbox;
	
	beforeEach(function() {
		jasmine.getFixtures().set(
			'<div class="styled_checkbox_wrap"><input type="checkbox" name="test" value="1" id="unchecked" class="styled_checkbox"/> </div> <label for="test">check me</label>' +
			'<div class="styled_checkbox_wrap"> <input type="checkbox" name="test_1" value="1" id="checked" class="styled_checkbox" checked="checked"/></div> <label for="test_1">uncheck me</label>' +
			'<div class="styled_checkbox_wrap"> <input type="checkbox" name="test_2" value="1" id="disabled" class="styled_checkbox" disabled="disabled"/></div> <label for="test_1">uncheck me</label>'
		);
		$('.styled_checkbox_wrap').styleCheckbox();
		checkedCheckbox = $('#checked');
		uncheckedCheckbox = $('#unchecked');
		disabledCheckbox = $('#disabled');
	});
	
	describe("initial state", function() {
		it("should set the correct style on non checked checkboxes", function() {
			expect(uncheckedCheckbox.parent().hasClass("wrap_checked")).toBeFalsy();
		});
		
		it("should set the correct state on checked checkboxes", function() {
			expect(checkedCheckbox.parent().hasClass("wrap_checked")).toBeTruthy();
		});
		
		it("should handle disabled checkboxes", function() {
			expect(disabledCheckbox.attr("disabled") == "disabled").toBeTruthy();
		});
	});
	
	describe("clicking on the checkbox", function() {
		it("should uncheck a checked checkbox", function() {

		});
		
		it("should check an uncheck checkbox", function() {

		});
		
	});
});