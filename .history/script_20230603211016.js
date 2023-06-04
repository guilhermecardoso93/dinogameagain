const dino = document.querySelector('.dino')

function handleKeyUp(e) {
  if(e.keyCode === 32) {
    jump()
  } 
}



function jump() {
  let position = 0
  let upInterval = setInterval(() => {
    if(position >= 150){
      clearInterval(upInterval)
    } else {
      position += 20
    dino.style.bottom = position + 'px'
    }
    
  }, 20)
}


console.log('oi')
document.addEventListener('keyup', handleKeyUp)