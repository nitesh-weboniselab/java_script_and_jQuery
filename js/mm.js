$(document).ready(function(){
 $("#btnadd").click(function(){
    if($("#txtb").is(":visible"))
       {
         $("#txtb").hide();
         valuei =$("#txtb").val
var newTextBox = $(document.createElement('textbox'))
                 .attr("id", 'TextBox' + count);
 
            newTextBox.after().html('<p align="left"><input type="text" style="font-size:20pt;height:50px;width:70px" name="textbox' + count + '" id="textbox' + count + '" value="' + valuei + '" ></p>');
            newTextBox.appendTo("#tg"); 
            $("#txtadd").hide();

       } 
     else
       {
         $("#txtb").show();
          document.getElementById("txtb").value=" ";
       }  
   
  });

    
});
