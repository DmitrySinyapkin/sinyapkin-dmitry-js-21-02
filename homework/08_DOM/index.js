const table = document.querySelector('table');
const tBody = table.lastElementChild;
const defaltStyleButton = document.querySelectorAll('.style-button')[0];
const firstStyleButton = document.querySelectorAll('.style-button')[1];
const secondStyleButton = document.querySelectorAll('.style-button')[2];
const nameInput = document.querySelector('.name-input');
const numberInput = document.querySelector('.number-input');
const addButton = document.querySelector('.add-button');

defaltStyleButton.addEventListener('click', handleStyle);
firstStyleButton.addEventListener('click', handleStyle);
secondStyleButton.addEventListener('click', handleStyle);

nameInput.addEventListener('keyup', validateInput);
numberInput.addEventListener('keyup', validateInput);

addButton.addEventListener('click', addRow);

function handleStyle(event) {
    if (event.target == defaltStyleButton) {
        table.classList.remove('style1');
        table.classList.remove('style2');
    } else if (event.target == firstStyleButton) {
        table.classList.add('style1');
        table.classList.remove('style2');
    } else {
        table.classList.add('style2');
        table.classList.remove('style1');
    }
}

function validateInput(event) {
    let pattern;
    if (event.target == nameInput) {
        pattern = /[^а-яА-я]/g;
    } else {
        pattern = /[^\d-]/g;
    }
    this.value = this.value.replace(pattern, '');
}

function addRow() {
    if (nameInput.value && numberInput.value) {
        const newRow = document.createElement('tr');
        newRow.addEventListener('mouseover', showButton);
        newRow.addEventListener('mouseout', hideButton);

        const newName = document.createElement('td');
        newName.innerHTML = nameInput.value;
        newRow.append(newName);

        const newNumber = document.createElement('td');
        newNumber.innerHTML = numberInput.value;
        newRow.append(newNumber);

        const newDelButton = document.createElement('button');
        newDelButton.innerHTML = 'Удалить';
        newDelButton.classList.add('button');
        newDelButton.classList.add('delete-button');
        newDelButton.addEventListener('click', deleteRow);
        newRow.append(newDelButton);

        tBody.append(newRow);
        nameInput.value = '';
        numberInput.value = '';
    } else {
        alert('Заполнены не все поля');
    }
}

function showButton() {
    this.lastElementChild.classList.add('delete-button_visible');
}

function hideButton() {
    setTimeout( () => this.lastElementChild.classList.remove('delete-button_visible'), 1000);
}

function deleteRow() {
    this.parentElement.remove();
}
