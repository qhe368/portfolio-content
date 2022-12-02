let mePic = document.getElementById(`me-pic`)
let greeting = document.getElementById(`aboutme-pic-greeting`)

mePic.addEventListener(`mouseover`, meGreeting)

function meGreeting() {
  greeting.innerHTML = `Let me introduce myself!`
}