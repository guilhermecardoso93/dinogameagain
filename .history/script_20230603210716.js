const dino = document.querySelector('.dino')


function jump() {
  let position = 0
  let upInterval = setInterval(() => {
    position += 20
    dino.style.bottom = position + 'px'
  }, 20)
}


function handleKeyUp(e) {
  if(e.keyCode === 32) {
    jump()
  } else {
    return
  }
}

document.addEventListener('keyup', handleKeyUp)