console.log('hi');



const printToDom = (divId, toPrint) => {
    document.getElementById(divId).innerHTML = toPrint;
}

const printToDomSpecial = (divId, toPrint) => {
    document.getElementById(divId).innerHTML += toPrint;
}



const createEntryForm = (event) => {
    let domString = '';
    domString += `
    <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4">Enter First Year's Name:</h1>

      <form class="form-inline">
        <div class="form-group mb-2">
          <label for="staticEmail2" class="sr-only">Email</label>
          <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="Student:"></input>
        </div>
        <div class="form-group mx-sm-3 mb-2">
          <label for="inputPassword2" class="sr-only">Password</label>
          <input type="name" class="form-control" id="inputName" placeholder="Name">
        </div>
        <button id="sort" type="button" class="btn btn-primary mb-2">Sort!</button>
      </form>

      <p class="lead"></p>
    </div>
  </div>
    `
    printToDom('entryform', domString)
    const nameEntry = document.getElementById('inputName');
    
    nameEntry.focus();
    nameEntry.addEventListener('click', (event) => {
        nameEntry.value = ' ';
    })
    
    
    nameEntry.addEventListener('click', (event) => {
        event.stopPropagation();
    })
}

const start = document.getElementById('start');
start.addEventListener('click', createEntryForm) 

document.getElementById("entryform")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("entryform").click();
    }
});




const houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];


const createHouseCards = (houseArr) => {
    let domString = '';
    let chooseHouse = houseArr[Math.floor(Math.random()* houseArr.length)];
    let name = document.getElementById('inputName').value;
    
    console.log(name);
    domString += `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title" id="name">${name}</h5>
                <p class="card-text">${chooseHouse}</p>
                <a href="#" class="btn btn-primary">Expel</a>
            </div>
        </div>
        `
    
    printToDomSpecial('houseCards', domString)
}



/*document.getElementById('start').addEventListener('click', (event) => {
    event.preventDefault()
})*/

document.getElementById('entryform').addEventListener('click', (event) => {
   createHouseCards(houses)
   
})