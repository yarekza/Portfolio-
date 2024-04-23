let tab = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
];
let prevTab;
let mapOfNumsAndColors = new Map([
    ["", "rgb(204,192,176)"],
    ["2", "rgb(237,227,217)"],
    ["4", "rgb(236,223,204)"],
    ["8", "rgb(242,177,123)"],
    ["16", "rgb(245,150,94)"],
    ["32", "rgb(247,124,93)"],
    ["64", "rgb(244,94,57)"],
    ["128", "rgb(237,206,116)"],
    ["256", "rgb(241,200,110)"],
    ["512", "rgb(235,200,84)"],
    ["1024", "rgb(236,199,56)"],
    ["2048", "rgb(239,195,38)"]
]);


document.addEventListener("keydown", function(event) {
    if (event.key === "w" || event.key === "ArrowUp") {
        addUp();
    }
    else if (event.key === "s" || event.key === "ArrowDown"){
        addDown();
    }
    else if (event.key === "a" || event.key === "ArrowLeft"){
        addLeft();
    }
    else if (event.key === "d" || event.key === "ArrowRight"){
        addRight();
    }
});

function addUp(){
    prevTab = tab.map(row => row.map(num => num)); //
    for(let j=0; j<4; j++){             // iteration through the cells of the col

        let count = 3;  

        for(let i=0; i<3; i++){
            let numOfZerosFromTheEndOfTheCol;

            while(tab[i][j] == tab[i+1][j] || (tab[i][j] == 0 || tab[i+1][j] == 0)){

                tab[i][j] += tab[i+1][j];
                tab[i+1][j] = 0;

                numOfZerosFromTheEndOfTheCol = countZerosFromTheEndOfTheCol(j);
                
                if(numOfZerosFromTheEndOfTheCol == 4 || numOfZerosFromTheEndOfTheCol == count) break;

                else if(numOfZerosFromTheEndOfTheCol == count-2){   
                    tab[i+1][j] = tab[i+2][j];
                    tab[i+2][j] = 0;
                }
                else if(numOfZerosFromTheEndOfTheCol == count-3){   
                    tab[i+1][j] = tab[i+2][j];
                    tab[i+2][j] = tab[i+3][j];
                    tab[i+3][j] = 0;
                }
               
            }
            if(numOfZerosFromTheEndOfTheCol == 4 || numOfZerosFromTheEndOfTheCol == count) continue;

            count--;
        }
    }

    if(!compareTabs(prevTab, tab)) addNumToTab();
}

function addDown(){
    prevTab = tab.map(row => row.map(num => num));
    for(let j=0; j<4; j++){ // iteration through the cells of the col

        let count = 3;  

        for(let i=3; i>0; i--){
            let numOfZerosFromTheStartOfTheCol;

            while(tab[i][j] == tab[i-1][j] || (tab[i][j] == 0 || tab[i-1][j] == 0)){
    
                tab[i][j] += tab[i-1][j];
                tab[i-1][j] = 0;

                numOfZerosFromTheStartOfTheCol = countZerosFromTheStartOfTheCol(j);
                
                if(numOfZerosFromTheStartOfTheCol == 4 || numOfZerosFromTheStartOfTheCol == count) break;

                else if(numOfZerosFromTheStartOfTheCol == count-2){   
                    tab[i-1][j] = tab[i-2][j];
                    tab[i-2][j] = 0;
                }
                else if(numOfZerosFromTheStartOfTheCol == count-3){   
                    tab[i-1][j] = tab[i-2][j];
                    tab[i-2][j] = tab[i-3][j];
                    tab[i-3][j] = 0;
                }
               
            }
            if(numOfZerosFromTheStartOfTheCol == 4 || numOfZerosFromTheStartOfTheCol == count) continue;

            count--;
        }
    }

    if(!compareTabs(prevTab, tab)) addNumToTab();
}

function addLeft(){
    prevTab = tab.map(row => row.map(num => num));
    for(let i=0; i<4; i++){ // iteration through the cells of the row

        let count = 3;  

        for(let j=0; j<3; j++){
            let numOfZerosFromTheEndOfTheRow;

            while(tab[i][j] == tab[i][j+1] || (tab[i][j] == 0 || tab[i][j+1] == 0)){
    
                tab[i][j] += tab[i][j+1];
                tab[i][j+1] = 0;

                numOfZerosFromTheEndOfTheRow = countZerosFromTheEndOfTheRow(i);
                
                if(numOfZerosFromTheEndOfTheRow == 4 || numOfZerosFromTheEndOfTheRow == count) break;

                else if(numOfZerosFromTheEndOfTheRow == count-2){   
                    tab[i][j+1] = tab[i][j+2];
                    tab[i][j+2] = 0;
                }
                else if(numOfZerosFromTheEndOfTheRow == count-3){   
                    tab[i][j+1] = tab[i][j+2];
                    tab[i][j+2] = tab[i][j+3];
                    tab[i][j+3] = 0;
                }
               
            }
            if(numOfZerosFromTheEndOfTheRow == 4 || numOfZerosFromTheEndOfTheRow == count) continue;

            count--;
        }
    }

    if(!compareTabs(prevTab, tab)) addNumToTab();
}

