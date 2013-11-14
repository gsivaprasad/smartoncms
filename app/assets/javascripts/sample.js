$(document).ready(function(){
  $('#body_content_title').hide();
  $('#program-section').css("display","none");
  $('#myTab1').css("display","none");
  $('#why-smartone-block').css("display","none");
  $('#myTab').css("display","none");
  $('#keypartnersTab').css("display","none");
  $('#whyPartnerTab').css("display","none");
});

function NumericCharKeyPress(evt){
  var charCode = (evt.which) ? evt.which : event.keyCode;  
  if (charCode > 31 && (charCode < 48 || charCode > 57))
    return false;
  return true;
}
