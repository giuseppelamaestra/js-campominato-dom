
function createElement (tagName, className, htmlContent){
    const htmlElement = document.createElement(tagName);
    htmlElement.className = className;
    htmlElement.innerHTML = htmlContent;

    return htmlElement;
}


const playButton = document.querySelector("header button.play-button");

const gridElement = document.querySelector("div.grid");

playButton.addEventListener(("click"), function(){
       startNewGame(); 

})



function startNewGame(){
    const gridElement = document.querySelector('div.grid');
    const level = parseInt(document.getElementById('level-select').value);
    const outputBanner = document.querySelector('h2.info-banner');

    let userScore = 0;
    let cellsNumber = 0;
    let cellsClass;
    let isGameOver = false;



    if (level === 0){
        cellsNumber = 100;
        cellsClass = 'cell-easy';
    } else if (level === 1){
        cellsNumber = 81;
        cellsClass = 'cell-medium';
    } else {
        cellsNumber = 49;
        cellsClass = 'cell-hard';
    }




    const bombsList = getRandomUniqueNumber(1, cellsNumber, 16);
    console.log(bombsList);




    outputBanner.innerHTML = "Welcome! Click a cell to get a point!";
    gridElement.innerHTML = "";
    gridElement.classList.remove('game-over');


    for (let index = 0; index < cellsNumber; index++) {
        const newCell = createElement('div','cell '+ cellsClass,
                        `<p>${index + 1}</p>`);
        newCell.addEventListener('click', function(){
            console.log(index + 1);
            this.classList.toggle('active'); // this === newCell
        });
        gridElement.appendChild(newCell);
    }
}






function getRandomUniqueNumber( minNum, maxNum, elements ){
    const numbersList = [];
    if ( (maxNum - minNum) < elements ){
        return [];
    }
    while (numbersList.length < elements){
        const newRandomNumber = getRandomInt(minNum, maxNum);
        if (!numbersList.includes(newRandomNumber)){
            numbersList.push(newRandomNumber);
        }
    }
    return numbersList;
}
