document.addEventListener('DOMContentLoaded', ()=>{
    const emailInput = document.querySelector('.input');
    const errorMessage = document.getElementById('error-messege');

    emailInput.addEventListener('input', function () {
        if (!isValidEmail(emailInput.value)) {
            errorMessage.classList.remove('hidden');
        } else {
            errorMessage.classList.add('hidden');
        }
    });

    function isValidEmail(email) {
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
});


