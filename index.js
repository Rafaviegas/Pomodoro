const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSum = document.querySelector('.sumFive')
const buttonSub = document.querySelector('.subFive')
const buttonFlorest = document.getElementById('florest')
const buttonRain = document.getElementById('rain')
const buttonCoffee = document.getElementById('coffeeShop')
const buttonFire = document.getElementById('fire')
const SoundFlorest = new Audio('sounds/Floresta.mp3')
const SoundRain = new Audio('sounds/Chuva.mp3')
const SoundCoffee = new Audio('sounds/Cafeteria.mp3')
const SoundFire = new Audio('sounds/Lareira.mp3')
const TimeEnd = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
let minutesDisplay = document.querySelector('.minutes')
let secondsDisplay = document.querySelector('.seconds')
let minutes = Number(minutesDisplay.textContent)
let timerTimeOut

SoundFlorest.loop = true
SoundRain.loop = true 
SoundCoffee.loop = true
SoundFire.loop = true

function reset() {
  updateDisplay(minutes, 0)
  clearTimeout(timerTimeOut)
}

function updateDisplay(newMinutes, seconds) {
  minutesDisplay.textContent = String(newMinutes).padStart(2, '0')
  secondsDisplay.textContent = String(seconds).padStart(2, '0')
}

function countdown() {
  timerTimeOut = setTimeout(function() {
  let seconds = Number(secondsDisplay.textContent)
  let minutes = Number(minutesDisplay.textContent)
  let isFinished = minutes <= 0 && seconds <= 0

  updateDisplay(minutes, 0)

  if (isFinished) {
    SoundCoffee.pause()
    SoundFire.pause()
    SoundFlorest.pause()
    SoundRain.pause()
    TimeEnd.play()
    reset()
    return
  }
  
  if (seconds <= 0 ) {
    seconds = 60
    --minutes
  }
                                                                                    
  updateDisplay(minutes, String(seconds - 1))

  countdown()
}, 1000)
}

function hold() {
  clearTimeout(timerTimeOut)
}

buttonPlay.addEventListener('click', function() {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
  countdown()
})

buttonPause.addEventListener('click', function() {
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
  hold()
})

buttonStop.addEventListener('click', function() {
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
  reset()
  SoundCoffee.pause()
  SoundFire.pause()
  SoundFlorest.pause()
  SoundRain.pause()
  TimeEnd.play()
})

buttonFlorest.addEventListener('click', function() {
  let hasClass = buttonFlorest.classList
  if (hasClass['value'] == 'colorful') {
    buttonFlorest.className = ''
    SoundFlorest.pause()
  } else {
    buttonFlorest.className = 'colorful'
    SoundFlorest.play()
    buttonCoffee.className = ''
    SoundCoffee.pause()
    buttonFire.className = ''
    SoundFire.pause()
    buttonRain.className = ''
    SoundRain.pause()
  }
})

buttonRain.addEventListener('click', function() {
  let hasClass = buttonRain.classList
  if (hasClass['value'] == 'colorful') {
    buttonRain.className = ''
    SoundRain.pause()
  } else {
    buttonRain.className = 'colorful'
    SoundRain.play()
    buttonFlorest.className = ''
    SoundFlorest.pause()
    buttonCoffee.className = ''
    SoundCoffee.pause()
    buttonFire.className = ''
    SoundFire.pause()
  }
})

buttonCoffee.addEventListener('click', function() {
  let hasClass = buttonCoffee.classList
  if (hasClass['value'] == 'colorful') {
    buttonCoffee.className = ''
    SoundCoffee.pause()
  } else {
    buttonCoffee.className = 'colorful'
    SoundCoffee.play()
    buttonFlorest.className = ''
    SoundFlorest.pause()
    buttonFire.className = ''
    SoundFire.pause()
    buttonRain.className = ''
    SoundRain.pause()
  }
})

buttonFire.addEventListener('click', function() {
  let hasClass = buttonFire.classList
  if (hasClass['value'] == 'colorful') {
    buttonFire.className = ''
    SoundFire.pause()
  } else {
    buttonFire.className = 'colorful'
    SoundFire.play()
    buttonFlorest.className = ''
    SoundFlorest.pause()
    buttonCoffee.className = ''
    SoundCoffee.pause()
    buttonRain.className = ''
    SoundRain.pause()
  }
})

buttonSub.addEventListener('click', function() {
  if (minutes > 0) {
    minutes -= 5 
  }
  minutesDisplay.innerHTML = minutes
})

buttonSum.addEventListener('click', function() {
  minutes += 5 
  minutesDisplay.innerHTML = minutes
})
