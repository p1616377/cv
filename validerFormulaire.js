function validation()
 {

	console.log($("#nom").val());
	if ($("#nom").val() == "")
     	{
         window.alert("La rubrique réservée au NOM est vide, Veuillez saisir votre Nom !");
		}

	console.log($("#courriel").val());
	console.log($("#courriel").val().includes("@"));
	if ($("#courriel").val() == "")
		{
         window.alert("La rubrique réservée au COURRIEL est vide, Veuillez saisir votre Courriel !");
		}
	else
		{
		if (!$("#courriel").val().includes("@"))
			{
			 window.alert("Le Courriel saisie n'est pas conforme, Veuillez saisir une bon Courriel !");
			}
		}
	
		
	console.log($("#telephone").val());
	console.log($("#telephone").val().length);
	if ($("#courriel").val() == "")
		{
         window.alert("La rubrique réservée au NUMERO DE TELEPHONE est vide, Veuillez saisir votre Numero de Téléphone !");
		}
	else
		{
		if (!$("#courriel").val().length != 10)
			{
			 window.alert("Le Numéro de téléphone saisie est incorrect, Veuillez saisir un Numéro de Téléphone correct !");
			}
		else
			{
			if (!$("#courriel").val().type != number)
				{
				 window.alert("Le Numéro de téléphone saisie contient des caractères autre que des chiffres, Veuillez saisir un Numéro de Téléphone correct !");
				}
		}
				
 }
