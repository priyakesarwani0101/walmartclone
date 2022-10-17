document.getElementById('show-error').style.display = 'none';
document.getElementById('show-successful').style.display = 'none';



const data = JSON.parse(localStorage.getItem("temp"));
console.log(data[0]);
const email = data[0].email
document.getElementById("getmail").innerText = email;




document.querySelector('form').addEventListener("submit", fetchData);

async function fetchData() {

    event.preventDefault();

    const response = await fetch(`https://walmart-projrct.herokuapp.com/data`);
    console.log(response);
    const data = await response.json();
    console.log(data);
    checkData(data)

    console.log("Hi");

}


document.getElementById('forgotpassword').addEventListener('click', forgotPassword);
document.getElementById('resetpass').addEventListener('click', forgotPassword);


function forgotPassword() {

    document.getElementById('forgotpasswordmsg').innerText = `Verification link has been sent to your registered email`;
    document.getElementById('forgotmail').innerText = email;
    setTimeout(() => {
        location.href = "./Enter Password.html";
    }, 2000);



}

function checkData(data) {
    console.log(data);
    const password = document.getElementById('password').value;

    let flag = false;



    data.map((element, index, array) => {

        // console.log(password);
        // console.log(element.password);


        // console.log(email);
        // console.log(element.email);



        if (password === element.password && email === element.email) {
            flag = true;
        }

    })

    console.log(flag);

    if (flag) {

        document.getElementById('show-error').style.display = 'none';
        document.getElementById('show-successful').style.display = 'block';

        setTimeout(() => {
            window.location.href = "../index.html";
        }, 2000);





    } else {
        document.getElementById('show-successful').style.display = 'none';
        document.getElementById('show-error').style.display = 'block';


    }

}









document.getElementById('show-message').style.display = 'none';

document.getElementById("showpassword").addEventListener("click", showPassword);

function showPassword() {

    const pass = document.getElementById("password");
    const show = document.getElementById('showpassword');


    if (pass.getAttribute("type") === "password") {
        pass.setAttribute("type", "text");

        show.innerText = 'Hide';
    } else {
        pass.setAttribute("type", "password");
        show.innerText = 'Show';
    }

}


document.getElementById('extractmessage').addEventListener('click', spreadmessage);

function spreadmessage() {

    const message = document.getElementById('extractmessage');
    if (message.innerText === 'More') {
        document.getElementById('show-message').style.display = 'block';
        message.innerText = 'Hide'
    } else {
        document.getElementById('show-message').style.display = 'none';
        message.innerText = 'More'
    }
}

