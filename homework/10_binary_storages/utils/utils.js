export function createFetch(url, data) {
    fetch(url, {
        method: 'POST',
        body: data
    })
        .then(response => response.json())
        .then(response => {
            saveToLocalStorage(response.data.display_url);
            addImgToGallery(response.data.display_url);
        })
        .catch(console.error)
}

function saveToLocalStorage(data) {
    imgArr.push(data);
    localStorage.setItem('imgArr', JSON.stringify(imgArr));
}

function addImgToGallery(url) {
    const img = document.createElement('img');
    img.src = url;
    document.querySelector('.gallery').append(img);
}

const imgArr = localStorage.getItem('imgArr') ? JSON.parse(localStorage.getItem('imgArr')) :[];
imgArr.forEach(imgUrl => addImgToGallery(imgUrl));
