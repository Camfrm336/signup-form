const form = document.getElementById("myForm");
const span = document.getElementById("pwdWarning");


form.addEventListener('submit',function(e) {
    

    let isFormValid = passwordConfirmation();
    if (isFormValid) {
        return true;
    }
    else {
        e.preventDefault();
        span.innerHTML = `<span style="color: red; font-size: 12px;">*Passwords do not match</span>`;
        changeBorder();

    }
})
function passwordConfirmation() {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
   

    if (password == confirmPassword) {
        return true;
    } else {
        return false;
        
        
    }
}
function changeBorder () {
    const password = document.getElementById("password")
    const confirmPassword = document.getElementById("confirm-password")

    password.style.borderColor = "red";
    confirmPassword.style.borderColor = "red";


}