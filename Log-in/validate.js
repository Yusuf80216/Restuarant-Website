function validate()
{
    var password = document.getElementById("pass");
    var length = document.getElementById("length");
    var email = document.getElementById("email");
    if(email.value == "" || email.value==null)
    {
        alert("Email is required");
    }
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myform.email.value))
    {
        return(true)
    }
    else
    {
        alert("Invalid email address");
        return(false)
    }
    if(password.value.length>=8)
    {
        alert("Login successfull");
        return false;
    }
    else
    {
        alert("Login failed");
    }
}