let time = 2000;
currentImageIndex = 0;
//carregando as imagens como array
images = document.querySelectorAll('#banner img')
console.log(images);
//meu max de img
max = images.length;
console.log(max);

function nextImage(){
    images[currentImageIndex].classList.remove('selected')
    currentImageIndex++;

    if(currentImageIndex >= max)
       currentImageIndex = 0;

    images[currentImageIndex].classList.add('selected')
}

function start(){
    setInterval( ()=> {
        nextImage();
    }, time);
}

window.addEventListener('load', start) 