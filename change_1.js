$('#Rectangele_12').submit(function(event){
	event.preventDefault();
	var rec = $("#Rectangle_11").val();
	$('#one').html(rec);
})