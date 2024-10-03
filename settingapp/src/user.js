
// Get the user agent string
var userAgent = navigator.userAgent
if (userAgent.match(/Android/i)) {
}
// Check if the user agent contains specific keywords to identify the device
else if (userAgent.match(/iPhone|iPad|iPod/i)) {
  // Code for iOS devices
  app3.style.display = 'none'
  app4.style.display = 'none'
}
// Code for Windows devices
else {
  mainDiv.style.alignItems = 'center'
  mainDiv.style.justifyContent = 'center'
}
