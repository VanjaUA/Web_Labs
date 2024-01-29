const helicopters = [];

const submitButton = document.getElementById("submit_button");
const findButton = document.getElementById("find_button");
const cancelFindButton = document.getElementById("cancel_find_button");
const findInput = document.getElementById("find_input");

function addHelicopter() {
    const name = document.getElementById('name').value;
    const passengers = parseInt(document.getElementById('passengers').value);
    const speed = parseInt(document.getElementById('speed').value);

    if (!checkInput(name, passengers, speed)) {
        return;
    }

    const helicopter = {
        name: name,
        passengers: passengers,
        speed: speed
    };

    helicopters.push(helicopter);
    displayHelicopter(helicopter);
    clearForm();
}

function displayHelicopter(helicopter) {
    const list = document.getElementById('helicopter-list');
    const listItem = document.createElement('li');
    listItem.classList.add('helicopter-card');

    const editButton = document.createElement('span');
    editButton.innerHTML = 'натисність щоб змінити';
    editButton.classList.add('edit-btn');
    editButton.onclick = function () {
        editHelicopter(helicopter);
    };

    listItem.innerHTML = `<p>${helicopter.name}</p> - ${helicopter.passengers} пасажирів, ${helicopter.speed} км/год`;
    listItem.appendChild(editButton);

    list.appendChild(listItem);
}

function editHelicopter(helicopter) {
    const newName = prompt('Введіть нову назву гелікоптера:', helicopter.name);
    const newPassengers = parseInt(prompt('Введіть нову кількість пасажирів:', helicopter.passengers));
    const newSpeed = parseInt(prompt('Введіть нову максимальну швидкість:', helicopter.speed));

    if (!checkInput(newName, newPassengers, newSpeed)) {
        return;
    }

    helicopter.name = newName;
    helicopter.passengers = newPassengers;
    helicopter.speed = newSpeed;

    refreshHelicopterList(helicopters);
}

function refreshHelicopterList(helicoptersToRefresh) {
    const list = document.getElementById('helicopter-list');
    list.innerHTML = '';

    helicoptersToRefresh.forEach(helicopter => {
        displayHelicopter(helicopter);
    });
}

function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('passengers').value = '';
    document.getElementById('speed').value = '';
}

function calculateTotalPassengers() {
    let totalPassengers = 0;
    helicopters.forEach(helicopter => {
        totalPassengers = totalPassengers + helicopter.passengers;
    });
    document.getElementById('total-passengers').innerText = `Загальна кількість пасажирів: ${totalPassengers}`;
}

function sortHelicoptersByPassengers() {
    helicopters.sort((a, b) => b.passengers - a.passengers);
    refreshHelicopterList(helicopters);
}

function searchHelicopters() {
    const searchText = document.getElementById('searchText').value.toLowerCase();

    if (!searchText) {
        alert('Будь ласка, введіть текст для пошуку.');
        return;
    }

    const foundHelicopters = helicopters.filter(
        (helicopter) => helicopter.name.toLowerCase().includes(searchText)
    );

    refreshHelicopterList(foundHelicopters);
}


function resetSearch() {
    document.getElementById('searchText').value = '';
    refreshHelicopterList(helicopters);
}

function checkInput(name, passengers, speed) {
    return name && !isNaN(passengers) && passengers >= 0 && !isNaN(speed) && speed >= 0;
}
