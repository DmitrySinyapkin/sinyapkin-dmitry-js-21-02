import { uploadToImgBB } from "./api/imgbbapi.js";

const input = document.querySelector('.file-input');
const uploadButton = document.querySelector('.upload-button');

uploadButton.addEventListener('click', () => uploadToImgBB(input.files[0]));
