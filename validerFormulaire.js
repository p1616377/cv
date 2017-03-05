function valider()
 {
	var Nom = $("#nom").val();
	var Courriel = $("#courriel").val();
	var Telephone = $("#telephone").val();

	if ( Nom == "" )
     	{
         window.alert ( "La rubrique réservéé au NOM est vide, Veuillez saisir votre Nom !" );
	}
 } 
