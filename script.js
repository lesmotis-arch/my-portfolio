const blocks = document.querySelectorAll('.block');

function showBlocks() {
    blocks.forEach(block => {
        const top = block.getBoundingClientRect().top;

        if (top< window.innerHeight - 50) {
            block.classList.add('show');
        }
    });
}
window.addEventListener('scroll', showBlocks);
window.addEventListener('load', showBlocks);