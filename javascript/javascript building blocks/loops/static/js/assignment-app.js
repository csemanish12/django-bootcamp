    let myArray = ['tomatoes', 'chick peas', 'onions', 'rice', 'black beans'];
    let list = document.createElement('ul');

    // Add your code here
    for(let i=0; i < myArray.length; i++){
     let item = document.createElement('li')
     item.textContent = myArray[i];
     list.appendChild(item);
    }

    // Don't edit the code below here!

    const section = document.querySelector('section');
    section.appendChild(list);