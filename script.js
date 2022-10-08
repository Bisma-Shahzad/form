function clearerror(){
    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }
}

function seterror(id, error){
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
}

function validateForm(){
    var returnval = true;
    clearerror();

    var name = document.forms['myForm']["fname"].value;
    if (name.length < 5){
        seterror("name", "Length of name is too short");
        returnval = false;
    }

    if (name.length == 0){
        seterror("name", "Length of name is too short");
        returnval = false;
    }

    if (name.length == 0){
        seterror("name", "Length of name cannot be zero");
        returnval = false;
    }

    var email = document.forms['myForm']["femail"].value;
    if (email.length > 20){
        seterror("email", "email lenght is too long");
        returnval = false;
    }

    if (email.length == 0){
        seterror("email", "email cannot be zero");
        returnval = false;
    }

    var number = document.forms['myForm']["fnum"].value;
    if (number.length != 11){
        seterror("num", "Number should be of 11 digits");
        returnval = false;
    }

    var password = document.forms['myForm']["fpass"].value;
    if (password.length < 6){
        seterror("pass", "Password should be of atleast 6 digits long");
        returnval = false;
    }

    var cpassword = document.forms['myForm']["fcpass"].value;
    if (password != cpassword){
        seterror("cpass", "Password and Confirm Password should be same");
        returnval = false;
    }

    return returnval;
}