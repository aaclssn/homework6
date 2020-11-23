var video;



window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	volume.innerHTML = "100%"
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video")
	video.pause()
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("faster 10%");
	video.playbackRate /=.9
	console.log(video.playbackRate)
	
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("slower 10%");
	video.playbackRate *=.9;
	console.log(video.playbackRate)
});


document.querySelector("#skip").addEventListener("click", function() {
	console.log("Current")
	video.currentTime += 5;
	console.log(video.currentTime)
	video.loop = true;
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == true) {
		console.log("Unmuted")
		document.querySelector("#mute").innerHTML = "Mute";
		video.muted = false;
		
	}
	else{
		document.querySelector("#mute").innerHTML = "Unmute";
		video.muted = true;
		console.log("Muted")
	}
	
});


document.querySelector("#volumeSlider").addEventListener("change", function() {
	console.log(this.value;
	document.querySelector("#volume").innerHTML = this.value;
	video.volume = this.value / 100; 
});


document.querySelector("#old").addEventListener("click", function() {
	video.classList.add("oldTime");
	
})

document.querySelector("#original").addEventListener("click", function() {
	video.classList.remove("oldTime");
})






