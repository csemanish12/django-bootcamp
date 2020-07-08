let myName;
myName = 'manish';
let myAge = 25;

const section = document.querySelector('section')

section.innerHTML = ' ';
let para1 = document.createElement('p');
para1.textContent = myName;
let para2 = document.createElement('p');
para2.textContent = `In 20 years, I will be ${myAge + 20}`;

section.appendChild(para1);
section.appendChild(para2);