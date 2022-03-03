// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Inflate The Unicorn!')

//sound effects
var bray = new Audio()
bray.src = './audio/bray.mp3'

var whoop = new Audio()
whoop.src = './audio/whoop.mp3'

//eventlistener to run change out image function
var uni0 = document.getElementsByClassName('inflate-an-image')[0] //first element of the image array, for every click it runs the changeImage function
uni0.addEventListener('click', changeImage0)

var uni1 = document.getElementsByClassName('inflate-an-image')[1]
uni1.addEventListener('click', changeImage1)

var uni2 = document.getElementsByClassName('inflate-an-image')[2]
uni2.addEventListener('click', changeImage2)

//click counter
let uniClick0 = 0
let uniClick1 = 0
let uniClick2 = 0

// a function to increase the click counter by 1 each click and call the function to change the image
function changeImage0() {
  uniClick0++
  changeUp0()
}

function changeImage1() {
  uniClick1++
  changeUp1()
}

function changeImage2() {
  uniClick2++
  changeUp2()
}

function changeUp0() {
  if (uniClick0 == 0) {
    bray.play()
    uni0.src = './images/unicorn-0.png'
  } else if (uniClick0 == 1) {
    bray.play()
    uni0.src = './images/unicorn-1.png'
  } else if (uniClick0 == 2) {
    bray.play()
    uni0.src = './images/unicorn-2.png'
  } else if (uniClick0 == 3) {
    bray.play()
    uni0.src = './images/unicorn-3.png'
  } else if (uniClick0 == 4) {
    uni0.src = './images/uni.webp'
    whoop.play()
    alert('Unicorn 1 says: I feel whole again!!')
  }
}

function changeUp1() {
  if (uniClick1 == 0) {
    bray.play()
    uni1.src = './images/unicorn-0.png'
  } else if (uniClick1 == 1) {
    bray.play()
    uni1.src = './images/unicorn-1.png'
  } else if (uniClick1 == 2) {
    bray.play()
    uni1.src = './images/unicorn-2.png'
  } else if (uniClick1 == 3) {
    bray.play()
    uni1.src = './images/unicorn-3.png'
  } else if (uniClick1 == 4) {
    uni1.src = './images/uni2.gif'
    whoop.play()
    alert('Unicorn 2 says: Living my best life!!')
  }
}

function changeUp2() {
  if (uniClick2 == 0) {
    bray.play()
    uni2.src = './images/unicorn-0.png'
  } else if (uniClick2 == 1) {
    bray.play()
    uni2.src = './images/unicorn-1.png'
  } else if (uniClick2 == 2) {
    bray.play()
    uni2.src = './images/unicorn-2.png'
  } else if (uniClick2 == 3) {
    bray.play()
    uni2.src = './images/unicorn-3.png'
  } else if (uniClick2 == 4) {
    uni2.src = './images/uni3.gif'
    whoop.play()
    alert('Unicorn 3 says: Does my head look big in this?')
  }
}
