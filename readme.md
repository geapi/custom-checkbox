# Custom Checkbox jQuery plugin
## by Georg Apitz & Alex Welch

---

1. requires jquery

2. add custom_checkbox.js & custom_checkbox.css

3. add your custom checkbox image as sprite

4. add styling to checkboxes like so:
<pre>
`<div class="styled_checkbox_wrap">
		<input type="checkbox" name="test" value="1" id="test_1" class="styled_checkbox"/>
		<label for="test_1">check me</label>
</div>`

5. init the custom_checkbox plugin on your checkboxes like so:
<pre>
$(document).ready(function() {
		$('.styled_checkbox_wrap').styleCheckbox();
});

6. modify custom_checkbox.css to meet your needs
7. send feedback

---

# Example
* For an example click [here](example.html).
