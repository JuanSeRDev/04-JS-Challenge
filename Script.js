form = document.getElementById("suscribe-form").addEventListener("submit", ()=>{
    let emailImput = document.querySelector(".imput");
    let errorMessage = document.getElementById("error-message");

    if (isvalidEmail(emailImput.value)) {
        errorMessage.classList.remove(".hidden");
    }else {
        errorMessage.classList.add(".hiden")
    }
})


