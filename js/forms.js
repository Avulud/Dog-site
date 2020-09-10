function checkForm()
{
	var error=false;
	var errorText="";
	var contactName = document.getElementById("contactName");
	var contactSurname = document.getElementById("contactSurname");
	var contactEmail = document.getElementById("contactEmail");
	var confcontEmail = document.getElementById("confcontEmail");
	var password = document.getElementById("password");
	var confPassword = document.getElementById("confPassword");

	if (contactName.value == ""){
		document.getElementById('errorName').className='alert alert-danger';
		error=true;
	}


   
   if (contactSurname.value == ""){
		document.getElementById('errorSurname').className='alert alert-danger';
		error=true;
	}


	
	if (contactEmail.value == ""){
		document.getElementById('errorEmail').className='alert alert-danger';
		document.getElementById('emailGroup').className='form-group-has-error has-feedback';
		document.getElementById('emailGlyph').className='glyphicon glyphicon-remove form-control-feedback';
		error=true;
	}
    else
	{
		var email = contactEmail.value;
		var regex = /^[a-zA-z0-9._-]+@([a-zA-z0-9.-]+\.)+[a-zA-z0-9.-]{2,4}$/;
		if(regex.test(email)==false)
		{
			document.getElementById('errorEmail').className='alert alert-danger';
			document.getElementById('errorEmail').innerHTML='Uncorrect email';	
			error=true;
		}
	}


	if (confcontEmail.value == ""){
		document.getElementById('errorconfcontEmail').className='alert alert-danger';
		document.getElementById('emailGroup').className='form-group-has-error has-feedback';
		document.getElementById('emailGlyph').className='form-control-feedback';
		error=true;
	}
    else
	{
		var confirmEmail = confcontEmail.value;
		var regex = /^[a-zA-z0-9._-]+@([a-zA-z0-9.-]+\.)+[a-zA-z0-9.-]{2,4}$/;
		if(regex.test(confirmEmail)==false)
		{
			document.getElementById('errorEmail').className='alert alert-danger';
			document.getElementById('errorEmail').innerHTML='Uncorrect email';	
			error=true;
		}
	}


      if (password.value == ""){
		document.getElementById('errorpassword').className='alert alert-danger';
		error=true;
	}
	
	  if (confPassword.value == ""){
		document.getElementById('errorconfPassword').className='alert alert-danger';
		error=true;
	}



	if (!error) return true;
	
	else{
		alert ("You have not filled information in the following field:\n" + errorText);
		return false;
	}
}
