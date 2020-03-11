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


//  function clickEventHandler(event) {
//     console.log(event.type + '!!!!!!!!!!!!!!!!!!!!!!!!!!!')
//   }
//   document.querySelector('a').addEventListener('click', clickEventHandler)
//   document.querySelector('nav').addEventListener('click', clickEventHandler)
//   document.querySelector('header').addEventListener('click', clickEventHandler)
//   document.body.addEventListener('click', clickEventHandler)
//   document.addEventListener('click', clickEventHandler)
//   window.addEventListener('click', clickEventHandler)


//1
const navigationLinks = document.querySelector('a');
console.log(navigationLinks);

navigationLinks.addEventListener('click', () => {
  console.log('clicked nav bar');
  navigationLinks.style.color = 'red';
});




//2 3
  const funBus = document.querySelector('.intro img');
  funBus.addEventListener('mouseover', () => {
    funBus.style.transform = 'scale(1.5)';
  });

  funBus.addEventListener('mouseleave', () => {
    funBus.style.transform = 'scale(1)';
  });

// 4
  const firstButton = document.querySelector('.btn');
  firstButton.addEventListener('dblclick', () => {
    firstButton.style.backgroundColor = 'red';
  });



//5
  
  const destinationImg = document.querySelector('.content-destination img');

destinationImg.addEventListener('mousemove', function(){
  destinationImg.style.opacity="0.7";
  destinationImg.style.filter="alph(opacity=80)";
});

//6
const contentSect = document.querySelector('.content-section') 
contentSect.addEventListener('wheel', function(){
  event.currentTarget.style.border = "5px solid blue"; 
});

//7 
  const dragNav = document.querySelector('a');
  dragNav.addEventListener('drag', () => {
  dragNav.textContent = "Drag Me!";
});

//8  9
const yellowBlurbs = document.querySelector('.destination')
yellowBlurbs.addEventListener('mouseup', () => {
  yellowBlurbs.style.backgroundColor = 'yellow';
});

const purpleBlurbs = document.querySelector('.destination p')
purpleBlurbs.addEventListener('mousedown', () => {
  purpleBlurbs.style.backgroundColor = 'purple';
});

//10 
const introduction = document.querySelector('.intro');
document.addEventListener('keydown', logKey);
function logKey(e) {
  console.log.textContent += ` ${e.code}`;
};

const foot = document.querySelector('.footer');
  foot.addEventListener('mouseover', () => {
    foot.style.backgroundColor = 'black';
  });




navigationLinks.addEventListener("click", function(event){
  event.preventDefault()
});

