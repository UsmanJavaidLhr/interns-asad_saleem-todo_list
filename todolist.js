document.addEventListener('DOMContentLoaded', () => {
    homePage();

    // localStorage.setItem('asadsaleem445@gmail.com', JSON.stringify(userData))
    // listName = (JSON.parse(localStorage.getItem(userData)))
    // let dashtable = document.getElementById('dash-table')
    // let row = document.createElement('tr')
    // let col1 = document.createElement('td')
    // col1.innerText = '2'
    // row.appendChild(col1)
    // console.log(col1)
    // let col2 = document.createElement('td')
    // col2.innerText = 'My First List'
    // row.appendChild(col2)
    // console.log(col2)
    // let col3 = document.createElement('td')
    // row.appendChild(col3)
    // var x = document.createElement("BUTTON");
    // var y = document.createTextNode("Edit");
    // var z1 = document.createElement("BUTTON");
    // var z = document.createTextNode("Remove");

    // x.appendChild(y);
    // z1.appendChild(z);
    // document.body.appendChild(x);
    // document.body.appendChild(z1);
    // console.log(col3)
    // dashtable.appendChild(row)
    // console.log(row.innerHTML)
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
        "password": password,
        "lists": []
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
        login(email1.value, password1.value);
    });
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
function login(email, password) {
    console.log(email)
    var userData = localStorage.getItem(email);
    console.log(userData)
    userData = JSON.parse(userData);
    console.log(userData, userData != null && password == userData.password)
    if (userData != null && password == userData.password) {
        showNotice('User signed in successfully!', 10000)
        hideAllContainers();
        dashboardPage(userData);
    } else {
        alert("email or password is incorrect")
    }



}
function dashboardPage(userData) {
    let dashboard = document.getElementById('dashboard-page')
    dashboard.classList.remove('d-none')
    console.log("lists", userData.lists)
    if (userData.lists != undefined && userData.lists.length > 0) {
        let dashboardTable = document.getElementById('dash-table')
        dashboardTable.classList.remove('d-none')
        for (const list in userData.lists) {
            let row = document.createElement('tr')
            let col1 = document.createElement('td')
            col1.innerText = list + 1
            row.appendChild(col1)
            let col2 = document.createElement('td')
            col2.innerText = userData.lists[list].name;
            row.appendChild(col2)
            console.log(col2)
            let col3 = document.createElement('td')
            row.appendChild(col3)
            dashboardTable.appendChild(row)
            dashboardTable.addEventListener('click', (Event) => {
                if (Event.target.tagName === 'BUTTON') {
                    const button = Event.target;
                    const td = button.parentNode;
                    const dashboardTable = td.parentNode;
                    if (button.textcontent === 'remove') {
                        dashboardTable.removeChild(td);
                    }
                }
            })

        }
    } else {
        let dashMessage = document.getElementById('dash-message')
        dashMessage.classList.remove('d-none')

    }
}
function listPage(userData) {
    let taskCount = 0;
    let listsOfPage = document.getElementById('list-page')
    listsOfPage.classList.remove('d-none')
    // // if (userData.lists != undefined && userData.lists.length > 0) {
    // let listTable = document.getElementById('list-table')
    // listTable.classList.remove('d-none')
    // for (const list in userData.lists) {
    //     let row = document.createElement('tr')
    //     let col1 = document.createElement('td')
    //     col1.innerText = list + 1
    //     row.appendChild(col1)
    //     let col2 = document.createElement('td')
    //     col2.innerText = userData.lists[list].name;
    //     row.appendChild(col2)
    //     console.log(col2)
    //     let col3 = document.createElement('td')
    //     row.appendChild(col3)
    //     listTable.appendChild(row)
    //     listTable.addEventListener('click', (Event) => {
    //         if (Event.target.tagName === 'BUTTON') {
    //             const button = Event.target;
    //             const td = button.parentNode;
    //             const listTable = td.parentNode;
    //             if (button.textcontent === 'remove') {
    //                 listTable.removeChild(td);
    //             }
    //         }
    //     })
    // }
    // // }
    const addNewTaskButton = document.querySelector("#addNewTaskButton");
    addNewTaskButton.addEventListener("click", (e) => {
        e.preventDefault();
        taskCount++;
        let row = document.createElement('tr')
        let col1 = document.createElement('td')
        col1.innerText = taskCount + 1
        row.appendChild(col1)
        let col2 = document.createElement('td')
        col2.innerText = userData;
        row.appendChild(col2)
        console.log(col2)
        let col3 = document.createElement('td')
        row.appendChild(col3)
        row.appendChild(row)

    });
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
                    'desc': 'Do this and that and everything in between',
                    'status': 0
                },
                {
                    'desc': 'Do one more thing',
                    'status': 1
                }
            ]
        },
        {
            'name': 'My Second List',
            'tasks': [
                {
                    'desc': 'Take your car to car wash',
                    'status': 0
                },
                {
                    'desc': 'Wash cloths',
                    'status': 1
                }
            ]
        },
        {
            'name': 'My Thrid List',
            'tasks': [
                {
                    'desc': 'Take the dog for a walk',
                    'status': 1
                },
                {
                    'desc': 'Get some rest',
                    'status': 0
                }
            ]
        }
    ]
}