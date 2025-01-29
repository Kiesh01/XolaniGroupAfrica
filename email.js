function SendMail(){
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

function subscribe(){
		var params = {
		
		email_id:document.getElementById('email_rec').value
	
	}
	emailjs.send('service_amorts2','template_2991zzb',params).then(function (res){
		alert('Success!'+ res.status );
		 location.reload();
	})
}

function feedback(){
	var params = {

		message:document.getElementById('mes').value
	}
	emailjs.send('service_amorts2','template_rbbwazv',params).then(function (res){
		alert('Success!'+ res.status );
		 location.reload();
	})
}