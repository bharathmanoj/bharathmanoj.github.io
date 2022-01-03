function Move() {
  var redelement = document.getElementById("redbox");
  var pos = 0;
  var anim = setInterval(animate, 5);

  //   function animate() {
  //     pos++;
  //     redelement.style.top = pos + "px";
  //     redelement.style.left = pos + "px";
  //   }
  // }

  function animate() {
    if (pos == 425) {
      clearInterval(anim);
    } else {
      pos++;
      redelement.style.top = pos + "px";
      redelement.style.left = pos + "px";
    }
  }
}

var chairimage = null;

function imgMove() {
  chairimage = document.getElementById("chair");
  chairimage.style.position = "relative";
  chairimage.style.left = "0px";
}
function moveRight() {
  chairimage.style.left = parseInt(chairimage.style.left) + 40 + "px";
}

window.onload = imgMove;
