function es()
{
	document.getElementById("subbtn").disabled=true;	
}
function diss()
{
	document.getElementById("subbtn").disabled=false;	
}
function validate()
{
	var flag=false;
	name=document.reg.v_fname.value;
	sname=document.reg.v_lname.value;
	email=document.reg.v_email.value;
	cno=document.reg.v_no.value;
	addr=document.reg.v_add.value;
	qua=document.reg.v_qua.value;
	dom=document.reg.v_dom.value;
	area=document.reg.v_area.value;
	/*if((name<=65 && name>=90) || (name<=97 && name>=122))
	{
		alert("Enter your name properly");
		return false;
	}
	else if((sname<=65 && sname>=90) || (sname<=97 && sname>=122))
	{
		alert("Enter your surname properly");
		return false;
	}*/
	if (!inputAlphabet(name, "* For your name please use alphabets only *",'f1'))
	{
		return false;
	}
	if (!inputAlphabet(sname, "* For your surname please use alphabets only *",'f2')) 
	{
		return false;
	}
	if (!emailValidation(email, "* Please enter a valid email address *"))
	{
		return false;
	}
	if (!textNumeric(cno, "* Please enter a valid contact number *"))
	{
		return false;
	}
	if (!textAlphanumeric(addr, "* For Address please use numbers and letters *"))
	{
		return false;
	}
	if (!trueSelection(qua, "* Please Choose any one option",'f6')) 
	{
		return false;
	}
	if (!trueSelection(dom, "* Please Choose any one option",'f7'))
	{
		return false;
	}
	if (!trueSelection(area, "* Please Choose any one option",'f8'))
	{
		return false;
	}
	return true;
}
// Function that checks whether input text is numeric or not.
function textNumeric(inputtext, alertMsg) 
{
	var numericExpression = /^[0-9]+$/;
	if(inputtext.match(numericExpression)) 
	{
		return true;
	}
	else
	{
		document.getElementById('f4').innerHTML = alertMsg; // This segment displays the validation rule for zip.
		//inputtext.focus();
		alert(alertMsg);
		return false;
	}
}
// Function that checks whether input text is an alphabetic character or not.
function inputAlphabet(inputtext, alertMsg,id) 
{
	var alphaExp = /^[a-zA-Z]+$/;
	if(inputtext.match(alphaExp))
	{
		return true;
	}
	else
	{
		document.getElementById(id).innerHTML = alertMsg; // This segment displays the validation rule for name.
		alert(alertMsg);
		inputtext.focus();
		return false;
	}
}
// Function that checks whether input text includes alphabetic and numeric characters.
function textAlphanumeric(inputtext, alertMsg)
{
	var alphaExp = /^[0-9a-zA-Z]+$/;
	if (inputtext.match(alphaExp))
	{
		return true;
	} 
	else
	{
		document.getElementById('f5').innerHTML = alertMsg; // This segment displays the validation rule for address.
		//inputtext.focus();
		alert(alertMsg);
		return false;
	}
}
// Function that checks whether the input characters are restricted according to defined by user.
/*function lengthDefine(inputtext, min, max) {
var uInput = inputtext.value;
if (uInput.length >= min && uInput.length <= max) {
return true;
} else {
document.getElementById('p2').innerText = "* Please enter between " + min + " and " + max + " characters *"; // This segment displays the validation rule for username
inputtext.focus();
return false;
}
}*/
// Function that checks whether a option is selected from the selector and if it's not it displays an alert message.
function trueSelection(inputtext, alertMsg,id)
{
	if (inputtext=="Please Choose")
	{
		document.getElementById(id).innerHTML= alertMsg; //this segment displays the validation rule for selection.
		//inputtext.focus();
		alert(alertMsg);
		return false;
	} 
	else
	{
		return true;
	}
}
// Function that checks whether an user entered valid email address or not and displays alert message on wrong email address format.
function emailValidation(inputtext, alertMsg)
{
	var emailExp =/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
	if (inputtext.match(emailExp))
	{
		return true;
	} 
	else
	{
		document.getElementById('f3').innerHTML = alertMsg; // This segment displays the validation rule for email.
		//inputtext.focus();
		alert(alertMsg);
		return false;
	}
}