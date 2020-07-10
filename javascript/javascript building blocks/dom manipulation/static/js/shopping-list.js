const list = document.querySelector('ul');
item = document.querySelector('#item-name');
const btn = document.querySelector('button');

btn.onclick = function(){
  if (item.value !== ''){
  listItem = document.createElement('li');
  listButton = document.createElement('button');
  listText = document.createElement('span');

  listItem.appendChild(listText);
  listText.textContent = item.value;

  listItem.appendChild(listButton);
  listButton.textContent = 'Delete';

  list.appendChild(listItem);

  item.value = '';

  listButton.onclick = function(e){
  list.removeChild(listItem);
  }

  item.focus();

  }
}