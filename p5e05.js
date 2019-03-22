function mostralog () {
	var n1 = document.getElementById ("primeiroNumero").value;
	var n2 = document.getElementById ("segundoNumero").value;
	x = parseInt (n1);
	b = parseInt (n2);	

	resp = Math.log(x) / Math.log(b);
		
	document.getElementById ("resposta").innerHTML = resp;
	

}