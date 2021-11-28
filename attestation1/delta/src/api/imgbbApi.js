import { UPLOAD_API_KEY, UPLOAD_URL } from "../../constants/imgbbApi";

const createFetch = (url, data) => {
    fetch(url, {
        method: 'POST',
        body: data
    })
        .then(response => response.json())
}

export const uploadImg = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        const formData = new FormData();
        formData.set('key', UPLOAD_API_KEY);
        formData.set('image', reader.result.replace(/^.*,/, ''));
        createFetch(UPLOAD_URL, formData);
    }
}

