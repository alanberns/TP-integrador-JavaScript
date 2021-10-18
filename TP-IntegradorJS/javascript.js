
function calcular(){
	var categoria=document.getElementById("categoria").value;
	var descuento=0;
	switch (categoria){
		case "1":
			descuento=80;
			break;
		case "2":
			descuento=50;
			break;
		case "3":
			descuento=15;
			break;
		}
	var cantidad = document.getElementById('cantidad').value;
	var valor = cantidad * ( ( (100 - descuento) * 200 ) /100 );
	document.getElementById('muestra').innerHTML = valor;
}

