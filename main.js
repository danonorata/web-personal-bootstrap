/*const parrafoRojo = function () {
    // const prueba = document.getElementsByClassName('prueba');
    const prueba = document.getElementById("prueba");
    const altura = prueba.offsetTop;
    const hazRecorrido = window.pageYOffset;

    if (hazRecorrido + 500 > altura) {
        prueba.classList.add('showRetarded');
    }
};

document.addEventListener('scroll', parrafoRojo);*/


const parrafoRojo = function () {
    const prueba = document.getElementsByClassName('prueba');
    //const prueba = document.getElementById("prueba");
    //const altura = prueba.offsetTop;
    const altura0 = prueba[0].offsetTop;
    const altura1 = prueba[1].offsetTop;
    const altura2 = prueba[2].offsetTop;
    const hazRecorrido = window.pageYOffset;

    console.log(hazRecorrido);
    console.log(altura0);
    console.log(altura1);
    console.log(altura2);
};

document.addEventListener('scroll', parrafoRojo);




/*Indica la distancia (px) que hay entre un elemento y el 'top' del documento
console.log(altura);
Indica la distancia (px) que se ha 'scrolleado' desde 'top' del documento
console.log(hazRecorrido);*/