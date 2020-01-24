function cargarPagina() {

    let anioMinimo = 1900;
    let anioMaximo = 2020;
    let anio = 0;

    let comboAnio = document.getElementById("anio");

    for (let i = anioMinimo; i <= anioMaximo; i++) {
        let option = document.createElement("option"); //Con esto creo la etiqueta option
        option.setAttribute("value", i); //Con esto le seteo el valor (pero de forma interna, el usuario no ve este valor)

        let optionText = document.createTextNode(i); //Con esto le seteo la opción que yo como usuario veo
        option.appendChild(optionText); //Con esto meto el optionText en la etiqueta Option
        comboAnio.appendChild(option); //Con esto meto el option en el comboAnio, que es lo que está vinculado a la etiqueta



    }

    let array = [
        "enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ]; //Le meto todos los meses y hago lo mismo

    let comboMes = document.getElementById("mes");

    for (let i = 0; i < array.length; i++) {
        let option = document.createElement("option"); //Con esto le creo la etiqueta option
        option.setAttribute("value", i + 1); //Con esto le seteo el valor (pero de forma interna, el usuario no ve este valor)
        let optionText = document.createTextNode(array[i]); //Con esto le seteo la opción que yo como usuario veo
        option.appendChild(optionText); //Con esto meto el optionText en la etiqueta Option
        comboMes.appendChild(option); //Con esto meto el option en el comboMes, que es lo que está vinculado a la etiqueta  
    }

}


function cargarNumeroDias() {

    let comboDia = document.getElementById("dia");
    let anio = parseInt(document.getElementById("anio").value);
    let mes = parseInt(document.getElementById("mes").value);
    let numeroDias = calcularDiasMes(anio, mes);

    for (let i = 1; i <= numeroDias; i++) {
        let option = document.createElement("option"); //Con esto le creo la etiqueta option
        option.setAttribute("value", i); //Con esto le seteo el valor (pero de forma interna, el usuario no ve este valor)
        let optionText = document.createTextNode(i); //Con esto le seteo la opción que yo como usuario veo
        option.appendChild(optionText); //Con esto meto el optionText en la etiqueta Option
        comboDia.appendChild(option); //Con esto meto el option en el comboDia, que es lo que está vinculado a la etiqueta  
    }

}

function crearFecha(){

    let comboAnio=document.getElementById("anio").value;
    let comboMes=document.getElementById("mes").value;
    let comboDia=document.getElementById("dia").value; 

    let array = [
        "enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ];

    let fecha=comboAnio+"-"+comboMes+"-"+comboDia; //Esto es un String
    let fechaDate=new Date (fecha); //Con esto ya hemos echo la conversión de tipos

    let diaResultado=fechaDate.getDate();
    let mesResultado=fechaDate.getMonth();
    let mesResultadoTexto=array[mesResultado]; 
    let anioResultado=fechaDate.getFullYear(); 
    
    output.innerHTML="Has seleccionado el " + diaResultado + " de " + mesResultadoTexto + " del año " + anioResultado + ".";  

}




function calcularDiasMes(anio, mes) {

    let numeroDias = -1;

    switch (mes) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            numeroDias = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            numeroDias = 30;
            break;
        case 2:


            if ((anio % 4 == 0 && anio % 100 != 0) || (anio % 100 == 0 && anio % 400 == 0)) { //Con esto sé si es bisiesto o no
                numeroDias = 29;
            } else {
                numeroDias = 28;
            }
            break;

    }

    return numeroDias;
}


window.onload = cargarPagina; //Para que esta función se cargue cuando se inicia la página