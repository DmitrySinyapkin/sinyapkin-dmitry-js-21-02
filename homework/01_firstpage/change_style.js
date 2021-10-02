let body = document.body;
let header = document.querySelector('.header');
let sideBar = document.querySelector('.side-bar');
let main = document.querySelector('.main');
let typeBlocks = document.querySelectorAll('.type-container__block');
let blockTexts = document.querySelectorAll('.block-text');
let blockLinks = document.querySelectorAll('.block__link');
let fishBlocks = document.querySelectorAll('.fish-container__block');
let buyButtons = document.querySelectorAll('.block__buy');
let buyLinks = document.querySelectorAll('.buy__link');
let footer = document.querySelector('.footer');
let footerTexts = document.querySelectorAll('.footer__text');
let footerLink = document.querySelector('.footer__link');
let changer = document.querySelector('.theme-change');
let changerCheck = changer.firstElementChild;

changer.addEventListener('click', changeTheme);

function changeTheme() {
    if (changerCheck.checked) {
        body.classList.add('body_theme_dark');
        header.classList.add('header_theme_dark');
        sideBar.classList.add('side-bar_theme_dark');
        main.classList.add('main_theme_dark');

        for (let block of typeBlocks) {
            block.classList.add('type-container__block_theme_dark');
        }

        for (let text of blockTexts) {
            text.classList.add('block-text_theme_dark');
        }

        for (let link of blockLinks) {
            link.classList.add('block__link_theme_dark');
        }

        for (let block of fishBlocks) {
            block.classList.add('fish-container__block_theme_dark');
        }

        for (let button of buyButtons) {
            button.classList.add('block__buy_theme_dark');
        }

        for (let link of buyLinks) {
            link.classList.add('buy__link_theme_dark');
        }

        footer.classList.add('footer_theme_dark');
        footerLink.classList.add('footer__link_theme_dark');

        for (let text of footerTexts) {
            text.classList.add('footer__text_theme_dark');
        }
    } else {
        body.classList.remove('body_theme_dark');
        header.classList.remove('header_theme_dark');
        sideBar.classList.remove('side-bar_theme_dark');
        main.classList.remove('main_theme_dark');

        for (let block of typeBlocks) {
            block.classList.remove('type-container__block_theme_dark');
        }

        for (let text of blockTexts) {
            text.classList.remove('block-text_theme_dark');
        }

        for (let link of blockLinks) {
            link.classList.remove('block__link_theme_dark');
        }

        for (let block of fishBlocks) {
            block.classList.remove('fish-container__block_theme_dark');
        }

        for (let button of buyButtons) {
            button.classList.remove('block__buy_theme_dark');
        }

        for (let link of buyLinks) {
            link.classList.remove('buy__link_theme_dark');
        }

        footer.classList.remove('footer_theme_dark');
        footerLink.classList.remove('footer__link_theme_dark');

        for (let text of footerTexts) {
            text.classList.remove('footer__text_theme_dark');
        }
    }
}
