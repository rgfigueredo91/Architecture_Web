//funcion open and close
function openNav() {  
  document.getElementById("myNav").style.left = "0vh";
  document.getElementById("myNav").style.visibility = "visible";
}

function closeNav() {
  document.getElementById("myNav").style.left = "-200vh";
  document.getElementById("myNav").style.visibility = "hidden";
}

function openNavTwo() {
  document.getElementById("localesComerciales").style.left = "0vh";
  document.getElementById("localesComerciales").style.visibility = "visible";
}

function closeNavTwo() {
  document.getElementById("localesComerciales").style.left = "-200vh";
  document.getElementById("localesComerciales").style.visibility = "hidden";
}

//changing html



function htmlToAppendBromatologia(){
  let htmlContentToAppend = "";

      htmlContentToAppend += `
                <h2 class="changingTitle">
                HABILITACIÓN BROMATOLÓGICA
              </h2>
              <h3 class="changingTitle">
              ¿A quienes está dirigida la necesidad de contar con una habilitación bromatológica?
              </h3>
              <p class="changingText">
              Establecimientos expendedores: almacenes, quioscos, salones, bares, pubs.
Manipulación de productos: depósitos, importadores, distribuidoras, almacenes por mayor.
Establecimiento con ventas en el mismo lugar: Fiambrerías, Panaderías, Confiterías, Rotiserías, fábrica de pastas, Restaurantes, Pizzerías, Carnicerías, Salones de fiestas, Comidas al paso/minutas, fraccionadoras comerciales, etc.
Supermercados, autoservicios con y sin elaboración.
Establecimientos elaboradores, con venta a terceros, con o sin venta en el lugar: fábricas, fraccionadoras industriales, empresas de cátering, etc.

              </p>
              <p class="changingText">
              “Es el acto por el cual el servicio de Regulación Alimentaria autoriza a una empresa a realizar una o mas de las siguientes actividades: 
              industrialización, importación, fraccionamiento, almacenamiento, distribución o comercialización de alimentos. Por extensión se incluye en esta denominación a la 
              organización dedicada al suministro de preparaciones culinarias. Registro es el acto por el cual el servicio de Regulación Alimentaria le adjudica a una empresa, una vez habilitada, un número único.”
              </p>
  
      `
      document.getElementById("overlay-contentTwoId").innerHTML = htmlContentToAppend;
  
}

function htmlToAppendComercios(){
  let htmlContentToAppend = "";

      htmlContentToAppend += `
                <h2 class="changingTitle">
                HABILITACIÓN LOCALES COMERCIALES E INDUSTRIALES - SIME
              </h2>
              <h3 class="changingTitle">
              Servicio de Instalaciones Mecánicas y Eléctricas
              </h3>
              <p class="changingText">
              Se dirige a aquellos locales comerciales y/o industriales que cuentan con algún sistema eléctrico y/o mecánico, requiriendo un aval por parte de la Gestión Ambiental.

              </p>
              <p class="changingText">
              “
              Trámite para la habilitación de locales comerciales e industriales y sus características particulares como por ejemplo: maquinaria, heladeras, ventilación, aire acondicionado, elevadores, ascensores, etc.
              ”
              </p>
  
      `
      document.getElementById("overlay-contentTwoId").innerHTML = htmlContentToAppend;
  
}











///// comercios
function openNavTwoComercios() {
  openNavTwo()
  htmlToAppendComercios()
  
  
}

function openNavTwoComerciosOnly() {
  htmlToAppendComercios()
}

///// bromatologia
function openNavTwoBromatolog() {
  openNavTwo()
  htmlToAppendBromatologia()

}

function openNavTwoBromatologOnly() {
  htmlToAppendBromatologia()

}



