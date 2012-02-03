// JavaScript Document
$(document).ready(function () {
	
	
	
		var $ball = $('#circle');
		var $property = $('#property');
		var $color = $('#color');
		
		
		$('form').on('submit', function (e) {
			var color = $color.val();
	
		e.preventDefault();
	
		if (color) {
		  $ball.css($property.val(), color);
		}
		});

		
});