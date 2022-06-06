
/******         transicion de LUPA         ******/
window.addEventListener("scroll", function(){

    var lupa = document.querySelectorAll(".desplazamiento");


    /******         Bucle para generalizar         ******/
    for (var i = 0; i < lupa.length; i++){



        /******         Altura de pantalla         ******/
        var altura = window.innerHeight; 

        /******    Pantalla al 50% ----> 1314    ******/
        /******    Pantalla al 100% ----> 657    ******/



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
            lupa[i].classList.add("fondoCambiaColor"); 
        } else {
            lupa[i].classList.remove("fondoCambiaColor");
        }

    }

})

