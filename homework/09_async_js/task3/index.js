const tbody = document.querySelector('tbody');
const [previousButton, nextButton] = document.querySelectorAll('button');
const urls = {
    previous: null,
    current: 'https://swapi.dev/api/people/',
    next: null
}

previousButton.disabled = true;
previousButton.addEventListener('click', handlePreviousButton);
nextButton.addEventListener('click', handleNextButton);

function createFetch(url) {
    return (callback, errorCallback) => {
        fetch(url)
            .then(response => response.json())
            .then(callback)
            .catch(err => errorCallback(`Ошибка получения данных: ${err}`))
    }
}

const swapi = {
    getPeople: createFetch
}

function printPeople(obj) {
    obj.results.forEach(result => {
        const row = document.createElement('tr');

        const name = document.createElement('td');
        name.innerHTML = result.name;
        row.append(name);

        const height = document.createElement('td');
        height.innerHTML = result.height;
        row.append(height);

        const mass = document.createElement('td');
        mass.innerHTML = result.mass;
        row.append(mass);

        const gender = document.createElement('td');
        gender.innerHTML = result.gender;
        row.append(gender);

        tbody.append(row);
    })

    urls.previous = obj.previous;
    urls.next = obj.next;
    previousButton.disabled = (urls.previous) ? false : true;
    nextButton.disabled = (urls.next) ? false : true;
}

function handleNextButton() {
    tbody.innerHTML = '';
    urls.current = urls.next;
    swapi.getPeople(urls.current)(printPeople, console.error); 
}

function handlePreviousButton() {
    tbody.innerHTML = '';
    urls.current = urls.previous;
    swapi.getPeople(urls.current)(printPeople, console.error);
}

swapi.getPeople(urls.current)(printPeople, console.error);

