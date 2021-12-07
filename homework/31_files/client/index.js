const input = document.getElementById('input');
const button = document.getElementById('send');
const BASE_URL = 'http://127.0.0.1:3000';


const sendGetRequest = (url) => {
    return fetch(url, {
      method: 'GET'
    })
}

const sendRequestWithBody = (url, data) => {
    return fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: data,
    })
}

const saveTextToFile = () => {
  const data = JSON.stringify({text: input.value})
  sendRequestWithBody(BASE_URL, data);
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
