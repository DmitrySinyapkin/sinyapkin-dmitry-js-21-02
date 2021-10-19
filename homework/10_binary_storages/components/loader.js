export function showLoader() {
    let timeout = 0;
    const dots = document.querySelectorAll('.loader-dot');

    dots[0].style.visibility = 'visible';
    setTimeout(() => dots[1].style.visibility = 'visible', 300);
    setTimeout(() => dots[2].style.visibility = 'visible', 600);
    setTimeout(() => dots[3].style.visibility = 'visible', 900);
    setTimeout(() => dots[4].style.visibility = 'visible', 1200);

    setTimeout(() => dots.forEach(dot => dot.style.visibility = 'hidden'), 300 * (dots.length + 1));
}