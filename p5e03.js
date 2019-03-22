function parouimpar () {
	var n1 = document.getElementById ("primeiroNumero").value;
	var resp = parseInt (n1) % 2;
		      
	if (resp == 0) {
		//alert("PAR");
		document.getElementById ("resposta").innerHTML = "Número PAR";
	}
	else {
		//alert("IMPAR");
		document.getElementById ("resposta").innerHTML = "Número IMPAR";
	}
}