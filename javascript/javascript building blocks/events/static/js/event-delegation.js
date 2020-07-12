
  let buttonBar = document.querySelector('.button-bar');
  let section = document.querySelector('section');

  // Add your code here
  buttonBar.onclick = changeColor;

  function changeColor(e){
  console.log(e)
//  let buttons = document.querySelectorAll('button');
//  buttons.forEach(function(button){
//   //button.style.backgroundColor = button.textContent;
//   if (button.textContent === e.target.innerText){
//     button.style.backgroundColor = button.textContent;
//     }
//   else{
//     button.style.backgroundColor ='white';
//    }
//  })

   if (e.target && e.target.nodeName == 'BUTTON'){
   e.target.style.backgroundColor = e.target.textContent;
   }

 }
