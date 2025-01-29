function validation(){
	var name= document.getElementById('fullname').value;
	var email= document.getElementById('email_id').value;
	var empy = document.getElementById('Field_Empty');
	var empy2=document.getElementById('Field_Empty_c');

	var email_check=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

      empy.style.padding = "10px";

      if(name.length < 5){
      	text = "Please Enter Valid Name";
      	empy.innerHTML=text;
      	 $("#Rectangle_23").off('click');
      	
      }
      else if(email.value ===''){
      	text2 = "Please Enter Valid email";
      	empy2.innerHTML=text2;
      	 $("#Rectangle_23").off('click');
      }
     else if(email.length < 5){
      	text2 = "Please Enter Valid email";
      	empy2.innerHTML=text2;
      	 $("#Rectangle_23").off('click');
      	
      }
      else if(email.value ===''){
      	text2 = "Please Enter Valid email";
      	empy2.innerHTML=text2;
      	 $("#Rectangle_23").off('click');
      }

     else if(!email.match(email_check)){
      	text2 = "Invalid email";
      	empy2.innerHTML=text2
      	 $("#Rectangle_23").off('click');
      }
     else{
     	var params = {
		from_name: document.getElementById('fullname').value,
		email_id:document.getElementById('email_id').value,
		message:document.getElementById('message').value
	}
	emailjs.send('service_amorts2','template_rbbwazv',params).then(function (res){
		alert('Success!'+ res.status );
		 location.reload();
	})
     }
  
    return false;

}