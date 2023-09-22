let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
let input = document.querySelector(".newsletter .left input");
let success = document.querySelector(".success");
let newsletter = document.querySelector(".newsletter");
let errorMessage=document.querySelector(".error-msg")

function subscribe() {
    if (input.value.match(emailRegex)) {
        newsletter.classList.add("hide");
        success.classList.remove("hide");
        hideError();
        input.value="";
    }else{
        showError();
    }

}

function dismiss() {
    newsletter.classList.remove("hide");
    success.classList.add("hide");
}

function showError(){
    errorMessage.style.display="block";
    input.classList.add("error");
}


function hideError(){
    errorMessage.style.display="none";
    input.classList.remove("error");
}