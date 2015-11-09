$( document ).ready(function() {
	console.log('\'Allo \'Allo!'); // eslint-disable-line no-console
	console.log('start');
	setInterval(checkBathroom, 1000);

	function checkBathroom() {
		$.getJSON( "http://192.168.1.2/api/196d0c80be53def2da8e0d0327395df/lights", function( data ) {
			var already_taken = data[2].state.reachable;
			if(already_taken){
				$("body").css('background-color', 'red');
			} else {
				$("body").css('background-color', 'green');
			}
			
		});
	}

});
