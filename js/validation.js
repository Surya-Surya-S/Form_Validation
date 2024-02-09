const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const pass = document.getElementById("pass");

form.addEventListener('submit', e =>{
    e.preventDefault();
    formValidate();
});


function formValidate(){
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const passValue = pass.value.trim();

    if(usernameValue === ""){
        setError(username, 'Username cannot be blank');
    }
    else{
        setSuccess(username);
    }

    if(emailValue === ""){
        setError(email, 'Email cannot be blank')
    }
    else if(!emailValidate(emailValue)){
        setError(email, 'Email cannot format')
    }
    else{
        setSuccess(email);
    }

    if(passwordValue === ""){
        setError(password, 'Password cannot be blank');
    }
    else{
        setSuccess(password);
    }

    if(passValue === ""){
        setError(pass, 'Password cannot be blank');
    }
    else if(passValue !== passwordValue){
        setError(pass, "Password doesn't match");
    }
    else{
        setSuccess(pass);
    }

    function setError(input, message){
        const formControl = input.parentElement;
        const small = formControl.querySelector(".errors")
        formControl.className = "form_control error";
        small.innerText = message;
    }
    
    function setSuccess(input, message){
        const formControl = input.parentElement;
        const small = formControl.querySelector(".errors")
        formControl.className = "form_control success";
        small.innerText = message;
    }
    
}

function emailValidate(email){
    return /^[a-zA-Z]$/;
}