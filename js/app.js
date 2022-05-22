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
  document.getElementById("localesComerciales").style.top = "0vh";
  document.getElementById("localesComerciales").style.visibility = "visible";
}

function closeNavTwo() {
  document.getElementById("localesComerciales").style.top = "-200vh";
  document.getElementById("localesComerciales").style.visibility = "hidden";8
}

//changing html

///// comercios
function openNavTwoComercios() {
  openNavTwo()
  document.getElementById("changingTextid").innerHTML ="HABILITACIÓN BROMATOLÓGICA ¿A quienes está dirigida la necesidad de contar con una habilitación bromatológica? Establecimientos expendedores: almacenes, quioscos, salones, bares, pubs. Manipulación de productos: depósitos, importadores, distribuidoras, almacenes por mayor. Establecimiento con ventas en el mismo lugar: Fiambrerías, Panaderías, Confiterías, Rotiserías, fábrica de pastas, Restaurantes, Pizzerías, Carnicerías, Salones de fiestas, Comidas al paso/minutas, fraccionadoras comerciales, etc. Supermercados, autoservicios con y sin elaboración. Establecimientos elaboradores, con venta a terceros, con o sin venta en el lugar: fábricas, fraccionadoras industriales, empresas de cátering, etc. Es el acto por el cual el servicio de Regulación Alimentaria autoriza a una empresa a realizar una o mas de las siguientes actividades: industrialización, importación, fraccionamiento, almacenamiento, distribución o comercialización de alimentos. Por extensión se incluye en esta denominación a la organización dedicada al suministro de preparaciones culinarias. Registro es el acto por el cual el servicio de Regulación Alimentaria le adjudica a una empresa, una vez habilitada, un número único. fuente_ Montevideo.gub.uy dependencia: Intendencia de Montevideo, Departamento de Desarrollo Social, División Salud, Servicio de Regulación Alimentari"
}

function openNavTwoComerciosOnly() {
  document.getElementById("changingTextid").innerHTML ="HABILITACIÓN BROMATOLÓGICA ¿A quienes está dirigida la necesidad de contar con una habilitación bromatológica? Establecimientos expendedores: almacenes, quioscos, salones, bares, pubs. Manipulación de productos: depósitos, importadores, distribuidoras, almacenes por mayor. Establecimiento con ventas en el mismo lugar: Fiambrerías, Panaderías, Confiterías, Rotiserías, fábrica de pastas, Restaurantes, Pizzerías, Carnicerías, Salones de fiestas, Comidas al paso/minutas, fraccionadoras comerciales, etc. Supermercados, autoservicios con y sin elaboración. Establecimientos elaboradores, con venta a terceros, con o sin venta en el lugar: fábricas, fraccionadoras industriales, empresas de cátering, etc. Es el acto por el cual el servicio de Regulación Alimentaria autoriza a una empresa a realizar una o mas de las siguientes actividades: industrialización, importación, fraccionamiento, almacenamiento, distribución o comercialización de alimentos. Por extensión se incluye en esta denominación a la organización dedicada al suministro de preparaciones culinarias. Registro es el acto por el cual el servicio de Regulación Alimentaria le adjudica a una empresa, una vez habilitada, un número único. fuente_ Montevideo.gub.uy dependencia: Intendencia de Montevideo, Departamento de Desarrollo Social, División Salud, Servicio de Regulación Alimentari"
}

///// bromatologia
function openNavTwoBromatolog() {
  openNavTwo()
  document.getElementById("changingTextid").innerHTML ="esto es bromatologia"
}

function openNavTwoBromatologOnly() {
  document.getElementById("changingTextid").innerHTML ="esto es bromatologia"  
}



