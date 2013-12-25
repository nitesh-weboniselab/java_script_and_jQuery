$(document).ready(function(){
  $("button").click(function(){
    if($("#txtb").is(":visible"))
       {
         $("#txtb").hide();
         value =$("#txtb").val();
           
         
         // $("inc").append(<input type="text" name = value >)
         $("p").append("<b>"+ value + "</b>"+ "<b> </b>" );
         
       } 
     else
       {
         $("#txtb").show();
          document.getElementById("txtb").value=" ";
       }  
   
  });

    
});
