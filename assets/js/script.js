'use strict'

const targets = document.getElementsByTagName('a')

for( let target of targets )
  target.addEventListener('click', (e) => { e.preventDefault() })


// const blend_target = document.getElementsByClassName('blend')
// for ( let target of blend_target ) {
//   const t = target.children[1]
//   const span = [document.createElement('span'), document.createElement('span')]
//   const className = ['blend_top', 'blend_bottom']
//   const text = t.innerText
//   console.log(span)
//   for( let i = 0; i < span.length; i ++ ) {
//     span[i].setAttribute('class', className[i])
//     span[i].innerText = text
//     t.appendChild(span[i])
//   }
// }