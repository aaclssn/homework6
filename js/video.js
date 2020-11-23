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
	console.log("Muted")
	video.muted = true;

});


document.querySelector("#volumeSlider").addEventListener("change", function() {
	console.log(this.value)
	
});








//change text of volume is 
//change volume of video
//https://www.w3schools.com/js/js_if_else.asp
//video.faster(vid.playbackRate = 0.5);
