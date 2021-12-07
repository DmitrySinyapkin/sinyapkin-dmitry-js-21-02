const input = document.getElementById('input');
const button = document.getElementById('send');
const BASE_URL = 'http://127.0.0.1:3000';


const sendGetRequest = (url) => {
    return fetch(url, {
      method: 'GET'
    })
}

const sendRequestWithBody = (url, text) => {
    const data = JSON.stringify({text: text})
    return fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: data,
    })
}

const saveTextToFile = () => {
    sendRequestWithBody(BASE_URL, input.value);
}

const getTextFromFile = () => {
    sendGetRequest(BASE_URL)
        .then(response => response.text())
        .then(response => {
          input.value = response;
          input.disabled = false;
          button.disabled = false;
        })
        .catch(error => alert(error));
}


button.addEventListener('click', saveTextToFile);

getTextFromFile();
