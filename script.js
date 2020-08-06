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
getElem("audio").src = episode.URL;
var progressBar = getElem("progress");
progressBar.max = episode.duration;
getElem("artwork").src = episode.image;
progressBar.value = 0;
var playing = false;
var interval;
var updateInterval = 500; //Interval between progress bar updates

//End of episode resets controls
audio.addEventListener("ended", function() {
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

//Animate progress bar
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
  interval = setInterval(updateProgress, updateInterval);
  displayInfo();
}

//Switch from playing to paused
function pause() {
  "use strict";
  playing = false;
  audio.pause();
  getElem("playPause").src = "assets/play.svg";
  getElem("playPause").alt = "Play";
  clearInterval(interval);
}

//Allow progress bar to control playback position
function skip() {
  "use strict";
  audio.currentTime = progressBar.value;
  if (playing) {
    interval = setInterval(updateProgress, updateInterval);
  }
}

//Stop updating progress bar
function preventUpdate() {
  "use strict";
  clearInterval(interval);
}
