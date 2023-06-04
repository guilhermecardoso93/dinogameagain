const dino = document.querySelector('.dino');
const background = document.querySelector('.background');

function handleKeyUp(e) {
  if (e.keyCode === 32) {
    jump();
  }
}

function jump() {
  let position = 0;

  let upInterval = setInterval(() => {
    if (position >= 150) {
      clearInterval(upInterval);
      let downInterval = setInterval(() => {
        if(position <= 0) {
          clearInterval(downInterval);
        }
        position -= 20;
        dino.style.bottom = position + "px";
      }, 20);
    } else {
      position += 20;
      dino.style.bottom = position + "px";
    }
  }, 20);
}

console.log("oi");
document.addEventListener("keyup", handleKeyUp);
