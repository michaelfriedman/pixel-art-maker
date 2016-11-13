(() => {
  'use strict'
  const colors = document.querySelectorAll('span')
  const divs = document.getElementsByTagName('div')
  let currentColor = null
  const colorIndicator = document.getElementById('colorIndicator')
  let customColor = document.getElementById('customColor').value
  const input = document.getElementById('customColor')
  const createGrid = () => {
    for (let i = 0; i < 1643; i++) {
      const pixel = document.createElement('div')
      document.getElementById('pixel-grid').appendChild(pixel)
      }
  }
  createGrid()
  input.addEventListener('input', () => {
    customColor = document.getElementById('customColor').value
    currentColor = customColor
  })
  for (const color of colors) {
    color.addEventListener('click', () => {
      currentColor = color.className
      colorIndicator.style.backgroundColor = currentColor
    })
  }
  for (const div of divs) {
    div.addEventListener('click', () => {
      div.style.backgroundColor = currentColor
    })
  }
})()
