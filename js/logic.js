/**
* Piedra, Papel o Tijeras
* -----------------------
*
* Rubidio
* http://www.rubidio.com
*
* Copyright (c) 2013 H.Quethzel Díaz Zárate
*
* Free to use under the MIT license.
* http://www.opensource.org/licenses/mit-license.php
*/
var tiempo;
var usrB;
var imagen;
var cont = 0;

function inicio(usrA) {
    cont++;
    if( cont == 1) {
     	tiempo        = setInterval(cambiarImg, 50);
     	var detener   = setTimeout(detenerImg, 2300);
     	var quienGana = setTimeout('selectUsrB("'+usrA+'")', 3000);
     }
 }

function cambiarImg(num) {
	var images    = [2];
		images[0] = "img/piedra.png";
		images[1] = "img/papel.png";
		images[2] = "img/tijeras.png";
        images[3] = "img/random.png";

	var i 	   = Math.floor((Math.random()*3)+0);		
		imagen = document.getElementById('imgIA').src = images[i];
}

function detenerImg() {
	clearTimeout(tiempo);
}

function selectUsrB(usrA) {
	if(imagen.indexOf('piedra')!=-1) {
		usrB = "piedra";
	} else if(imagen.indexOf('papel')!=-1) {
		usrB = "papel";
	} else if (imagen.indexOf('tijeras')!=-1) {
		usrB = "tijeras";
	}
	var ganador = comparar(usrA,usrB);
	modal(ganador);
}

function comparar(usrA,usrB) {
	if(usrA === usrB) {
        return("img/empate.png");
    }
    if(usrA === "piedra") {
        if(usrB === "tijeras") {
            return("img/winner.png");
        }else {
            return("img/loser.png");
        }
    }
    if(usrA === "papel") {
        if(usrB === "piedra") {
            return("img/winner.png");
        }else {
            return("img/loser.png");
        }
    }
    if(usrA === "tijeras") {
        if(usrB === "papel") {
            return("img/winner.png");
        }else {
            return("img/loser.png");
        }
    }
}
 function txtWin(ruta){
    var nomJugador = document.getElementById("nom").value.toUpperCase();
    var fondo      = document.getElementById("Qmodal");
 	var contenedor = document.getElementById("msj");
    var contenido;
    var p          = document.createElement("p");

 	if(contenedor.childNodes.length > 0) {
 		contenedor.removeChild(contenedor.childNodes[0]);
 		     fondo.style.backgroundImage = "none";
 	}
 	if(ruta === "img/empate.png") {
 		contenido = document.createTextNode("ESTO ES UN EMPATE");
 	}
 	if(ruta === "img/winner.png") {
 		contenido = document.createTextNode("FELICIDADES " + nomJugador + " HAS VENCIDO AL BOT");
 		fondo.style.backgroundImage = "url(img/fredy.png)";
 	}
 	if(ruta === "img/loser.png") {
 		contenido = document.createTextNode("EL BOT TE HA VENCIDO");
 	}
 	p.appendChild(contenido);
 	contenedor.appendChild(p);
}		
function modal(ruta) {
	var ventana = document.getElementById('Qmodal');
	var fondo   = document.getElementById('bloquear');
    
    ventana.style.display = 'block';
      fondo.style.display = 'block';
    
    clearTimeout();
    document.getElementById('win').src = ruta;
    txtWin(ruta);
    cont = 0;
    
}
function ocultarVentana() {
    var ventana = document.getElementById('Qmodal');
    var fondo   = document.getElementById('bloquear');
    
    ventana.style.display = 'none';
      fondo.style.display = 'none';
    document.getElementById('imgIA').src = "img/random.png";
}
