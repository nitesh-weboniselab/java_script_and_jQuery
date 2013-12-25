var data = new Array();
$(document).ready(function(){
 $("#btnadd").click(function(){
    if($("#txtb").is(":visible"))
       {    
         var textVal =$("#txtb").val();
         if(textVal != '') {
         	$('#tree').append('<input type="submit" class=lnchPopop id='+textVal+' value=' + textVal +'>');
         	$('.lnchPopop').click(function(event){
			$(".QTPopup").animate({width: 'show'}, 'slow');
		    $('#container').html('');
		    if(! data[event.currentTarget.id]) {
		    	data[event.currentTarget.id] = new Array();
		    }
		    $('#itemcontainer').html('');
		    for(var i=0; i < data[event.currentTarget.id].length; i++)
		    {
		    	$('#itemcontainer').append('<input type="text" id='+data[event.currentTarget.id][i]+'+"text" value='+data[event.currentTarget.id][i]+'> <input type="submit" class='+data[event.currentTarget.id][i]+' value="delete" data='+data[event.currentTarget.id][i]+'+"text" > <br>');
		    	$('.'+data[event.currentTarget.id][i]).click(function(event){ 
		    	data[event.currentTarget.id].remove($('#'+data[event.currentTarget.data]).val());
		    	$('#'+data[event.currentTarget.data]).hide();  
		    	});
		    }
			
		    $('#container').append('<input type="submit" value="addSub" id="addSub"><input type="text" id ="inpsub" value="" style="display:none;">');
		    $('#addSub').click(function(){
		   	   if($("#inpsub").is(":visible"))
               {    
		          var textVal =$("#inpsub").val();
		          data[event.currentTarget.id].push(textVal);
		          $('#inpsub').hide();
		          $('#itemcontainer').html('');
		    	  for(var i=0; i < data[event.currentTarget.id].length; i++)
		    	  {
		    	     $('#itemcontainer').append( ' <input type="text" value='+data[event.currentTarget.id][i]+'>'+'<br>');  
		    	  }
		       }
		       else
		       {
		         $('#inpsub').val('');
		         $('#inpsub').show();
		       }
		    });
		    
			})
			$(".closeBtn").click(function(){			
			$(".QTPopup").css('display', 'none');
		})
         	$('#txtb').hide();
            }
         else {
         	   alert('Please enter a value');
              }
         
       } 
     else
       {
       	$('#txtb').val('');
         $('#txtb').show();
         
       }  
  });

    
});
