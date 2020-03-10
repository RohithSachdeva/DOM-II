// // Your code goes here

// homeLink.addEventListener(
//     'click', //string w the name of the event
//     () => {
//         //things we want happening when this link is clicked
//         // link gets clicked
//         console.log('the link got clicked');
//     }
// )

// document.querySelector('nav').addEventListener('click', () => {
//     console.log('the nav got clicked');
// })

// document.querySelector('header').addEventListener('click', () => {
//     console.log('the header got clicked');
// })

// document.body.addEventListener('click', () => {
//     console.log('the body of the page got clicked');
// })


function clickEventHandler(event) {
    console.log(event.type + '!!!!!!!!!!!!!!!!!!!!!!!!!!!')
  }
  document.querySelector('a').addEventListener('click', clickEventHandler)
  document.querySelector('nav').addEventListener('click', clickEventHandler)
  document.querySelector('header').addEventListener('click', clickEventHandler)
  document.body.addEventListener('click', clickEventHandler)
  document.addEventListener('click', clickEventHandler)
  window.addEventListener('click', clickEventHandler)