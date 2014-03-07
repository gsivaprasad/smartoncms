$(document).ready(function(){
  $('#body_content_title').hide();
  $('#program-section').css("display","none");
  $('#myTab1').css("display","none");
  $('#hwitworks-section').css("display","none");
  $('#why-smartone-block').css("display","none");
  $('#myTab').css("display","none");
  $('#keypartnersTab').css("display","none");
  $('#whyPartnerTab').css("display","none");
  
  
  var sub_menu = window.location.href.split("/#")[1];
  if(sub_menu == "main-about"){
    $('#main-navbar ul li').removeClass('active');
    $('#abt').addClass('active');
   $(window).scrollTop($("#main-about").offset().top-110);
 }
 if(sub_menu == "programs"){
   $('#main-navbar ul li').removeClass('active');
   $('#prgs').addClass('active');
   $(window).scrollTop($("#programs").offset().top-50);
 }
 if(sub_menu == "how-it-works"){
   $('#main-navbar ul li').removeClass('active');
   $('#hwitwk').addClass('active');
   $(window).scrollTop($("#hwItWrks").offset().top-70);
 } 
});

function NumericCharKeyPress(evt){
  var charCode = (evt.which) ? evt.which : event.keyCode;  
  if (charCode > 31 && (charCode < 48 || charCode > 57))
    return false;
  return true;
}

function TextCharKeyPress(evt){
  var charCode = (evt.which) ? evt.which : event.keyCode;  
  if (charCode == 8 || (charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123))
    return true;
  return false;
}