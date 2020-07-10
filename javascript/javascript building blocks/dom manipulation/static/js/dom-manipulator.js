const link = document.querySelector('a');
//The above querySelector() call will match the first <a> element that appears in the document.

// If you wanted to match and do things to multiple elements, you could use Document.querySelectorAll(),

link.textContent = 'Mozilla Developer Network';
link.href = 'https://developer.mozilla.org';
link.target = '_blank';

const sect = document.querySelector('section');
// create element(node)
const para = document.createElement('p');
para.textContent = 'We hope you enjoyed the ride';
para.setAttribute('class', 'highlight');
//para.style.color = 'white';
//para.style.backgroundColor = 'black';
//para.style.padding = '10px';
//para.style.width = '250px';
//para.style.textAlign = 'center';

// place it inside parent
sect.appendChild(para);

const text = document.createTextNode('-the premier source for web development knowledge.');

const linkPara = document.querySelector('p');
linkPara.appendChild(text);

//sect.removeChild(linkPara);
// or
//linkPara.remove();