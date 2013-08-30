function update_tracker() {
	var count = $('.addthis_counter > a').html();
	$(".linediv-l > h3").html(count)
	$(".linediv-c > h3").html(count);
	var percent = Math.round(count / 100 * 100);
	var width = percent + "%";
	$(".bar-success").css({width: width});
}

$(document).ready( function() {
	setInterval( function() { update_tracker(); }, 1000);
});