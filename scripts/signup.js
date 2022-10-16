document.getElementById('message').style.display = 'none';
document.getElementById('show-message').style.display = 'none';
document.getElementById('show-error').style.display = 'none';
document.getElementById('existemail').style.display = 'none';
document.getElementById('show-successful').style.display = 'none';




document.querySelector('form').addEventListener("submit", fetchData)







async function fetchData() {

    event.preventDefault();

    const response = await fetch(`https://walmart-projrct.herokuapp.com/data`);
    console.log(response);
    const data = await response.json();
    console.log(data);
    checkData(data)

    console.log("Hi");

}

function checkData(data) {
    const email = document.getElementById('email').value;

    let flag = false;

    data.map((element, index, array) => {
        if (array.length !== 0 && element.email === email) {
            flag = true;
        }

    })

    if (flag) {


        document.getElementById('show-error').style.display = 'block';
        document.getElementById('existemail').style.display = 'block';




    } else {
        sendData();
    }

}


async function sendData() {

    document.getElementById('show-error').style.display = 'none';
    document.getElementById('existemail').style.display = 'none';

    console.log();

    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;









    document.getElementById('show-successful').style.display = 'block';







    console.log(firstname, lastname, email, password);


    let data = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password
    }

    let send = fetch('https://walmart-projrct.herokuapp.com/data', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "content-type": "application/JSON"
        },
    });

    localStorage.removeItem("temp");
    document.querySelector('form').reset();

    setTimeout(() => {
        location.href = './SigninEmail.html';
    }, 2000);





}




// function patchData() {

//     console.log('data');
//     let data = {
//         firstname: "Shabbir",
//         lastname: "Yahya",
//         email: "shabbirkatlariwala@gmail.com",
//         password: "Sebyy@123"
//     }

//     fetch('https://walmart-projrct.herokuapp.com/data', {
//         method: "POST",
//         body: JSON.stringify(data),
//         headers: {
//             "content-type": "application/JSON"
//         },
//     });
// }

// patchData();
















document.getElementById("show").addEventListener("click", showPassword);


document.getElementById('extractmessage').addEventListener('click', spreadmessage);

function spreadmessage() {

    const message = document.getElementById('extractmessage');
    if (message.innerText === 'Show') {
        document.getElementById('show-message').style.display = 'block';
        message.innerText = 'Hide'
    } else {
        document.getElementById('show-message').style.display = 'none';
        message.innerText = 'Show'
    }
}

function showPassword() {

    const pass = document.getElementById("password");
    const show = document.getElementById('show');


    if (pass.getAttribute("type") === "password") {
        pass.setAttribute("type", "text");

        show.innerText = 'Hide';
    } else {
        pass.setAttribute("type", "password");
        show.innerText = 'Show';
    }

}



let letter = document.getElementById("letter");
let capital = document.getElementById("capital");
let number = document.getElementById("number");
let length = document.getElementById("length");



const pass = document.getElementById('password');
const pass1 = document.getElementById('show');

pass.onfocus = () => {
    document.getElementById("message").style.display = "block";
}

pass1.onfocus = () => {
    document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
pass.onblur = () => {
    document.getElementById("message").style.display = "none";
}

pass1.onblur = () => {
        document.getElementById("message").style.display = "none";
    }
    // When the user starts to type something inside the password field
pass.onkeyup = () => {

    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if (pass.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if (pass.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    // Validate numbers
    var numbers = /[0-9]/g;
    if (pass.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    // Validate length
    if (pass.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }




}
pass1.onkeyup = () => {

    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if (pass.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if (pass.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    // Validate numbers
    var numbers = /[0-9]/g;
    if (pass.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    // Validate length
    if (pass.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }




}

document.getElementById('signin').addEventListener('click', signin);

function signin() {
    location.href = './SigninEmail.html';
}



// async function deleteData() {

//     const deleteData = fetch(`https://walmart-projrct.herokuapp.com/data/2`, {
//         method: 'DELETE'
//     })

// }

// deleteData();