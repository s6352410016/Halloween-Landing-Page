const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click',() => {
    document.querySelector('.container').classList.toggle('active1');
    hamburger.classList.toggle('active2');
    document.querySelector('.navRight').classList.toggle('active3');
});