'use strict';

// ASSIGNMENT: render three images in random sequence.
// acquire parent element 'inventory' and create global elements
var parentElement = document.getElementById('inventory');
var parentList = document.getElementById('item-list');
var itemArray = [];
var clickLimit = 25;
var repeatAvoidArray = [];
var clickTotal = [];
var shownTotal = [];

//generate object constructor
function Items(itemPhoto, alt) {
    this.itemPhoto = itemPhoto;
    this.alt = alt;
    this.title = alt;
    this.clickCounter = 0;
    this.itemCounter = 0;
    itemArray.push(this);
}
// ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass']

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
//while loop created to avoid image reptition
    while(repeatAvoidArray.includes(randomImageIndex)) {
        randomImageIndex = getRandomNumber(itemArray.length);
    }

    repeatAvoidArray.push(randomImageIndex);
//following if statement will remove the first item in array
    if (repeatAvoidArray.length > 6) {
        repeatAvoidArray.shift();
    }
//declare variable for the chosen random images from itemArray
var chosenRandomImage = itemArray[randomImageIndex];
//generates total times an item was shown
chosenRandomImage.itemCounter++;
//create the image tag to append to parent
buildElements(chosenRandomImage);
}

function buildElements(chosenRandomImage) {
    var itemImage = document.createElement('img');
    itemImage.setAttribute('src', chosenRandomImage.itemPhoto);
    itemImage.setAttribute('alt', chosenRandomImage.alt);
    itemImage.setAttribute('title', chosenRandomImage.title);

    var radioButton = document.createElement ('input')
    radioButton.setAttribute('type', 'radio');
    radioButton.setAttribute('value', chosenRandomImage.alt);
//append to parent
parentElement.appendChild(radioButton);
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
        console.log('inside else statement');
    parentElement.innerHTML = '';
    for (var i = 0; i < itemArray.length; i++) {
        var listResults = document.createElement('li');
        listResults.textContent = itemArray[i].alt + ' had ' + itemArray[i].clickCounter + ' votes and was shown ' + itemArray[i].itemCounter + ' times.';
        parentList.appendChild(listResults);
        }
        clicks();
        console.log('my total clicks', clickTotal);
        barChart();
    }
}
parentElement.addEventListener('click', clickImage);

displayRandomImage();
displayRandomImage();
displayRandomImage();



//create "clickTotal" function, total clicks per image pushed into global array
function clicks() {
    for (var i = 0; i < itemArray.length; i++) {
        var clickData = (itemArray[i].clickCounter);
        console.log('this is my clickData:', clickData);
        clickTotal.push(clickData);
        var shownData = (itemArray[i].itemCounter);
        shownTotal.push(shownData);
    }
}
//create "shownTotal" function, total times image shown pushed into global array
// function views() {
//     for (var i = 0; i < itemArray.length; i++) {
        
//         console.log('this is my shownData', shownData);
        
//     }
// }


// views();

var jsonArray = JSON.stringify(itemArray.clickCounter);
// console.log('this is my click counter data', jsonArray);
//generate bar graph with canvas
function barChart() {
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'],
        datasets: [{
            label: '# of Votes',
            data: clickTotal,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)'
            ],
            borderWidth: 1
        },{
            label: '# of Times Shown',
            data: shownTotal, 
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)'
            ],
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
}