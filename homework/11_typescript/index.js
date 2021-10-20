var tbody = document.querySelector('tbody');
var _a = document.querySelectorAll('button'), previousButton = _a[0], nextButton = _a[1];
var urls = {
    previous: null,
    current: 'https://swapi.dev/api/people/',
    next: null
};
previousButton.disabled = true;
previousButton.addEventListener('click', handlePreviousButton);
nextButton.addEventListener('click', handleNextButton);
function createFetch(url) {
    fetch(url)
        .then(function (response) { return response.json(); })
        .then(printPeople)["catch"](console.error);
}
var swapi = {
    getPeople: createFetch
};
function printPeople(obj) {
    obj.results.forEach(function (result) {
        var row = document.createElement('tr');
        var name = document.createElement('td');
        name.innerHTML = result.name;
        row.append(name);
        var height = document.createElement('td');
        height.innerHTML = result.height;
        row.append(height);
        var mass = document.createElement('td');
        mass.innerHTML = result.mass;
        row.append(mass);
        var gender = document.createElement('td');
        gender.innerHTML = result.gender;
        row.append(gender);
        tbody.append(row);
    });
    urls.previous = obj.previous;
    urls.next = obj.next;
    previousButton.disabled = (urls.previous) ? false : true;
    nextButton.disabled = (urls.next) ? false : true;
}
function handleNextButton() {
    tbody.innerHTML = '';
    urls.current = urls.next;
    swapi.getPeople(urls.current);
}
function handlePreviousButton() {
    tbody.innerHTML = '';
    urls.current = urls.previous;
    swapi.getPeople(urls.current);
}
swapi.getPeople(urls.current);
