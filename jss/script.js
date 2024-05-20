function porta() {
    const es = document.querySelector(".js");
    const es0 = document.querySelector(".fondo4");
    const es1 = document.querySelector(".tabla");
    const es2 = document.querySelector(".tabla2");
    const es3 = document.querySelector(".tabla3");
    const es4 = document.querySelector(".ifra");
    var opc = parseInt(document.getElementById('opciones').value);

    if (opc == 1) {
        es.classList.add("mov");
        es0.classList.add("color");
        es1.classList.add("mostrar");
        es4.classList.add("aparecer");
        es3.classList.remove("mostrar3");
        es2.classList.remove("mostrar2");
        es0.classList.remove("color2");
        es0.classList.remove("color3");
    }

    if(opc==2){
        es.classList.add("mov");
        es0.classList.add("color2");
        es2.classList.add("mostrar2");
        es4.classList.add("aparecer");
        es3.classList.remove("mostrar3");
        es1.classList.remove("mostrar");
        es0.classList.remove("color3");
    }

    if(opc==3){
        es.classList.add("mov");
        es0.classList.add("color3");
        es3.classList.add("mostrar3");
        es4.classList.add("aparecer");
        es2.classList.remove("mostrar2");
        es1.classList.remove("mostrar");
        es0.classList.remove("color2");
    }

    if(opc==0){
        es.classList.remove("mov");
        es0.classList.remove("color");
        es0.classList.remove("color2");
        es0.classList.remove("color3");
        es1.classList.remove("mostrar");
        es2.classList.remove("mostrar2");
        es3.classList.remove("mostrar3");
        es4.classList.remove("aparecer");
    }
}

/*LINKS PARA EL PARCIAL 1*/

function P1(){
    document.getElementById("cambiante").src = "Practicas/Practica1.HTML";
}
function P2(){
    document.getElementById("cambiante").src = "Practicas/Practica2.html";
}
function P3(){
    document.getElementById("cambiante").src = "Practicas/Practica3.HTML";
}
function P4(){
    document.getElementById("cambiante").src = "Practicas/Practica4.HTML";
}
function P5(){
    document.getElementById("cambiante").src = "Practicas/Practica5.HTML";
}
function P6(){
    document.getElementById("cambiante").src = "Practicas/Practica6.HTML";
}
function P7(){
    document.getElementById("cambiante").src = "Practicas/Practica7.HTML";
}
function P8(){
    document.getElementById("cambiante").src = "Practicas/Reto.HTML";
}
function P9(){
    document.getElementById("cambiante").src = "Practicas/Sistemsolar/SL.HTML";
}
function P10(){
    document.getElementById("cambiante").src = "Practicas/Reproduccion/Reproductor.html";
}
function P11(){
    document.getElementById("cambiante").src = "Practicas/Tutorias.HTML";
}
function P12(){
    window.location.href = "https://masahiro-sakurai-web.my.canva.site/webtime";
}
function P13(){
    window.location.href = "https://sites.google.com/view/masahiro-sakurai-creador-vdj/portada";
}
function P14(){
    window.location.href = "https://www.canva.com/design/DAF7lvxj438/NYjTQ6kV-pD8zCDcNgL3Fw/edit?utm_content=DAF7lvxj438&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton";
}

/*LINKS PARCIAL 2*/

