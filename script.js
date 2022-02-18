function toast(msg) {
  document.querySelector(".toast").innerHTML = msg;
  document.querySelector(".toast").style.animationPlayState = "running";
}

//modal function

function show() {
  document.querySelector(".background").className = "background show";
}

function close() {
  document.querySelector(".background").className = "background";
}

document.querySelector("#f5Text").addEventListener("click", show);
document.querySelector("#close").addEventListener("click", close);
//end modal function

var total;
var forCount;

function setTime() {
  var hour = document.getElementById("hour").value;
  var min = document.getElementById("min").value;
  var sec = document.getElementById("sec").value;

  total = hour * 3600 + min * 60 + sec * 1;
  forCount = total;
  total = total + "s";
  var realMin = hour * 60 + min * 1;

  if (total !== "0s") {
    document.getElementById("minutes").innerHTML = realMin;
    document.body.style.setProperty("--timerTime", total);
  } else {
    toast("시간을 설정하세요");
  }

  if (realMin === 1) {
    document.getElementById("title").innerHTML = "1 minute Timer";
  } else {
    document.getElementById("title").innerHTML = realMin + " minutes Timer";
  }
}

document.getElementById("submit").addEventListener("click", close);

function setColor() {
  var clColor = document.getElementById("clockColor").value;
  var bgColor = document.getElementById("backColor").value;

  document.body.style.setProperty("--bgColor", bgColor);
  document.body.style.setProperty("--clockColor", clColor);
}

function hide() {
  document.getElementById("speech").style.visibility = "hidden";
}

document.getElementById("f5Text").addEventListener("click", hide);
document.getElementById("submit").addEventListener("click", setTime);
document.getElementById("submit").addEventListener("click", setColor);

var condition = "paused";

function start() {
  if (condition === "paused") {
    startTimer();
  } else {
    stopTimer();
  }
}

//[f5] div 만 새로고침 fn
function f5() {
    stopTimer();
    document.getElementById("f5").innerHTML = document.getElementById(
      "f5"
    ).innerHTML;
}


function f5Text() {
    document.getElementById("f5Text").innerHTML = document.getElementById(
    "f5Text"
    ).innerHTML;
}

document.querySelector("#reset").addEventListener("click", f5);
document.querySelector("#reset").addEventListener("click", f5Text);

document.querySelector("#timerButton").addEventListener("click", start);

document.querySelector("#text").addEventListener("animationiteration", function() {
    Swal.fire({
        title: '시간 초과',
        showDenyButton: false,
        showCancelButton: false,
        confirmButtonText: '확인',
        icon: "warning"
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          reset();
        } 
      })

    f5();
    f5Text();
});


function reset() {
  window.location.reload();
}

function startTimer() {

  document.getElementById("timerButton").className = "stop";
  document.getElementById("timerButton").innerHTML = "정지";
  document.getElementById("timer").style.animationPlayState = "running";
  document.getElementById("mask").style.animationPlayState = "running";
  document.getElementById("text").style.animationPlayState = "running";
  condition = "running";

  document.body.style.setProperty("--grPercent", "50%");
}

function stopTimer() {

  document.getElementById("timerButton").className = "start";
  document.getElementById("timerButton").innerHTML = "시작";
  document.getElementById("timer").style.animationPlayState = "paused";
  document.getElementById("mask").style.animationPlayState = "paused";
  document.getElementById("text").style.animationPlayState = "paused";
  condition = "paused";

  document.body.style.setProperty("--grPercent", "50%");
}
