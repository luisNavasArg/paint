//agregamos el evento al documento con dos parametros 
//un string para que al cargar la página se ejecute el segundo parametro que es una función
document.addEventListener('DOMContentLoaded',inicializar);

var x = 150, y=450;
function inicializar(){
//capturamos el canvas para rellenar el fondo del juego
	var fondo = document.getElementById('canvas');
	//usamos la function de la tecla abajo para que al ser pulsada llame la funcion desplazar
	document.onkeydown=desplazar;
	//agregamos el contenido 2d al fondo
	contenedor = fondo.getContext("2d");
	//asignamos el color del fondo
  	contenedor.fillStyle = "green";
  	//comenzamos a imprimir el rectangulo
	contenedor.beginPath();
	//le damos los parametros(coordenada X, coordenada Y, ancho, alto)
  	contenedor.rect(0, 0, 600, 600);
  	//pintamos el rectnagulo
  	contenedor.fill();
  	
}

function bajar(atributo){
	var luis = document.getElementById('canvas');
	var tamanoy = luis.height;
	var tamanox = luis.width;
    contenedor.fillStyle = atributo.id;    
  	contenedor.beginPath();
 	contenedor.arc(x, y, 3, 0, Math.PI * 2, true);
  	contenedor.fill();
	contenedor.closePath();
	//x+=10;}
	if(atributo.id=="red"){
		if(y<tamanoy){y+=10;}
	} else if(atributo.id=="blue"){
		if(y>0){y-=10;}
	} else if(atributo.id=="orangeRed"){
		if(x>0){x-=10;}
	} else if(atributo.id=="yellow"){
		if(x<tamanox){x+=10;}
	}
}

function desplazar(objeto){
var luis = document.getElementById('canvas');
	var tamanoy = luis.height;
	var tamanox = luis.width;
    //   
  	contenedor.beginPath();
 	contenedor.arc(x, y, 3, 0, Math.PI * 2, true);
  	contenedor.fill();
	contenedor.closePath();
var tecla = objeto.which;

	if(tecla=='40'){
		if(y<tamanoy){y+=10;contenedor.fillStyle = "yellow" ; }
	} else if(tecla=='38'){
		if(y>0){y-=10;contenedor.fillStyle ="blue"}
	} else if(tecla=='37'){
		if(x>0){x-=10;contenedor.fillStyle ="red"}
	} else if(tecla=='39'){
		if(x<tamanox){x+=10;contenedor.fillStyle ="orangeRed"}
	}

}

