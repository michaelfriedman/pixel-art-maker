(function () {
  'use strict'
  const divs = document.querySelectorAll('div')
  const colors = document.querySelectorAll('span')
  let currentColor = null
  let customColor = document.getElementById('customColor').value
  console.log(customColor)
  const input = document.getElementById('customColor')
  console.log(input)
  input.addEventListener('input', () => {
    customColor = document.getElementById('customColor').value
    currentColor = customColor
    console.log(customColor)
  })
  for (const color of colors) {
    console.log(color)
    color.addEventListener('click', () => {
      currentColor = color.className
      console.log(currentColor)
    })
    for (const div of divs) {
      div.addEventListener('click', () => {
        div.style.backgroundColor = currentColor
      })
    }
  }
})()
