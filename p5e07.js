function sinteiros () {
	var n1 = document.getElementById ("primeiroNumero").value;
	var n2 = document.getElementById ("segundoNumero").value;
	var resp = 0;
	var x = parseInt(n1);
	var y = parseInt(n2);
	for (i=x; i<=y; i++) {
		resp += i;
	}
	document.getElementById ("resposta").innerHTML = resp;
}