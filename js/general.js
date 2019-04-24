// JavaScript Document
$(document).ready(function(){
	$("a.mobile").click(function(){
		$(".navbar").slideToggle('fast');
	});
	
	window.onresize = function(event) {
		if($(window).width() > 480) {
			$(".navbar").show();
		}
	};
	

});