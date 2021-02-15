import './_vars';

window.onload = function() {

let form = document.querySelector('#form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateForm();
});


let validateForm = () => { 
    let name = document.querySelector('#username').value;
    let mobile = document.querySelector('#usermobile').value;
    let email = document.querySelector('#useremail').value;

    let nameErr = document.querySelector('#userErr');
    let mobileErr = document.querySelector('#mobileErr');
    let emailErr = document.querySelector('#emailErr');

    if(name == '') {
        nameErr.innerHTML = "Это обязательное поле";
    } else {
        let regex = /^[\sA-Za-zА-Яа-яЁё]{2,}$/;                
        if(regex.test(name) === false) {
            nameErr.innerHTML = "Имя введёно некорректно";
        } else {
            nameErr.innerHTML = "";
            nameErr = false;
        }
    }

    if(mobile == "") {
        mobileErr.innerHTML = "Это обязательное поле";
    } else {
        var regex = /^[+()]*[0-9][- +()0-9]*$/;
        if(regex.test(mobile) === false) {
            mobileErr.innerHTML = "Телефон введён некорректно";
        } else{
            mobileErr.innerHTML = "";
            mobileErr = false;
        }
    }

    if(email == "") {
        emailErr.innerHTML = "Это обязательное поле";
    } else {
        var regex = /[a-zA-Z0-9._%+-]+@[a-zA-Zа-яА-ЯёЁ0-9-]+\.[a-zA-Zа-яА-ЯёЁ]{2,}$/;
        if(regex.test(email) === false) {
            emailErr.innerHTML = "Email введён некорректно";
        } else{
            emailErr.innerHTML = "";
            emailErr = false;
        }
    }
};

}