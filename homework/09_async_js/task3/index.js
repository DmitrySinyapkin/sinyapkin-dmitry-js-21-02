const tbody = document.querySelector('tbody');
const urls = {
    previous: null,
    current: 'https://swapi.dev/api/people/',
    next: null
}

const createFetch = (url) => (callback, errorCallback) => {
    fetch(url)
        .then(response => response.json())
        .then(callback)
        .catch(err => errorCallback(`Ошибка получения данных: ${err}`))
}

const swapi = {
    getPeople: createFetch(urls.current),
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
}

swapi.getPeople(printPeople, console.error);

