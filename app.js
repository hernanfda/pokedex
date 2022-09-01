// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
const inputField = document.querySelector('input')
const showButton = document.querySelector('#show')
const resetButton = document.querySelector('#reset')

showButton.addEventListener('click', function(){
    showPokemons(inputField.value)
})

resetButton.addEventListener('click', function(){
    reset()
})



//Show pokemons function
let showPokemons = function(amountOfPokemons){
    //Prevent to show duplicated pokemons in case of a new search without reset
    const existingElements = document.querySelectorAll('div')
    for(element of existingElements){
        element.remove()
    }
    for (let i = 1; i <= amountOfPokemons; i++) { //There is up to 898
        const newDiv = document.createElement('div');
        const newImg = document.createElement('img');
        const newSpan = document.createElement('span');
        newImg.src = `${baseURL}${i}.png`;
        newSpan.innerText = `#${i}`;
        newDiv.appendChild(newImg);
        newDiv.appendChild(newSpan);
        newDiv.classList.add('pokemon');
        container.appendChild(newDiv);
    }
}

//Reset button
let reset = function (){
    const existingElements = document.querySelectorAll('div')
    for(element of existingElements){
        element.remove()
    }
}