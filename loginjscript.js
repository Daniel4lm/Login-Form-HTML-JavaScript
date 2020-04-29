
document.getElementById("username").addEventListener('input', userNameValidation);
document.getElementById("password").addEventListener('input', passValidation);

function userNameValidation() {
    if (document.getElementById("username").value.length < 3) {
        document.getElementById("username").style.border = "3px solid #dc5865";
        return false;
    } else {
        document.getElementById("username").style.border = "3px solid #ebedf0";
        return true;
    }
}

function passValidation() {
    if (document.getElementById("password").value.length < 3) {
        document.getElementById("password").style.border = "3px solid #dc5865";
        return false;
    } else if (document.getElementById("password").value.length < 6) {
        document.getElementById("password").style.border = "3px solid #ffca18";
        return false;
    } else {
        document.getElementById("password").style.border = "3px solid #ebedf0";
        return true;
    }
}

function mouseOutButton() { //onmouseout
    document.getElementById("sub").style.background = "#3274d6";
    document.getElementById("btnDiv").style.background = "#3274d6";
    document.getElementById("errmessage").style.background = "#dc5865";
    document.getElementById("warnmessage").style.background = "#e5b832";
    document.getElementById("infomessage").style.background = "#4dc568";
}

function mouseOverElement(e, event) {

    var btnX = event.offsetX;
    var btnY = event.offsetY;

    var xBtn = (btnX * 100) / e.offsetWidth;
    var xBorder = (btnX * 100) / e.offsetWidth;
    /* get width with border */
    //document.getElementById("container").document.getElementById("container").offsetWidth
    /* get width without border */
    //document.getElementById("container").clientWidth

    switch (e.tagName) {

        case "BUTTON":
            e.style.background = "linear-gradient(to right, rgb(50,116,214) "
                + (xBtn - 30) + "%, rgb(50,160,222) " + xBtn + "%, rgb(50,116,214) " + (xBtn + 30) + "%)";

            document.getElementById("btnDiv").style.background = "linear-gradient(to right, rgb(50,160,222) "
                + (xBorder - 30) + "%, rgb(180,213,255) " + xBorder + "%, rgb(50,160,222) " + (xBorder + 30) + "%)";

            break;

        case "DIV":

            switch (e.id) {

                case "errmessage":
                    e.style.background = "linear-gradient(to right, rgb(220,88,101) "
                        + (xBtn - 30) + "%, rgb(255,133,145) " + xBtn + "%, rgb(220,88,101) " + (xBtn + 30) + "%)";
                    break;

                case "warnmessage":
                    e.style.background = "linear-gradient(to right, rgb(229,184,50) "
                        + (xBtn - 30) + "%, rgb(255,213,88) " + xBtn + "%, rgb(229,184,50) " + (xBtn + 30) + "%)";
                    break;
                case "infomessage":
                    e.style.background = "linear-gradient(to right, rgb(77,197,104) "
                        + (xBtn - 30) + "%, rgb(105,255,139) " + xBtn + "%, rgb(77,197,104) " + (xBtn + 30) + "%)";
                    break;
            }
            break;
    }

}

function checkInput(e) {

    let userName = document.forms[0].elements['username'];
    let userPassword = document.forms[0].elements['password'];
    let userNamePattern = /[^a-zA-Z]/gi;
    let passPattern = /[^a-zA-Z]/gi;
    let userNameResult = userName.value.match(userNamePattern);
    let passResult = userPassword.value.match(passPattern);

    if (userName.value.length < 3 || userPassword.value.length < 6) {
        if (document.getElementById("errmessage").style.display == "none") {
            // set all other messages to none
            document.getElementById("warnmessage").style.display = "none"
            document.getElementById("infomessage").style.display = "none"

            document.getElementById("errmessage").style.backgroundColor = "#dc5865";
            document.getElementById("errmessage").innerHTML =
                "<p><i class=\"fa fa-ban\" style=\"font-size:28px;vertical-align: middle; color: white;\"></i>" +
                " User name and password cannot be empty. " +
                "User name must have at least 3 and password 6 characters!</p>";
            document.getElementById("errmessage").style.display = "flex";
        }
        return false;
    } else if (userNameResult != null || passResult == null) {
        if (document.getElementById("warnmessage").style.display == "none") {
            // set all other messages to none
            document.getElementById("errmessage").style.display = "none"
            document.getElementById("infomessage").style.display = "none"

            document.getElementById("warnmessage").style.backgroundColor = "#e5b832";
            document.getElementById("warnmessage").innerHTML = "<p>" +
                "<i class=\"material-icons\" style=\"vertical-align: middle;font-size:28px; color: white;\">info_outline</i> " +
                "User name and password cannot be empty. " +
                "User name can't cointain numbers or special characters. " +
                "Password must contain at least one number or special character!</p>";
            document.getElementById("warnmessage").style.display = "flex";
        }
        return false;
    } else {
        // set all other messages to none
        document.getElementById("errmessage").style.display = "none"
        document.getElementById("warnmessage").style.display = "none"

        document.getElementById("infomessage").style.backgroundColor = "#4dc568";
        document.getElementById("infomessage").innerHTML = "<p>" +
            "<i class=\"fa fa-check-square-o\" style=\"font-size:28px;vertical-align: middle; color: white;\"></i> " +
            "You have seccessfully logged in!</p>";
        document.getElementById("infomessage").style.display = "flex";

        return true;
    }
}

function createMessageElement(e, msg, type) {
    /*
    var myDiv = document.createElement("DIV");
    myDiv.id = (type == "error") ? "errmessage" : (type == "warning") ? "warnmessage" : "infomessage";
    myDiv.className = (type == "error") ? "errmessage" : (type == "warning") ? "warnmessage" : "infomessage";
    myDiv.style.backgroundColor = (type == "error") ? "#dc5865" : (type == "warning") ? "#e5b832" : "#4dc568";
    var divP = document.createElement("P");
    divP.id = "divMsg";
    divP.innerText = (msg.length > 0) ? msg : "No message";

    myDiv.appendChild(divP);

    myDiv.style.border = (type == "error") ? "1px 0px 1px 0px" :
        (type == "warning") ? "1px 0px 1px 0px" : "1px 0px 1px 0px";
    var mainDiv = document.getElementById("form");
    mainDiv.insertBefore(myDiv, document.getElementById("btnDiv"));

    myDiv.onmouseover = mouseOverElement;
    */
}