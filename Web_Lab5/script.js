const BASE_URL = "http://localhost:5074/api";
const RESOURSE_URL = `${BASE_URL}/drivers`;

let drivers = [];



async function addDriver() {

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('secondName').value;
    const healthStatus = document.getElementById('healthStatus').value;
    const id = -1;


    const driver = {
        firstName: firstName,
        lastName: lastName,
        healthStatus: healthStatus,
        id: id
    };

    await addDriverToServer(driver);
    await refetchAllDrivers();
    clearForm();
}
async function addDriverToServer(driver) {
    const response = await fetch(`${RESOURSE_URL}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(driver),
    });

    return response.json();
}



async function editDriver(driver) {
    const newFirstName = prompt('Введіть нове Ім\'я:', driver.firstName);
    const newLastName = prompt('Введіть нове прізвище:', driver.lastName);
    const newHealthStatus = prompt('Введіть новий стан здоров\'я:', driver.healthStatus);

    if (!(newFirstName && newLastName && newHealthStatus)) {
        return;
    }

    driver.firstName = newFirstName;
    driver.lastName = newLastName;
    driver.healthStatus = newHealthStatus;

    await updateDriverOnServer(driver);
    await refetchAllDrivers();
}
async function updateDriverOnServer(driver) {
    const response = await fetch(`${RESOURSE_URL}/${driver.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(driver),
    });

    return response.json();
}



async function deleteDriver(index) {
    const driver = drivers[index];
    await deleteDriverFromServer(index);
    await refetchAllDrivers();
}

async function deleteDriverFromServer(id) {
    const response = await fetch(`${RESOURSE_URL}/${id}`, {
        method: 'DELETE',
    });
}




const refetchAllDrivers = async () => {
    const allDrivers = await getAllDrivers();
    console.log(allDrivers);
    drivers = allDrivers;
    refreshDriversList(drivers);
};

async function getAllDrivers() {
    const response = await fetch(`${RESOURSE_URL}`);
    return response.json();
}

function refreshDriversList(driversToRefresh) {
    const list = document.getElementById('drivers-list');
    list.innerHTML = '';

    driversToRefresh.forEach(driver => {
        displayDriver(driver);
    });
}

function displayDriver(driver) {
    const list = document.getElementById('drivers-list');
    const listItem = document.createElement('li');
    listItem.classList.add('driver-form');

    const editButton = document.createElement('span');
    editButton.innerHTML = 'натисність щоб змінити';
    editButton.classList.add('edit-btn');
    editButton.onclick = function () {
        editDriver(driver);
    };

    const deleteButton = document.createElement('span');
    deleteButton.innerHTML = 'натисність щоб видалити';
    deleteButton.classList.add('edit-btn', 'delete-btn');
    deleteButton.onclick = function () {
        deleteDriver(driver.id);
    };

    listItem.innerHTML = `${driver.firstName}  ${driver.lastName}, статус самопочуття - ${driver.healthStatus}, айді - ${driver.id};`;
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    list.appendChild(listItem);
}



function clearForm() {
    document.getElementById('firstName').value = '';
    document.getElementById('secondName').value = '';
    document.getElementById('healthStatus').value = '';
}