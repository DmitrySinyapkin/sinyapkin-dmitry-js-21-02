const input = document.getElementById('input');
const button = document.getElementById('send');
const BASE_URL = 'http://127.0.0.1:3000';


const sendGetRequest = (url) => {
    return fetch(url, {
      method: 'GET'
    })
}

const sendRequestWithBody = (url, text) => {
    return fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'text/plain',
      },
      body: text,
    })
}

const saveTextToFile = () => {
    sendRequestWithBody(BASE_URL, input.value);
}

const getTextFromFile = () => {
    sendGetRequest(BASE_URL)
        .then(response => input.value = response)
        .catch(error => console.log(error));
}


button.addEventListener('click', saveTextToFile);

getTextFromFile();
