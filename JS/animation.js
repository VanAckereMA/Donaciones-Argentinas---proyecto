

/*****************************************************************************************************/
/*******************************            TRANSICION DE LUPA          ******************************/
/*****************************************************************************************************/

window.addEventListener("scroll", function(){

    var lupa = document.querySelectorAll(".desplazamiento");

    

    /******         Bucle para generalizar         ******/
    for (var i = 0; i < lupa.length; i++){

        /******         Altura de pantalla         ******/
        var altura = window.innerHeight; 

        /******    Pantalla al 50% ----> 1314    ******/
        /******    Pantalla al 100% ----> 657    ******/

        console.log(lupa.length)
        /******         Distancia de pantalla         ******/
        var distancia = lupa[i].getBoundingClientRect().top;


        /******         Mostrar por consola las medidas         ******/
        console.log(altura);
        console.log(distancia);
           

        /******         Desplazamiento Izquierdo         ******/
    
        lupa[i].classList.add("transform_izquierda");


        /******         Agragar/quitar efectos         ******/
        if (distancia >= -180) {
            /* -230 quiero*/
            lupa[i].classList.add("deslizar");
        } else {
            lupa[i].classList.remove("deslizar");

        }


    }

})




/*****************************************************************************************************/
/*************************************            POP UP   LOGIN  ************************************/
/*****************************************************************************************************/

var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
	overlay = document.getElementById('overlay'),
	popup = document.getElementById('popup'),
	btnCerrarPopup = document.getElementById('btn-cerrar-popup');

btnAbrirPopup.addEventListener('click', function(){
	overlay.classList.add('active');
	popup.classList.add('active');
});

btnCerrarPopup.addEventListener('click', function(e){
	e.preventDefault();
	overlay.classList.remove('active');
	popup.classList.remove('active');
});

/*****************************************************************************************************/
/*************************************     POP UP   REGISTRO      ************************************/
/*****************************************************************************************************/
var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
	overlay = document.getElementById('overlay'),
	popup = document.getElementById('popup'),
	btnCerrarPopup = document.getElementById('btn-cerrar-popup');

btnAbrirPopup.addEventListener('click', function(){
	overlay.classList.add('active');
	popup.classList.add('active');
});

btnCerrarPopup.addEventListener('click', function(e){
	e.preventDefault();
	overlay.classList.remove('active');
	popup.classList.remove('active');
});

/*****************************************************************************************************/
/*********************************            PROXIMO CODIGO          ********************************/
/*****************************************************************************************************/