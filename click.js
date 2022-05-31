const card = document.querySelector('#card');
const container = document.querySelector('.container');
const open = document.querySelector('#open');
const login = document.querySelector('.open-log')
const Reg = document.querySelector('.open-reg')
// const openLogin = document.getElementByTagName('open');
const backCard = document.querySelector('.card-back');
const frontCard = document.querySelector('.card-front');


function showLogin() {
     container.style.visibility = "visible";
   container.style.justify = 'center';
    //  if(container.style.visibility = "hidden"){
    //       container.style.visibility = "visible";
    //   }else (container.style.visibility = "visible"){
    //   container.style.visibility = "hidden";
  }

    
}
// open.addEventListener('click', function (e) {
//     var x = event.currentTarget;
//     console.log(x);
//     x.style.backgroundColor = "white";
//     if (x == Login){
//          card.style.transform = "rotateY(-90deg)"


//     }else{
//         card.style.transform = "rotateY(0)"
//     }
    
// })
function openLogin() {
    card.style.transform = 'translate(0)';
    
     frontCard.style.visibility = 'visible';

   // backCard.style.visibility = "hidden";
    
}
function openReg() {
    card.style.transform = 'translate(100%)';
    
      backCard.style.visibility = 'visible';
      
    // frontCard.style.visibility = "translate(-100)";
}