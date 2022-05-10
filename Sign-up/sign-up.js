function validation() {
    var first = document.forms["myForm"]["fname"].value;
    var last = document.forms["myForm"]["lname"].value;
    var mail = document.forms["myForm"]["mail"].value;
    var mobile = document.forms["myForm"]["mobile"].value;
    var password = document.forms["myForm"]["password"].value;
    var conf_pass = document.forms["myForm"]["conf-pass"].value;
    // var length = document.getElementById("length");
    // min_length = 3;
    // max_length = 25;

    if (first == "") {
        document.getElementById('fname-i').placeholder = "**Please enter First Name**";
        return false;
    }
    // if (first.value.length < min_length || first.value.length > max_length) {
    //     document.getElementById("f--name").innerHTML = "**Length must be between 3 to 25!**";
    //     return false;
    // }
    if (last == "") {
        document.getElementById('lname-i').placeholder = "**Please enter Last Name**";
        return false;
    }
    if (mail == "") {
        document.getElementById('mail-i').placeholder = "**Please enter your Mail-ID**";
        return false;
    }
    if(/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(myForm.mail.value)){
        alert("You have entered an invalid email address!");
        return false;
    }
    if (mobile == "") {
        document.getElementById('mobile-i').placeholder = "**Please enter your Mobile No.**";
        return false;
    }
    if (password == "") {
        document.getElementById('password-i').placeholder = "**Please enter Password**";
        return false;
    }
    if (conf_pass == "") {
        document.getElementById('conf-pass-i').placeholder = "**Please enter confirmation Password**";
        return false;
    }
    if (password != conf_pass) {
        document.getElementById('confirm').innerHTML = "**Password did not match!**";
        return false;
    }
}
