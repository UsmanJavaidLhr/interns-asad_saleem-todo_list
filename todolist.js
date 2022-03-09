document.addEventListener('DOMContentLoaded', () => {
    homePage();
})

function homePage() {
    const singUpButton = document.getElementById('signUpButtonHome')
    const logInButton = document.getElementById('LogInButtonHome')

    singUpButton.addEventListener('click', (e) => {
        e.preventDefault();
        hideAllContainers();
        signUpPage();
    })

    logInButton.addEventListener('click', (e) => {
        e.preventDefault();
        hideAllContainers();
        logInPage();
    })
}
function signUpPage() {
    document.getElementById('signUpBox').classList.remove('d-none');
    const signUpFormButton = document.getElementById('signUpFormButton');
    const firstName = document.querySelector("#firstName");
    const lastName = document.querySelector("#lastName");
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
    const verifyPassword = document.querySelector("#verifyPassword")
    signUpFormButton.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('signUpFormButton Pressed')
        console.log(cheakinputs())
        myFun1()
        myFun2()
    });
    function myFun1() {
        var correct_way = /^[A-Za-z\s]+$/;

        var a = document.getElementById("firstName").value
        if (a == "") {
            document.getElementById("Message`").innerHTML = "** please fill firstname";
            return false;
        }
        if (a.match(correct_way))
            true;
        else {
            document.getElementById("Message").innerHTML = "* Enter Alphabets in First Name";
            return false;
        }
    }
    function myFun2() {
        var correct_way1 = /^[A-Za-z\s]+$/;

        var b = document.getElementById("lastName").value
        if (b == "") {
            document.getElementById("Message1`").innerHTML = "** please fill firstname";
            return false;
        }
        if (b.match(correct_way1))
            true;
        else {
            document.getElementById("Message1").innerHTML = "* Enter Alphabets in Last Name";
            return false;
        }
    }
    function cheakinputs() {
        const firstNameVal = firstName.value;
        const lastNameVal = lastName.value;
        const emailVal = email.value;
        const passwordVal = password.value;
        const verifyPasswordVal = verifyPassword.value
        if (firstNameVal === '') {
            setErrorFor(firstName, 'first Name cannot be blank');

        } else {
            setSuccessFor(firstName);
        }
        if (lastNameVal === '') {
            setErrorFor(lastName, 'last Name cannot be blank')
        } else {
            setSuccessFor(lastName);
        }

        if (emailVal === '') {
            setErrorFor(email, 'Email cannot be blank');
        } else if (!isEmail(emailVal)) {
            setErrorFor(email, 'Not a valid email');
        } else {
            setSuccessFor(email);
        }

        if (passwordVal === '') {
            setErrorFor(password, 'Password cannot be blank');
        } else {
            setSuccessFor(password);
        }

        if (verifyPasswordVal === '') {
            setErrorFor(verifyPassword, 'verify Password cannot be blank');
        } else if (passwordVal !== verifyPasswordVal) {
            setErrorFor(verifyPassword, 'Passwords does not match');
        } else {
            setSuccessFor(verifyPassword);
        }
        function setErrorFor(input, message) {
            const formControl = input.parentElement;
            const small = formControl.querySelector('small');
            formControl.className = 'form-control error';
            small.innerText = message;
        }

        function setSuccessFor(input) {
            const formControl = input.parentElement;
            formControl.className = 'form-control success';
        }

        function isEmail(email) {
            return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
        }
        return [firstNameVal, lastNameVal, emailVal, passwordVal, verifyPasswordVal]

    }
}

function myFun3() {
    hideAllContainers();
    logInPage();
}
function myFun4() {
    hideAllContainers();
    signUpPage();
}
function passCheck(data) {
    var passClass = document.getElementById('passwordCheck')
    console.log(passClass)

    const min8 = new RegExp('(?=.{8,})')
    const lowerCase = new RegExp('(?=.*[a-z])')
    const upperCase = new RegExp('(?=.*[A-Z])')
    const number = new RegExp('(?=.*[0-9])')
    const specialChar = new RegExp('(?=.*[!@#\$%\^&\*])')
    if (min8.test(data)) {
        passClass.querySelector('#min8').style.color = "green";
    } else {
        passClass.querySelector('#min8').style.color = "grey";
    }
    if (lowerCase.test(data)) {
        passClass.querySelector('#lowerCase').style.color = "green";
    } else {
        passClass.querySelector('#lowerCase').style.color = "grey";
    }
    if (upperCase.test(data)) {
        passClass.querySelector('#upperCase').style.color = "green";
    } else {
        passClass.querySelector('#upperCase').style.color = "grey";
    }
    if (number.test(data)) {
        passClass.querySelector('#numeric').style.color = "green";
    } else {
        passClass.querySelector('#numeric').style.color = "grey";
    }
    if (specialChar.test(data)) {
        passClass.querySelector('#specialChar').style.color = "green";
    } else {
        passClass.querySelector('#specialChar').style.color = "grey";
    }
}

function signUp() {
    var firstName = document.getElementById("firstName").value
    var lastName = document.getElementById("lastName").value
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value

    var userData = {
        "first_name": firstName,
        "last_name": lastName,
        "password": password
    }

    localStorage.setItem(email, JSON.stringify(userData))
    signUpFormButton.addEventListener('click', (e) => {
        e.preventDefault();
        hideAllContainers();
        showNotice("Sign Up Successful!", 10000);
        logInPage();
    })
}

function logInPage() {
    document.getElementById('logInBox').classList.remove('d-none');
    const logInFormButton = document.getElementById('logInFormButton');
    const email1 = document.querySelector("#email1")
    const password1 = document.querySelector("#password1");
    logInFormButton.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('logInFormButton Pressed')
        console.log(cheakinputs())
    });
    function cheakinputs() {
        const email1Val = email1.value;
        const password1Val = password1.value;
        return [email1Val, password1Val]
    }
}

function hideAllContainers() {
    let containers = document.getElementsByClassName('container')

    for (const container of containers) {
        container.classList.add('d-none')
    }
}

function showNotice(msg, duration) {
    notice = document.getElementById("notice")
    notice.getElementsByTagName('h2')[0].innerText = msg
    notice.classList.remove('d-none')
    setTimeout(() => {
        notice.classList.add('d-none')
    }, duration)
}
function login() {
    var email = document.getElementById('email1').value;
    var password = document.getElementById('password1').value;

    var userData = localStorage.getItem(email);
    var userData = JSON.parse(userData);
    console.log(userData)
    if (userData && password == userData.password) {
        showNotice('User signed in successfully!', 10000)
    } else {
        alert("email or password is incorrect")
    }
    logInFormButton.addEventListener('click', (e) => {
        e.preventDefault();
        hideAllContainers();
        dashboardPage(userData);
    })

}
function dashboardPage(userData) {
    let dashboard = document.getElementById('dashboard-page')
    dashboard.classList.remove('d-none')
    if (userData.lists != undefined && userData.lists.length > 0) {
        let dashboardTable = document.getElementById('dash-table')
        dashboardTable.classList.remove('d-none')
    } else {
        let dashMessage = document.getElementById('dash-message')
        dashMessage.classList.remove('d-none')

    }



}

userData = {
    'first_name': 'Asad',
    'last_name': 'Saleem',
    'password': 'Asad@123',
    'lists': [
        {
            'name': 'My First List',
            'tasks': [
                {
                    'description': 'My first task',
                    'status': 0
                }
            ]
        }
    ]
}
