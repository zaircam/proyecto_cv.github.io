
var btn = document.getElementById('btn'),
gracias = document.getElementById('gracias'),
cont=0;

function agradecer(){

    if (cont==0){
        gracias.classList.add('verde');
        cont=1;

    }
    else{
        gracias.classList.remove('verde');
        cont=0;
    }
}

btn.addEventListener('click',agradecer,true)