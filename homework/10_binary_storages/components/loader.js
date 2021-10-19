export function showLoader() {
    const dots = document.querySelectorAll('.loader-dot');
    let timeout = 0;

    dots.forEach(dot => {
        setTimeout(() => dot.style.visibility = 'visible', timeout);
        timeout += 300;
    });

    setTimeout(() => dots.forEach(dot => dot.style.visibility = 'hidden'), 300 * (dots.length + 1));
}
