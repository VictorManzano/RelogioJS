const horasContainer = document.querySelector('#horas');
const minutosContainer = document.querySelector('#minutos');
const segundosContainer = document.querySelector('#segundos');


function relogio() {
    const data = new Date();
    const hr = data.getHours();
    const min = data.getMinutes();
    const sec = data.getSeconds();

    horasContainer.innerHTML = hr;
    minutosContainer.innerHTML = min;
    segundosContainer.innerHTML = sec;

}

setInterval(relogio, 500)

//botão tema

const body = document.querySelector('body');
const paiRelogio = document.querySelector('.containerPrincipal')
const containerRelogio = document.querySelectorAll('.RelogioContainer')
const doisPontos1 = document.querySelector('#doisPontos1')
const doisPontos2 = document.querySelector('#doisPontos2')



body.addEventListener('click', mudarTema);

function mudarTema() {
    body.classList.toggle('temaBody')
    paiRelogio.classList.toggle('temaPaiContainer')
    horasContainer.classList.toggle('temaRelogioContainer')
    minutosContainer.classList.toggle('temaRelogioContainer')
    segundosContainer.classList.toggle('temaRelogioContainer')
    doisPontos1.classList.toggle('doisPontosTema')
    doisPontos2.classList.toggle('doisPontosTema')
}