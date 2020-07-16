const header = document.querySelector('header');
const section = document.querySelector('section');

let requestUrl = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';

//to create a request, create a new request object instance
let request = new XMLHttpRequest();

//open the request using open()
request.open('GET', requestUrl);

//set the response type
request.responseType = 'json';

//send the request
request.send();

//wait for the response to return
//when load event fires on request object
request.onload = function(){
    const superHeroes = request.response;
    populateHeader(superHeroes);
    showHeroes(superHeroes);
}

function populateHeader(jsonObj){
    const myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['squadName'];
    header.appendChild(myH1);

    const myPara = document.createElement('p');
    myPara.textContent = 'Hometown: '+ jsonObj['homeTown'] + '// Formed: ' + jsonObj['formed'];
    header.appendChild(myPara);
}

function showHeroes(jsonObj){
    const heroes = jsonObj['members'];

    for (let i=0; i < heroes.length; i++){
        const myArticle = document.createElement('article');
        const myH2 = document.createElement('h2');
        const myPara1 = document.createElement('p');
        const myPara2 = document.createElement('p');
        const myPara3 = document.createElement('p');
        const myList = document.createElement('ul');

        myH2.textContent = heroes[i].name;
        myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
        myPara2.textContent = 'Age: ' + heroes[i].age;
        myPara3.textContent = 'Superpowers: ';

        const superPowers = heroes[i].powers;
        for (let j=0; j < superPowers.length; j++){
            const listItem = document.createElement('li');
            listItem.textContent = superPowers[j];
            myList.appendChild(listItem);
        }

        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);

        section.appendChild(myArticle);



    }
}