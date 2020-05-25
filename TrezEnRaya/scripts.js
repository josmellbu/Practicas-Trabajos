var mapa = [0, 0, 0, 0, 0, 0, 0, 0, 0,];
var jugador = 1;
function dibujar(){
	for(i=0; i<9; i++){
	if(mapa[i] == 0) document.getElementById("c"+i).style="";
	if(mapa[i] == 1) document.getElementById("c"+i).style="background:url(img/cir.png) 0 0 no-repeat;background-size: cover;background-attachment: contain;";
	if(mapa[i] == 2) document.getElementById("c"+i).style="background:url(img/x-me.png) 0 0 no-repeat;background-size: cover;background-attachment: contain;"; 
	}
}
function pcelda(celda){
if (mapa[celda]==0) {
	if (jugador==1){
	mapa[celda]=1;
	jugador=2;
	} else {
	mapa[celda]=2;
	jugador=1; 
	}
} else {
window.alert("No puedes pulsar sobre una celda marcada");
}
dibujar();
var r = ganador();
switch(r){
  	case 0:
   		break;
  	case 1:
   		window.alert("¡Ganó el 1° jugador!");
   		break;
  	case 2:
   		window.alert("¡Ganó el 2° jugador!");
   		break;
  	case 3:
   		window.alert("¡Empate!");
   		break; 
}
}
function ganador(){
var numEspacios=0;
for(i=0; i<9; i++){
if(mapa[i] == 0) numEspacios++;
}
// Las líneas horizontales
if(mapa[0] == mapa[1] && mapa[1] == mapa[2] && mapa[0] !=0) return mapa[0];
if(mapa[3] == mapa[4] && mapa[4] == mapa[5] && mapa[3] !=0) return mapa[3];
if(mapa[6] == mapa[7] && mapa[7] == mapa[8] && mapa[6] !=0) return mapa[6];
//Las líneas verticales
if(mapa[0] == mapa[3] && mapa[3] == mapa[6] && mapa[0] !=0) return mapa[0];
if(mapa[1] == mapa[4] && mapa[4] == mapa[7] && mapa[1] !=0) return mapa[1];
if(mapa[2] == mapa[5] && mapa[5] == mapa[8] && mapa[2] !=0) return mapa[2];
//Las diagonales
if(mapa[0] == mapa[4] && mapa[4] == mapa[8] && mapa[0] !=0) return mapa[0];
if(mapa[2] == mapa[4] && mapa[4] == mapa[6] && mapa[2] !=0) return mapa[2];

if (numEspacios > 0){
return 0;
} else {
return 3;
}
}
window.onload = init;
function init(){
    document.querySelector(".start").addEventListener("click",cronometrar);
    document.querySelector(".stop").addEventListener("click",parar);
    document.querySelector(".reiniciar").addEventListener("click",reiniciar);
    h = 0;
    m = 0;
    s = 0;
    document.getElementById("hms").innerHTML="00:00:00";
}         
function cronometrar(){
    escribir();
    id = setInterval(escribir,1000);
    document.querySelector(".start").removeEventListener("click",cronometrar);
}
function escribir(){
    var hAux, mAux, sAux;
    s++;
    if (s>59){m++;s=0;}
    if (m>59){h++;m=0;}
    if (h>24){h=0;}

    if (s<10){sAux="0"+s;}else{sAux=s;}
    if (m<10){mAux="0"+m;}else{mAux=m;}
    if (h<10){hAux="0"+h;}else{hAux=h;}

    document.getElementById("hms").innerHTML = hAux + ":" + mAux + ":" + sAux; 
}
function parar(){
    clearInterval(id);
    document.querySelector(".start").addEventListener("click",cronometrar);

}
function reiniciar(){
    clearInterval(id);
    document.getElementById("hms").innerHTML="00:00:00";
    h=0;m=0;s=0;
    document.querySelector(".start").addEventListener("click",cronometrar);
}