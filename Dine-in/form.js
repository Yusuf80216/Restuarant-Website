function validation() {
    var seats = document.forms["myForm"]["number"].value;
    if(seats == "") {
            document.getElementById('seat-check').innerHTML = "**Please enter no. of guests**";
            return false;
        }
}