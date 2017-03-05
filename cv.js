function afficher(id_div) {$('#'+id_div).toggle();}

function valider() 
{    
  var Nom = $(nom).val();
  
  if ( Nom == "" )     
  {
   alert ( "Veuillez entrer votre Nom !" );         
   valid = false; 
   return valid;     
  } 
}
