function initialize() {
  const controls = document.getElementsByClassName("controls")[0];
  if (controls != null) {
    controls.style.display = "none";
  }

  const sidedock = document.getElementsByClassName("sidedock")[0];
  if (sidedock != null) {
    sidedock.style.display = "none";
  }

  const video = document.getElementsByTagName("video")[0];
  if (video != null) {
    video.setAttribute("webkit-playsinline", "");
    video.setAttribute("playsinline", "");
    video.webkitEnterFullscreen = undefined;
  }
}

function eventFire(el, etype) {
  if (el.fireEvent) {
    el.fireEvent(`on${etype}`);
  } else {
    const evObj = document.createEvent("Events");
    evObj.initEvent(etype, true, false);
    el.dispatchEvent(evObj);
  }
}

function autoplay() {
  const playButton = document.getElementsByClassName("play")[0];
  if (playButton != null) {
    eventFire(playButton, "click");
  }
}

function receiveMessage(evt) {
  if (typeof evt.data != "string") return;

  try {
    const obj = JSON.parse(evt.data);
    if (!obj.event || obj.event !== "inject") return;

    if (obj.command === "initialize") initialize();
    else if (obj.command === "autoplay") autoplay();
  } catch (ex) {
    //
  }
}

window.addEventListener("message", receiveMessage, false);
