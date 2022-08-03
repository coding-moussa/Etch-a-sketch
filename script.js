const container = document.querySelector('.container');
const divList = [];
const btn = document.querySelector('.btn')
let numberOfColumns = 16;
let numberOfRows = 16;

/* This function will be called on by the for loop in our 
event listner and will serve to create the divs that represent our pixels . 
It will insert the divs into our container and 
add each on to our array 'divList' as well as our classlist 'divs'
*/

function addDivs() {
    let element = document.createElement('div');
    element.classList.add('divs');
    container.appendChild(element);
    divList.push(element);

}

/* this function will add an mouseover event listener to each pixel in our array divList
it will then apply a random color to each pixel
and add a class of pixelate which will apply the pixelated style to the pixels
 */

function colorDivs() {
    divList.forEach(element => {
        element.addEventListener('mouseover', () => {
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            element.style.backgroundColor = "#" + randomColor;
            element.classList.add('pixelate');

        });
    });
}
/*
Here I added a event listern to the button which does the following when clicked:
    First it clears the grid by reseting the color and removing the pixelated affect
    IT then promts the user to enter two numbers
    Those two numbers are used as the number of grid template columns and rows
    The total number of divs is taken by multiplying the the columns and rows
    The for loop creates and formats our divs using the functions addDivs and colorDivs
*/



btn.addEventListener('click', () => {

    divList.forEach(element => {
        element.style.backgroundColor = "white";
        element.classList.remove('pixelate');
    });


    numberOfColumns = parseInt(prompt("Enter number of columns", "0"), 10);
    numberOfRows = parseInt(prompt("Enter number of rows", "0"), 10);
    container.style.gridTemplateColumns = `repeat(${numberOfColumns},1fr)`;
    container.style.gridTemplateRows = `repeat(${numberOfRows},1fr)`;

    let numberOfDivs = numberOfColumns * numberOfRows;

    for (let i = 0; i < numberOfDivs + 1; i++) {
        addDivs();
        colorDivs();
    }



});