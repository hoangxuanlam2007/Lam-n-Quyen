var music = document.getElementById("music");
var playButton = document.getElementById("play");
var pauseButton = document.getElementById("pause");
var playhead = document.getElementById("elapsed");
var timeline = document.getElementById("slider");
var timer = document.getElementById("timer");
var duration;
pauseButton.style.visibility = "hidden";

var timelineWidth = timeline.offsetWidth - playhead.offsetWidth;
music.addEventListener("timeupdate", timeUpdate, false);

function timeUpdate() {
	var playPercent = timelineWidth * (music.currentTime / duration);
	playhead.style.width = playPercent + "px";
}

playButton.onclick = function() {
	music.play();
	playButton.style.visibility = "hidden";
	pause.style.visibility = "visible";
}

pauseButton.onclick = function() {
	music.pause();
	playButton.style.visibility = "visible";
	pause.style.visibility = "hidden";
}

function volume() {
    var audio = document.getElementById('music');
    audio.volume = 0.1;
}

volume();

  // ---------------------------------------- //
  // Kill the funky svg path that make the 
  // transfrom animation works incorrectly 
  // (incorrect center point).
  function killFunkySVG() {
    var incorrectPathPoint = /[achlmrqstv]/ig,
        paths = document.querySelectorAll("path"),
        i = paths.length,
        commands;

    while (--i > -1) {
        commands = (paths[i].getAttribute("d") + "").match(incorrectPathPoint);
        if (commands && commands.length < 2) {
            console.log("found bad path: ", paths[i]);
            paths[i].parentNode.removeChild(paths[i]);
        }
    }
  }
  window.onload = function() { //load this function onload
    killFunkySVG();
  }
  // ---------------------------------------- //