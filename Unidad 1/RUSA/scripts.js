function rusa(){
	var n1, n2, proceso, salida=0;
	num1 = document.getElementById("num1").value;
	num2 = document.getElementById("num2").value;

	while(num1>0){
		if(num1%2!=0){
			salida=parseInt(salida+num2);
		}
		num1=parseInt(num1/2);
		num2=num2*2;
	}

	document.getElementById("salida").innerHTML=salida;
	document.getElementById("proceso").innerHTML=proceso;
}