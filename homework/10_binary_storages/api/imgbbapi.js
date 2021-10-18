import { MAIN_URL, API_KEY } from "../constants/imgbbapi.js"; 
import { createFetch } from "../utils/utils.js"

export function uploadToImgBB(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        const formData = new FormData();
        formData.set('key', API_KEY);
        formData.set('image', reader.result.replace(/^.*,/, ''));
        createFetch(MAIN_URL, formData);
    }
}
