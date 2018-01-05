
var a = "offer great services ";
var b= " test";
var c = " blah ";
var d = " this is a hoot ";
var e = a + b + c + d;





$(document).ready(function() {
    $("#change").click(function(){
 document.getElementById("serviceTranslate").innerHTML = "Servicio";  
  document.getElementById("contactTranslate").innerHTML = "Cont&#225ctenos";
   document.getElementById("footernote").innerHTML = "Hecho por Mauricio Ramos";
   document.getElementById("work").innerHTML = "iosidfjsdiofkdlfckckcoxjjjjjcccccccxcdsmf iovsdbfg;dfinbg;  dfibnd;fo  ibdfgbidmfo;mi";
document.getElementById("contactNumber").innerHTML = "Numero: Phone: 201-522-5078 ";

document.getElementById("wordtest1").innerHTML = "Nuestros servicios son a nivel local, estatal y nacional";
document.getElementById("wordtest2").innerHTML = "esponsabilidad, punctualidad y rapidez hacen que cada dia se sumen mas clientes";


   
    }); 


 $("#revert").click(function(){
 document.getElementById("serviceTranslate").innerHTML = "Service";  
  document.getElementById("contactTranslate").innerHTML = "Contact us";
document.getElementById("footernote").innerHTML = "Created by Mauricio Ramos";
    document.getElementById("work").innerHTML =  "o thank you all for your support we at Big Apple are offering a very special Christmas season, EARLY ADMISSION TICKET  at half price  $50 instead of $100.    Early admission allows you early access to dealers and celebrity autograph lines +there will be free gifts.This offer is only good for the 12days of Christmas after that full price. Thanks again for supporting the Big Apple Comic Con, we love you all and want you to have a wonderful Christmas and New Year.";
   document.getElementById("contactNumber").innerHTML = "Phone: Phone: 201-522-5078";  

document.getElementById("wordtest1").innerHTML = "Services are done locally and nationall";
 document.getElementById("wordtest2").innerHTML = c;  


    }); 


});

 
