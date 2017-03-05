function valider()
 {
    var n = document.formulaire.nom.value;
	var Courriel = $(courriel).val();
	var Téléphone = $(telephone).val();

	if ( n == "" )
     {
         alert ( "Veuillez entrer votre Nom !" );
         valid = false;
	 }
	else {valid = true;}
	return valid;
     } 
   

    if ( document.formulaire.Courriel.value == "" )
     {
         alert ( "Veuillez entrer votre courriel !" );
         valid = false;
 return valid;
     }

    if ( document.formulaire.Telephone.value == "" )
     {
         alert ( "Veuillez entrer votre numéro de téléphone !" );
         valid = false;
 return valid;
     }
     if ( document.formulaire.Adresse.value == "" )
     {
         alert ( "Veuillez entrer votre adresse !" );
         valid = false;
 return valid;
     }
 }
