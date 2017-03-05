function valider()
 {
    var n = document.formulaire.nom.value;

	if ( n == "" )
     	{
         window.alert( "Veuillez entrer votre Nom !" );
         valid = false;
	 }
	else {valid = true;}
	return valid;
 } 
