function parouimpar () {
	var n1 = document.getElementById ("NumeroEscolhido").value;
	resp = parseInt (n1);
	//alert(resp);
	while (resp>=0)	{
		if (resp%2 == 0) {
			document.getElementById ("resposta").innerHTML += "<br>" + resp;
		}
		resp--;
	}
}