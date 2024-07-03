let state;
function makeTable() {
    state = [];
    let table = "<table id='memories' border='1'>";
    const n = 10;
    let k = 0;

    for (let i = 0; i < n; i++) {
        let tr = "<tr>";
        for (let j = 0; j < n; j++) {
            k++;
            tr += `<td id='${k}'>&nbsp;</td>`;
            state.push(0);
        }
        tr += "</tr>";
        table += tr;
    }
    table += "</table>";
    document.getElementById("table").innerHTML = table;

    document.querySelectorAll('#memories td').forEach(function (cell) {
        cell.addEventListener('click', logCellId);
    });
}

function logCellId(event) {
    var cellId = event.target.id;
    if (state[cellId - 1] === 0) {
        state[cellId - 1] = 1;
        document.getElementById(cellId).classList = 'on';
    } else {
        state[cellId - 1] = 0;
        document.getElementById(cellId).classList = 'off';
    }
}
makeTable();
let buttons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "arrow"];
        
function makeLocalStorageUI() {
    let table = "<table id='localStore' border='1'>";
    for (let i = 0; i < buttons.length; i++) {
        const thing = buttons[i];
        let tr = "<tr>";
        tr += `<td>${thing}</td>`;
        tr += `<td><button onclick='commit(this, "${thing}")'>C</button></td>`;
        tr += `<td><button onclick='load(this, "${thing}")'>L</button></td>`;
        tr += "</tr>";
        table += tr;
    }
    table += "</table>";
    document.getElementById("localStorage").innerHTML = table;
}

let activeButton; 

function getStateFromTable() {     
    document.getElementById("current").innerHTML = JSON.stringify( state, null, 2 )
    return state
}

function getStateFromLocalStorage(register) {     
    const array_as_string = localStorage.get(register)
    state = JSON.parse(array_as_string)
    console.log( register)
    for ( let i = 0; i < state.length; i++ ) { 
        console.log( i + "   " + state[i] )
    }
    document.getElementById("current").innerHTML = JSON.stringify( state, null, 2 )
    return state
}


function commit(btn, thing) {
    if (activeButton !== undefined) {
        activeButton.classList.remove("active");
    }
    activeButton = btn;
    activeButton.classList.add("active");
    console.log(`Committed: ${thing}`);
    getStateFromTable()
}

function load(btn, thing) {
    if (activeButton !== undefined) {
        activeButton.classList.remove("active");
    }
    activeButton = btn;
    activeButton.classList.add("active");
    console.log(`Loaded: ${thing}`);
    getStateFromTable()
}

makeLocalStorageUI();
