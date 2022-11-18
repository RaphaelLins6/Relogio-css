const ponteiroSegs = document.querySelector('.segs-ponteiro');
const ponteiroMin = document.querySelector('.min-ponteiro');
const ponteiroHora = document.querySelector('.hora-ponteiro');

function setDate() {
    const agora = new Date();
    
    const segundos = agora.getSeconds();
    const segundosGrau = ((segundos / 60) * 360) + 90;
    ponteiroSegs.style.transform =`rotate(${segundosGrau}deg)`;

    const minutos = agora.getMinutes();
    const minGrau = ((minutos / 60) * 360) + 90;
    ponteiroMin.style.transform =`rotate(${minGrau}deg)`;

    const horas = agora.getHours();
    const horaGrau = ((horas / 12) * 360) + 90;
    ponteiroHora.style.transform =`rotate(${horaGrau}deg)`;

}

setInterval(setDate, 1000);