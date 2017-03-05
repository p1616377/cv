function afficher(id_div) {$('#'+id_div).toggle();}

function valider() 
{    
  var Nom = $(Nom).val();
  
  if ( Nom == "" )     
  {
   alert ( "Veuillez entrer votre Nom !" );         
   valid = false; 
  }
  else 
  {valid = true;}
  return valid;     
  } 
  
}
