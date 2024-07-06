/* --------------------------------------------------
VIDEO ELEMENTS
-------------------------------------------------- */
let aboutVideo = document.querySelector("#about-video");
let pausePlayBtnWrapper = document.querySelector(".play-btn-wrapper");
let pausePlayBtn = document.querySelector(".play-btn");
let controlsWrapper = document.querySelector(".video-controls-wrapper");
let controls = document.querySelector(".video-controls");

/* --------------------------------------------------
VIDEO CONTROLS
-------------------------------------------------- */

// PAUSE PLAY
pausePlayBtnWrapper.addEventListener("click", (e) => {
   pausePlayBtn.classList.remove("fa-arrow-rotate-left");
   aboutVideo.paused
      ? [aboutVideo.play(), pausePlayBtn.classList.remove("fa-play")]
      : [aboutVideo.pause(), pausePlayBtn.classList.add("fa-play")];

   // MOBILE AUTO HIDE
   controls.style.opacity = "1";
   controls.style.pointerEvents = "unset";
   timeDelay = 1;
   clearInterval(delay);
   delay = setInterval(delayCheck, 500);
});

// VIDEO TIME CHANGE
aboutVideo.addEventListener("timeupdate", (e) => {
   // VIDEO ENDED
   if (e.target.currentTime == aboutVideo.duration) {
      pausePlayBtn.classList.add("fa-arrow-rotate-left");
      controls.style.opacity = "1";
   }
});

/* --------------------------------------------------
VIDEO CONTROLS HIDE TOGGLE
-------------------------------------------------- */
let timeDelay = 1;
let timeDelayMax = 5;
function delayCheck() {
   if (timeDelay == timeDelayMax && aboutVideo.paused == false) {
      controls.style.opacity = "0";
      controls.style.pointerEvents = "none";
      timeDelay = 1;
   }
   timeDelay++;
}

let delay = setInterval(delayCheck, 1000);

controlsWrapper.addEventListener("mousemove", (e) => {
   controls.style.opacity = "1";
   controls.style.pointerEvents = "unset";
   timeDelay = 1;
   clearInterval(delay);
   delay = setInterval(delayCheck, 500);
});