function addRight(){
    prevTab = tab.map(row => row.map(num => num));  
    for(let i=0; i<4; i++){ // iteration through the cells of the row

        let count = 3;  

        for(let j=3; j>0; j--){
            let numOfZerosFromTheStartOfTheRow;

            while(tab[i][j] == tab[i][j-1] || (tab[i][j] == 0 || tab[i][j-1] == 0)){
    
                tab[i][j] += tab[i][j-1];
                tab[i][j-1] = 0;

                numOfZerosFromTheStartOfTheRow = countZerosFromTheStartOfTheRow(i);
                
                if(numOfZerosFromTheStartOfTheRow == 4 || numOfZerosFromTheStartOfTheRow == count) break;

                else if(numOfZerosFromTheStartOfTheRow == count-2){   
                    tab[i][j-1] = tab[i][j-2];
                    tab[i][j-2] = 0;
                }
                else if(numOfZerosFromTheStartOfTheRow == count-3){   
                    tab[i][j-1] = tab[i][j-2];
                    tab[i][j-2] = tab[i][j-3];
                    tab[i][j-3] = 0;
                }
               
            }
            if(numOfZerosFromTheStartOfTheRow == 4 || numOfZerosFromTheStartOfTheRow == count) continue;

            count--;
        }
    }

    if(!compareTabs(prevTab, tab)) addNumToTab();
}


function countZerosFromTheEndOfTheRow(i){
    let numOfZeros = 0;
    for(let j=3; j>=0; j--){
            if(tab[i][j] == 0) numOfZeros++;
            else break;
    }
    return numOfZeros;
}

function countZerosFromTheStartOfTheRow(i){
    let numOfZeros = 0;
    for(let j=0; j<=3; j++){
        if(tab[i][j] == 0) numOfZeros++;
        else break;
    }
    return numOfZeros;
}

function countZerosFromTheEndOfTheCol(j){
    let numOfZeros = 0;
    for(let i=3; i>=0; i--){
            if(tab[i][j] == 0) numOfZeros++;
            else break;
    }
    return numOfZeros;
}

function countZerosFromTheStartOfTheCol(j){
    let numOfZeros = 0;
    for(let i=0; i<=3; i++){
        if(tab[i][j] == 0) numOfZeros++;
        else break;
    }
    return numOfZeros;
}


function start(){
    let tabDoc = document.createElement("table");
    for(let i=0; i<4; i++){
        let row = document.createElement("tr");

        for(let j=0; j<4; j++){
            let cell = document.createElement("td");
            cell.setAttribute("id", "cell" + i + j);

            row.appendChild(cell);
        }
        tabDoc.appendChild(row)
    }
    document.getElementById("tab").appendChild(tabDoc);
    addNumToTab();
}

function refreshTable(){
    for(let i=0; i<4; i++){
        for(let j=0; j<4; j++){
            cell = document.getElementById("cell" + i + j);
            if(tab[i][j] == 0) cell.innerHTML = "";
            else cell.innerHTML = tab[i][j];
            cell.style.backgroundColor = mapOfNumsAndColors.get(cell.innerHTML);           
        }
    }
}

function chooseNum(){//adds a new number to a random empty table cell
    if(Math.random() < 0.5) return 2;
    else return 4;
}

function addNumToTab(){
    let cellsWithZeros = [];
    for(let i=0; i<4; i++){
        for(let j=0; j<4; j++){
            if(tab[i][j] == 0) cellsWithZeros.push({i, j})
        }
    }
    
    try{
        let randCell = Math.floor(Math.random() * cellsWithZeros.length)
        tab[cellsWithZeros[randCell].i][cellsWithZeros[randCell].j] = chooseNum();
        refreshTable();
        
    }
    catch (error){
        alert("game over!");
    }
}

function compareTabs(prevTab, tab){ // returns true if tabs equal
    for(let i=0; i<4; i++){
        for(let j=0; j<4; j++){
            if(tab[i][j] !== prevTab[i][j]) return false;
        }
    }
    return true;
}

function back(){
    try{
        tab = prevTab.map(row => row.map(num => num));
    }catch (error){
        alert("nie zrobiłeś żadnego ruchu!");
    }
    refreshTable();
}

function reset(){
    for(let i=0; i<4; i++){
        for(let j=0; j<4; j++){
            tab[i][j] = 0;
        }
    }
    addNumToTab();
    refreshTable();
}

function updateScore(){
    let score = 0;
    for(let i=0; i<4; i++){
        for(let j=0; j<4; j++) score += tab[i][j];
    }
    document.getElementById("score").innerHTML = "score: " + score;
}
setInterval(updateScore, 600);