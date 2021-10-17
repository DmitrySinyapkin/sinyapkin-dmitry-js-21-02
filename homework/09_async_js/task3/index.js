const tbody = document.querySelector('tbody');

const swapi = {
    getPeople(callback, errorCallback) {
        fetch('https://swapi.dev/api/people/')
            .then(response => {
                return response.json();
            })
            .then(callback)
            .catch(err => errorCallback(`Ошибка получения данных: ${err}`))
    }
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