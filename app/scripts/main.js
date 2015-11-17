$( document ).ready(function() {
	setInterval(checkBathroom, 1000);

	function checkBathroom() {
		$.getJSON( "http://192.168.0.96/api/196d0c80be53def2da8e0d0327395df/lights", function( data ) {
			var already_taken = data[3].state.reachable;
			if(already_taken){
	 			$("body").css('background-color', 'red');
				$("#favicon").attr("href","favicon_red.ico");
			} else {
				$("body").css('background-color', 'green');
				$("#favicon").attr("href","favicon_green.ico");
			}
		});
	}

});
