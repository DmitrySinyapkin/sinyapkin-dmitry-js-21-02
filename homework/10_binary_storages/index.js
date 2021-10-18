import { uploadToImgBB } from "./api/imgbbapi.js";
import { addImgToGallery } from "./utils/utils.js";

const input = document.querySelector('.file-input');
const uploadButton = document.querySelector('.upload-button');

uploadButton.addEventListener('click', () => uploadToImgBB(input.files[0]));

const imgArr = localStorage.getItem('imgArr') ? JSON.parse(localStorage.getItem('imgArr')) :[];
imgArr.forEach(imgUrl => addImgToGallery(imgUrl));
