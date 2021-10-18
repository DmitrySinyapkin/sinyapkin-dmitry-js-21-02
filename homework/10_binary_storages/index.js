const input = document.querySelector('.file-input');
const uploadButton = document.querySelector('.upload-button');
const gallery = document.querySelector('.gallery');

uploadButton.addEventListener('click', uploadToImgBB);

function uploadToImgBB(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        const formData = new FormData();
        formData.set('key', '3f5e5f5b3b0ff6c97175f677df6726d2');
        formData.set('image', reader.result.replace(/^.*,/, ''))
    }
}

const createFetch = (url, data) => (callback, errorCallback) => {
    fetch(url, {
        method: 'POST',
        body: data
    })
        .then(response => response.json())
        .then(callback)
        .catch(errorCallback)
}
