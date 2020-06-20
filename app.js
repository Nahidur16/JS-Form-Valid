/***
 * 
 * /////////////METHOD 1//////////////

const form = document.getElementById('form');

const email = document.getElementById('email');
const username = document.getElementById('username');
const password = document.getElementById('password');
const checkPass = document.getElementById('password2');
//////functions



/////////////////////////SHOWERROR
function showError(input, msg) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';

    const small = formControl.querySelector('small');
    small.innerText = msg;

}
////////////SHOWSUCCESS
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
///////////EMAIL CHEKER///
function validEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}






/////////////EVENT LISTENER
form.addEventListener('submit', (e) => {
    e.preventDefault();
    //console.log('submit');
    //name
    if (username.value === '') {
        showError(username, 'Username Needed');
    } else {
        showSuccess(username);
    }
    /////email

    if (email.value === '') {
        showError(email, 'Email Needed');
    } else if (!validEmail(email.value)) {
        showError(email, 'Not valid Email');
    } else {
        showSuccess(email);
    }
    ///password
    if (password.value === '') {
        showError(password, 'Password Needed');
    } else {
        showSuccess(password);
    }
    ////confirm passs
    if (checkPass.value === '') {
        showError(checkPass, 'Confirm password');
    } else {
        showSuccess(checkPass);
    }
});
 */




/////////////////////METHOD 2///////////////////




const form = document.getElementById('form');

const email = document.getElementById('email');
const username = document.getElementById('username');
const password = document.getElementById('password');
const checkPass = document.getElementById('password2');







/////////////SHOW ERROR
function showError(input, msg) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';

    const small = formControl.querySelector('small');
    small.innerText = msg;

}
////////////SHOWSUCCESS
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

///////////EMAIL CHEKER///
function validEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, `Email is not valid`);
    }
}

/////////////////PASSWORD MATCH /PASSWORD CHEKER////////////

function passwordChecker(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, `Passwords don't match`);
    }
}




/////CHECK FIELDNAME/
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


////////CHECK REQUIRED
function checkRequired(inputArr) {
    inputArr.forEach((input) => {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
}
///////////////CHECK LENHTI//////////


function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be at least ${max} characters`);
    }


}


////////////////MOTHER OF ALL/////////////
form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkRequired([username, email, password, checkPass]);
    checkLength(username, 3, 25);
    checkLength(password, 6, 10);
    validEmail(email);
    passwordChecker(password, checkPass);
});