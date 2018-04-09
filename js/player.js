function play_player(){
	window.pp.play();
}

function pause_player(){
	window.pp.pause();
}

function volup(){
	var vol = window.pp.getVolume();
	if (vol != 1){
		vol += .1;
		window.pp.setVolume(vol);
	}
}

function voldown(){
	var vol = window.pp.getVolume();
	if (vol != 0){
		vol -= .1;
		window.pp.setVolume(vol);
	}
}

function mute(){
	window.pp.mute();
}

function unmute(){
	window.pp.unmute();
}

function ChangeVideo(){
	var Assets = {
		'autoplay':true,
		'loop':false
	}
	window.pp.setEmbedCode("prZmF4ZTE6Q7kXkOVto90QR7x5ZOApqS",Assets);
}