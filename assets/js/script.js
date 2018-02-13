'use strict'

const targets = document.getElementsByTagName('a')

for(let target of targets)
  target.addEventListener('click', (e) => { e.preventDefault() })