import { imgbbapi } from "./api/imgbbapi.js";

const input = document.querySelector('.file-input');
const uploadButton = document.querySelector('.upload-button');

uploadButton.addEventListener('click', () => imgbbapi.upload(input.files[0]));
