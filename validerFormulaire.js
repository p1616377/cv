function valider()
 {
	console.log($("#nom").val());
	if ($("#nom").val() == "")
     	{
         window.alert("La rubrique réservée au NOM est vide, Veuillez saisir votre Nom !");
	 value=false;
	}
	else {value=true;}
	return value;
 } 
