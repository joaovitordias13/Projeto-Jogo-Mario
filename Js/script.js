let mario = document.querySelector('.mario');
let pipe = document.querySelector('.pipe');
let cloud = document.querySelector('.clouds')


function jump() {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    },500);
}

const loop = setInterval(() => {

    const piperPosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')  //Pega qualquer propriedade de stylo no botton
    const cloudsPosition = cloud.offsetLeft;

    if(piperPosition <= 120 && piperPosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${piperPosition}px`;

        cloud.style.animation = 'none';
        cloud.style.left = `${cloudsPosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = "./Images/gameover.webp";
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);
    }
   
},10);
document.addEventListener("keydown", jump );

