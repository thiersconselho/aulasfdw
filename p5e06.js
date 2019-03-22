function calculaarea () {
	var n1 = document.getElementById ("primeiroNumero").value;
	escolha = parseInt (n1);
	
	switch (escolha) {
		case 1:
			alert("Retangulo");
			var base = prompt("Base:");
			var altura = prompt("Altura:");
			resp = base* altura;
			document.getElementById ("resposta").innerHTML += "Retangulo ";
			break;
		case 2:
			alert("Triangulo");
			var base = prompt("Base:");
			var altura = prompt("Altura:");
			resp = ( base* altura ) / 2;
			document.getElementById ("resposta").innerHTML += "Triangulo ";
			break;
		case 3:
			alert("Circulo");
			var raio = prompt("Raio:");
			resp = 3.14 * Math.pow(raio,2);
			document.getElementById ("resposta").innerHTML += "Circulo ";
			break;
		case 4:
			alert("Trapezio");
			var base1 = prompt("Base maior:");
			var base2 = prompt("Base menor:");
			var altura = prompt("Altura:");
			resp = (base1 + base2) * altura;
			document.getElementById ("resposta").innerHTML += "Trapezio ";
			break;
		default:
			alert("Escolha inexistente");
			resp = 0;
	}

	document.getElementById ("resposta").innerHTML += resp;
	
}