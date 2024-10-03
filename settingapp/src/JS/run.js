const btn1Clicked = () => {
  document.getElementById('none').style.opacity = '1'
  document.getElementById('WPA2-Personal').style.opacity = '0'
  document.getElementById('WPA3-Personal').style.opacity = '0'
  document.getElementById('btn1').style.color = 'blue'
  document.getElementById('btn2').style.color = 'black'
  document.getElementById('btn3').style.color = 'black'
}
const btn2Clicked = () => {
  document.getElementById('none').style.opacity = '0'
  document.getElementById('WPA2-Personal').style.opacity = '1'
  document.getElementById('WPA3-Personal').style.opacity = '0'
  document.getElementById('btn2').style.color = 'blue'
  document.getElementById('btn1').style.color = 'black'
  document.getElementById('btn3').style.color = 'black'
}
const btn3Clicked = () => {
  document.getElementById('none').style.opacity = '0'
  document.getElementById('WPA2-Personal').style.opacity = '0'
  document.getElementById('WPA3-Personal').style.opacity = '1'
  document.getElementById('btn2').style.color = 'black'
  document.getElementById('btn1').style.color = 'black'
  document.getElementById('btn3').style.color = 'blue'
}

const bands1 = document.getElementById('band1')
const bands2 = document.getElementById('band2')
const checks1 = document.getElementById('checkBand1')
const checks2 = document.getElementById('checkBand2')
const band1Clicked = () => {
  checks1.style.opacity = '1'
  checks2.style.opacity = '0'
  bands1.style.color = 'blue'
  bands2.style.color = 'black'
}
const band2Clicked = () => {
  checks1.style.opacity = '0'
  checks2.style.opacity = '1'
  bands1.style.color = 'black'
  bands2.style.color = 'blue'
}
const nOn = document.getElementById('On')
const nOff = document.getElementById('Off')
const checkOn = document.getElementById('checkOn')
const checkOff = document.getElementById('checkOff')
const SSID1Clicked = () => {
  checkOn.style.opacity = '0'
  checkOff.style.opacity = '1'
  nOn.style.color = 'black'
  nOff.style.color = 'blue'
}
const SSID2Clicked = () => {
  checkOn.style.opacity = '1'
  checkOff.style.opacity = '0'
  nOn.style.color = 'blue'
  nOff.style.color = 'black'
}

// portable hotspot

const size1 = document.getElementById('size1')
const size2 = document.getElementById('size2')
const checkSize1 = document.getElementById('checkSize1')
const checkSize2 = document.getElementById('checkSize2')
const size1Clicked = () => {
  checkSize1.style.opacity = '1'
  checkSize2.style.opacity = '0'
  size1.style.color = 'blue'
  size2.style.color = 'black'
}
const size2Clicked = () => {
  checkSize1.style.opacity = '0'
  checkSize2.style.opacity = '1'
  size1.style.color = 'black'
  size2.style.color = 'blue'
}
const notify1 = document.getElementById('notify1')
const notify2 = document.getElementById('notify2')
const checkNotify1 = document.getElementById('checkNotify1')
const checkNotify2 = document.getElementById('checkNotify2')
const notify1Clicked = () => {
  checkNotify1.style.opacity = '1'
  checkNotify2.style.opacity = '0'
  notify1.style.color = 'blue'
  notify2.style.color = 'black'
}
const notify2Clicked = () => {
  checkNotify1.style.opacity = '0'
  checkNotify2.style.opacity = '1'
  notify1.style.color = 'black'
  notify2.style.color = 'blue'
}

// display mode light and dark
const btnClick = btn => {
  if (btn === 'light') {
    document.getElementById('light').style.border = '3px solid blue'
    document.getElementById('dark').style.border = 'none'
    document.getElementById('textLight').style.color = 'blue'
    document.getElementById('textDark').style.color = 'black'
  } else {
    document.getElementById('dark').style.border = '3px solid blue'
    document.getElementById('light').style.border = 'none'
    document.getElementById('textLight').style.color = 'black'
    document.getElementById('textDark').style.color = 'blue'
  }

  // document.getElementById(text).style.color = 'blue'
}

// limits block under dataLImit

const Limit = () => {
  document.getElementById('Size').style.display = 'none'
  document.getElementById('customSizeForm').style.display = 'none'

  document.getElementById('Notify').style.display = 'block'
}
const CustomSizeForm = () => {
  document.getElementById('dataForm').style.display = 'none'
  document.getElementById('customSizeForm').style.display = 'block'
  document.getElementById('Notify').style.display = 'none'
}

const Size = () => {
  document.getElementById('customSizeForm').style.display = 'none'
  document.getElementById('Size').style.display = 'block'
  document.getElementById('Notify').style.display = 'none'
}
// 🎧Bluetooth functionality


module.exports = {
  size1Clicked,
  size2Clicked,
  notify1Clicked,
  notify2Clicked,
  btn1Clicked,
  btn2Clicked,
  btn3Clicked,
  SSID1Clicked,
  SSID2Clicked,
  band1Clicked,
  band2Clicked,
  btnClick,
  Limit,
  CustomSizeForm,
  Size,
  
}