function P15(){
    document.getElementById("cambiante").src = "PracticasSEG/Practica1.html";
}
function P16(){
    document.getElementById("cambiante").src = "PracticasSEG/Practica2.html";
}
function P17(){
    document.getElementById("cambiante").src = "PracticasSEG/Reto1Parcial2.html";
}
function P18(){
    document.getElementById("cambiante").src = "PracticasSEG/Reto2Parcial2.html";
}
function P19(){
    document.getElementById("cambiante").src = "PracticasSEG/ejemplo-plantilla/ejemplo.html";
}
function P20(){
    document.getElementById("cambiante").src = "PracticasSEG/Ejerciciosclases2.html";
}
function P21(){
    document.getElementById("cambiante").src = "PracticasSEG/HistoriaSLP.html";
}
function P22(){
    document.getElementById("cambiante").src = "PracticasSEG/Ajedrez.html";
}
function P23(){
    document.getElementById("cambiante").src = "PracticasSEG/infografía.html";
}
function P24(){
    document.getElementById("cambiante").src = "PracticasSEG/7barrios/7barrioss.html";
}
function P25(){
    document.getElementById("cambiante").src = "PracticasSEG/EJERCICIOS/practica1.html";
}
function P26(){
    document.getElementById("cambiante").src = "PracticasSEG/EJERCICIOS/practica2.html";
}
function P27(){
    document.getElementById("cambiante").src = "PracticasSEG/EJERCICIOS/practica3.html";
}
function P28(){
    document.getElementById("cambiante").src = "PracticasSEG/resuelveyaplica.html";
}
function P29(){
    document.getElementById("cambiante").src = "PracticasSEG/resuelve/emoji-peliculas.html";
}
function P30(){
    document.getElementById("cambiante").src = "PracticasSEG/csspractica3.html";
}
function P31(){
    document.getElementById("cambiante").src = "PracticasSEG/reto1imagen1.html";
}
function P32(){
    document.getElementById("cambiante").src = "PracticasSEG/estilosavanzadosejercicio1/ejercicio1.html";
}
function P33(){
    document.getElementById("cambiante").src = "PracticasSEG/museo/londres.html";
}
function P34(){
    document.getElementById("cambiante").src = "PracticasSEG/revistas-informatica-3/revistas.html";
}
function P35(){
    document.getElementById("cambiante").src = "PracticasSEG/transformaciones/animacion.html";
}
function P36(){
    document.getElementById("cambiante").src = "PracticasSEG/transformaciones/animacion2.html";
}
function P37(){
    document.getElementById("cambiante").src = "PracticasSEG/transformaciones/transformar.html";
}
function P38(){
    document.getElementById("cambiante").src = "PracticasSEG/transformaciones/transformar2.html";
}
function P39(){
    document.getElementById("cambiante").src = "PracticasSEG/menuprueba.html";
}
function P40(){
    document.getElementById("cambiante").src = "PracticasTER/0_Practica_Inicial.html";
}
function P41(){
    document.getElementById("cambiante").src = "PracticasTER/1_Generador_parrafos.html";
}
function P42(){
    document.getElementById("cambiante").src = "PracticasTER/2_Generador_Fila_Col.html";
}
function P43(){
    document.getElementById("cambiante").src = "PracticasTER/3_Ejercicio_tabla_Solicitado.html";
}
function P44(){
    document.getElementById("cambiante").src = "PracticasTER/4_Aleatorios.html";
}
function P45(){
    document.getElementById("cambiante").src = "PracticasTER/5_Ejercicio_contra.html";
}
function P46(){
    document.getElementById("cambiante").src = "PracticasTER/6_Grados.html";
}
function P47(){
    document.getElementById("cambiante").src = "PracticasTER/7_Arreglos.html";
}
function P48(){
    document.getElementById("cambiante").src = "PracticasTER/8_Geolocalizacion.html";
}
function P49(){
    document.getElementById("cambiante").src = "PracticasTER/9_Geolocalizacion_mapa.html";
}
function P50(){
    document.getElementById("cambiante").src = "PracticasTER/10_codigo_modulo3.html";
}
function P51(){
    document.getElementById("cambiante").src = "PracticasTER/11_Canva.html";
}
function P52(){
    document.getElementById("cambiante").src = "PracticasTER/12_Graficas1.html";
}
function P53(){
    document.getElementById("cambiante").src = "PracticasTER/13_Graficas2.html";
}
function P54(){
    document.getElementById("cambiante").src = "PracticasTER/14_Graficas3.html";
}
function P55(){
    document.getElementById("cambiante").src = "PracticasTER/15_Graficas4.html";
}
function P56(){
    document.getElementById("cambiante").src = "PracticasTER/16_testalumno.html";
}
function P57(){
    document.getElementById("cambiante").src = "PracticasTER/pdf/17_testpdf.html";
}
function P58(){
    document.getElementById("cambiante").src = "PracticasTER/pdf/retopdf2.1.html";
}
