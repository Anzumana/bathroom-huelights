$( document ).ready(function() {
	var taken_before = false;
	setInterval(checkBathroom, 1000);

	function checkBathroom() {
		$.getJSON( "http://192.168.0.96/api/196d0c80be53def2da8e0d0327395df/lights", function( data ) {
			var already_taken = data[3].state.reachable;
			if(already_taken){
	 			$("body").css('background-color', 'red');
				$("#favicon").attr("href","favicon_red.ico");
				taken_before = true;
			} else {
				$("body").css('background-color', 'green');
				$("#favicon").attr("href","favicon_green.ico");
				if(taken_before){
					$.post("https://hooks.slack.com/services/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",'payload={"text": "Freee", "channel": "#p_bathroom", "username":"bathroom_bot", "icon_emoji": ":troll:"}');
				}
				taken_before = false;
			}
			
		});
	}

});
