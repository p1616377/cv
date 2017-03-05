function valider()
 {
	if (document.formulaire.nom.value == "")
     	{
         window.alert("Veuillez entrer votre Nom !");
         valid = false;
	 }
	else {valid = true;}
	return valid;
 } 
