$(document).ready(function(){
$('#body_content_title').hide();
$('#program-section').css("display","none");
$('#myTab1').css("display","none");
$('#why-smartone-block').css("display","none");
$('#myTab').css("display","none");
$('#whyPartnerTab').css("display","none");
});

function NumericCharKeyPress(e){
  var charCode = e.keyCode? e.keyCode : e.charCode;
  if (charCode != 190 && charCode > 31 && 
       (charCode < 48 || charCode > 57) && 
       (charCode < 96 || charCode > 105) && 
       (charCode < 37 || charCode > 40) && 
        charCode != 110 && charCode != 8 && charCode != 46 )
    e.preventDefault();    
  else
    return true;
  return false;
}

