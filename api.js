document.addEventListener('DOMContentLoaded',inicializar);

var x = 150, y=450;
function inicializar(){
	var fondo = document.getElementById('canvas');
	contenedor = fondo.getContext("2d");
  	contenedor.fillStyle = "green";
	contenedor.beginPath();
  	contenedor.rect(0, 0, 600, 600);
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

