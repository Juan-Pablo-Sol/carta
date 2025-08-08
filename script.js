function openLetter() {
    document.querySelector('.flap').style.transform = 'rotateX(180deg)';
    setTimeout(() => {
        document.getElementById('letter').style.display = 'block';
    }, 600);
}
