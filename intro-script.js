document.addEventListener('DOMContentLoaded', () => {
    const enterButton = document.querySelector('.enter-button');
    enterButton.addEventListener('click', (e) => {
        e.preventDefault();
        document.body.style.opacity = 0;
        setTimeout(() => {
            window.location.href = e.target.href;
        }, 500);
    });
});
