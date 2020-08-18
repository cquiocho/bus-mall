'use strict';

// ASSIGNMENT: render three images in random sequence.
// acquire parent element 'inventory' and create global elements
var parentElement = document.getElementById('inventory');
var parentList = document.getElementById('item-list');
var itemArray = [];
var clickLimit = 25;
var repeatAvoidArray = [];

//generate object constructor
function Items(itemPhoto, alt) {
    this.itemPhoto = itemPhoto;
    this.alt = alt;
    this.title = alt;
    this.clickCounter = 0;
    this.itemCounter = 0;
    itemArray.push(this);
}

new Items ('../img/bag.jpg', 'bag');
new Items ('../img/banana.jpg', 'banana');
new Items ('../img/bathroom.jpg', 'bathroom');
new Items ('../img/boots.jpg', 'boots');
new Items ('../img/breakfast.jpg', 'breakfast');
new Items ('../img/bubblegum.jpg', 'bubblegum');
new Items ('../img/chair.jpg', 'chair');
new Items ('../img/cthulhu.jpg', 'cthulhu');
new Items ('../img/dog-duck.jpg', 'dog-duck');
new Items ('../img/dragon.jpg', 'dragon');
new Items ('../img/pen.jpg', 'pen');
new Items ('../img/pet-sweep.jpg', 'pet-sweep');
new Items ('../img/scissors.jpg', 'scissors');
new Items ('../img/shark.jpg', 'shark');
new Items ('../img/sweep.png', 'sweep');
new Items ('../img/tauntaun.jpg', 'tauntaun');
new Items ('../img/unicorn.jpg', 'unicorn');
new Items ('../img/usb.gif', 'usb');
new Items ('../img/water-can.jpg', 'water-can');
new Items ('../img/wine-glass.jpg', 'wine-glass');

//declare function to generate random image
function displayRandomImage() {
    var randomImageIndex = getRandomNumber(itemArray.length);
//while loop created 







    //declare variable for the chosen random images from itemArray
var chosenRandomImage = itemArray[randomImageIndex];
//generates total times an item was shown
chosenRandomImage.itemCounter++;
//create the image tag to append to parent










var itemImage = document.createElement('img');
itemImage.setAttribute('src', chosenRandomImage.itemPhoto);
itemImage.setAttribute('alt', chosenRandomImage.alt);
itemImage.setAttribute('title', chosenRandomImage.title);
//append to parent
parentElement.appendChild(itemImage);
}

//acquire the helper function - borrowed from MDN web docs
function getRandomNumber(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

//create 'click' event listener
function clickImage(event) {
var alt = event.target.alt;
clickLimit--;
if (clickLimit !== 0) {
    for (var i = 0; i < itemArray.length; i++) {
        if(alt === itemArray[i].alt) {
            itemArray[i].clickCounter++;
        }
}
parentElement.innerHTML = '';
displayRandomImage();
displayRandomImage();
displayRandomImage();
}
    else{
    parentElement.innerHTML = '';
    for (var i = 0; i < itemArray.length; i++) {
        var listResults = document.createElement('li');
        listResults.textContent = itemArray[i].alt + ' had ' + itemArray[i].clickCounter + ' votes and was shown ' + itemArray[i].itemCounter + ' times.';
        parentList.appendChild(listResults);
        }
    }
}
parentElement.addEventListener('click', clickImage);

displayRandomImage();
displayRandomImage();
displayRandomImage();

