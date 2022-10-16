document.querySelector('form').addEventListener('submit', fetchData);

async function fetchData() {



    const response = await fetch(`https://walmart-projrct.herokuapp.com/data`);
    console.log(response);
    const data = await response.json();
    console.log(data);
    checkData(data)

    console.log("Hi");

}

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

    let name;

    data.map((element, index, array) => {
        if (array.length !== 0 && element.email === email) {
            flag = true;

            name = element.firstname;
        }

    })

    if (flag) {

        let data = [];

        const detail = {
            name: name,
            email: email
        }

        data.push(detail);

        localStorage.setItem('temp', JSON.stringify(data));


        location.href = "./Enter Password.html"


    } else {
        location.href = "./signup.html";

    }

}