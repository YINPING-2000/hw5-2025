var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
video=this.document.querySelector("#player1");
// 初始化Page Load
video.autoplay=false;
console.log("auto play is set to "+video.autoplay);
video.loop=false;
console.log("loop is set to "+video.loop);

// 播放按钮 Play Button 
document.querySelector("#play").addEventListener("click",function(){
	console.log("Play video");
	video.play();
document.querySelector("#volume").innerHTML = video.volume*100 +"%";
})

// 暂停视频 Pause Button
document.querySelector("#pause").addEventListener("click",function(){
	console.log("Pause video");
	video.pause();
})

// slow down
document.querySelector("#slower").addEventListener("click",function(){
	video.playbackRate *=0.9;
	console.log("New speed of the video is"+ video.playbackRate);
})

// speed up
document.querySelector("#faster").addEventListener("click",function(){
	video.playbackRate /=0.9;
	console.log("New speed of the video is"+ video.playbackRate);
})

// skip ahead
document.querySelector("#skip").addEventListener("click",function(){
	if(video.currentTime+10>video.duration){
			video.currentTime=0;
	}else {
			video.currentTime +=10;
	}
	console.log("Current location is"+video.currentTime);
})

// Mute
document.querySelector("#mute").addEventListener("click",function(){
	if(video.muted){
			video.muted=false;
			document.querySelector("#mute").innerHTML = "Mute";
	} else {
			video.muted=true;
			document.querySelector("#mute").innerHTML = "Unmute";
	}
})

// Volume slider
document.querySelector("#slider").addEventListener("change",function(){
	video.volume=document.querySelector("#slider").value/100;
	document.querySelector("#volume").innerHTML = video.volume*100+"%";
})

// Styled
document.querySelector("#vintage").addEventListener("click",function(){
	video.classList.add("oldSchool");
})

// original
document.querySelector("#orig").addEventListener("click",function(){
	video.classList.remove("oldSchool");
})
});

