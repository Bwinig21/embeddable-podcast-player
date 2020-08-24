//Episode details
var episode = {
  title: "[Title]",
  description: "[Description]",
  URL: "[Episode URL]",
  duration: ["Episode length in seconds"],
  image: "[Image URL]"
};

//Use getElem instead of getElementById
function getElem(id) {
  "use strict";
  return document.getElementById(id);
}

//Defining variables and populating UI
var audio = getElem("audio");
getElem("title").innerHTML += episode.title;
getElem("description").innerHTML = episode.description;
getElem("artwork").src = episode.image;
getElem("audio").src = episode.URL;
var progressBar = getElem("progress");
progressBar.max = episode.duration;
progressBar.value = 0;
var border = getElem("colored");
var playing = false;

//End of episode resets controls
audio.addEventListener("ended", function () {
  "use strict";
  pause();
  progressBar.value = 0;
});

//Switch between playing and paused
function playPause() {
  "use strict";
  if (!playing) {
    play();
  } else {
    playing = false;
    pause();
  }
}

//Update progress bar
function updateProgress() {
  "use strict";
  progressBar.value = audio.currentTime;
}

//Episode info animation
function displayInfo() {
  "use strict";
  getElem("info").style.cssText = "margin-top: .25em;opacity:1;";
}

//Switch from paused to playing
function play() {
  "use strict";
  playing = true;
  audio.play();
  getElem("playPause").src = "assets/pause.svg";
  getElem("playPause").alt = "Pause";
  audio.addEventListener("timeupdate", updateProgress);
  displayInfo();
  border.style.animationPlayState = "running";
}

//Switch from playing to paused
function pause() {
  "use strict";
  playing = false;
  audio.pause();
  getElem("playPause").src = "assets/play.svg";
  getElem("playPause").alt = "Play";
  audio.removeEventListener("timeupdate", updateProgress)
  border.style.animationPlayState = "paused";
}

//Allow progress bar to control playback position
function skip() {
  "use strict";
  audio.currentTime = progressBar.value;
  if (playing) {
    audio.addEventListener("timeupdate", updateProgress);
  }
}

//Stop updating progress bar
function preventUpdate() {
  "use strict";
  audio.removeEventListener("timeupdate", updateProgress);
}

//Process keyboard events
function keypress() {
  if (event.code == "Space") {
    playPause();
  };
}