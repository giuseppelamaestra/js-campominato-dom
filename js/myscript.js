
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

    
    let cellsNumber = 0;
    let cellsClass;
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
    gridElement.innerHTML = "";
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



