const para = document.querySelector('p');

para.addEventListener('click', updateName);

function updateName(){
    let name = prompt('Enter a new name');
    para.textContent = 'Player 1: ' + name;
}

// select all the elements with tag button
const buttons = document.querySelectorAll('button');

for(let i = 0; i < buttons.length ; i++) {
    buttons[i].addEventListener('click', createParagraph);
  }

function createParagraph() {
    let para = document.createElement('p');
    para.textContent = 'You clicked the button!';
    document.body.appendChild(para);
  }

function createParagraph2(){
    let para = document.createElement('p')
    para.textContent = 'You click paragraph 2';
    document.body.appendChild(para);
}