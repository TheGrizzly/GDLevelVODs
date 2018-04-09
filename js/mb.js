function onCreate(player) {
	player.mb.subscribe("*", 'example', function(eventName) {
		console.log(eventName)
		if(eventName == OO.EVENTS.BUFFERING){
			console.log(eventName);
			var load = document.getElementById("loading");
			load.classList.toggle("show");
		}
		if(eventName == "videoPlaying" || eventName == OO.EVENTS.PAUSED){
			console.log(eventName);
			var load = document.getElementById("loading");
			if(load.classList.contains("show")){
				load.classList.toggle("show");
			}
		}
		if(eventName== OO.EVENTS.PLAY){
			console.log(eventName);
			var play = document.getElementById("state-play");
			var pause = document.getElementById("state-pause");
			if(!play.classList.contains("show")){
				play.classList.toggle("show");
				pause.classList.remove("show");
			}
		}
		if(eventName==OO.EVENTS.PAUSED){
			console.log(eventName);
			var play = document.getElementById("state-play");
			var pause = document.getElementById("state-pause");
			if(!pause.classList.contains("show")){
				pause.classList.toggle("show");
				play.classList.remove("show");
			}
		}
		if (eventName==OO.EVENTS.MUTE_STATE_CHANGED && !document.getElementById("loading").classList.contains("show")){
			console.log(eventName);
			var muted = document.getElementById("state-muted");
			muted.classList.toggle("show");
		}
		if(eventName==OO.EVENTS.PLAYED){
			console.log(eventName);
			var fin = document.getElementById("fin");
			fin.classList.toggle("show");
		}
		}
	);
	
}

