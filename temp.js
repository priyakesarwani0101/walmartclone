var temp = JSON.parse(localStorage.getItem("temp")) || [];

// var booked = JSON.parse(localStorage.getItem("boked"))||[];
var booked = [];

console.log(temp.length);
document.getElementById('logout').style.display = 'none';

if (temp.length !== 0 && temp[0].login === true) {

    document.getElementById('login').innerText = temp[0].name;
    document.getElementById('logout').style.display = 'inline';
    document.getElementById('logout').innerText = 'Logout';


}



document.getElementById('query').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const input = document.getElementById('query').value;
        const url = `https://masai-api.herokuapp.com/hotels/search?city=${input}`;
        fetchData(url);
    }
})

var Main_Data;

async function fetchData(url) {
    try {
        const data1 = await fetch(url);
        console.log(data1);
        const data2 = await data1.json();
        console.log(data2.hotels);
        Main_Data = data2.hotels;
        showHotels(data2.hotels)
    } catch (error) {
        console.log('City Not Found');
    }

}

function showHotels(data) {

    document.getElementById('hotels-list').innerHTML = null;
    data.map((element, index) => {
        console.log(element);

        const hoteldiv = document.createElement('div');
        hoteldiv.setAttribute('id', 'hotel');

        const image = document.createElement('img');
        image.src = element.Images.two;
        image.alt = element.Title;

        const title = document.createElement('h3');
        title.innerText = element.Title;

        const detaildiv = document.createElement('div');
        detaildiv.setAttribute('id', 'detail-div');

        const price = document.createElement('p');
        price.innerText = `₹ ${element.Price}`;

        const rating = document.createElement('p');
        rating.innerText = `☆ ${element.Rating}`;

        const ac = document.createElement('p');
        if (element.Ac === true) {
            ac.innerText = '· Ac';
            console.log(typeof(element.Ac));

        } else {
            ac.innerText = '· Non-Ac';

        }

        detaildiv.append(price, rating, ac);

        const book = document.createElement('button');
        book.setAttribute('class', 'book');
        book.innerText = 'Book Now';

        book.addEventListener('click', () => {
            bookNow();
        })

        function bookNow() {

            if (temp.length !== 0 && temp[0].login === true) {

                let bookeddata = {
                    image: element.Images.two,
                    title: element.Title,
                    price: element.Price,
                    rating: element.Rating,
                    Ac: element.Ac,






                }
                booked.push(bookeddata);
                localStorage.setItem("booked", JSON.stringify(booked));

                location.href = './checkout.html'
            } else {
                alert('Log In to continue!');
            }

        }






        hoteldiv.append(image, title, detaildiv, book);

        document.getElementById('hotels-list').append(hoteldiv);





    })
}



document.getElementById('sort_lth').addEventListener('click', () => {
    sortToHigh(Main_Data)
});


function sortToHigh(data) {

    data.sort((a, b) => {
        return a.Price - b.Price;
    })

    showHotels(data)

}


document.getElementById('sort_htl').addEventListener('click', () => {
    highTosort(Main_Data)
});


function highTosort(data) {

    data.sort((a, b) => {
        return b.Price - a.Price;
    })

    showHotels(data)

}

document.getElementById('filter_ac').addEventListener('click', () => {
    filterAc(Main_Data)
});


function filterAc(data) {

    let filter = data.filter((element, index) => {

        return element.Ac === true;

    })
    showHotels(filter);



}

document.getElementById('filter_nonac').addEventListener('click', () => {
    filterNonAc(Main_Data);
});


function filterNonAc(data) {

    let filter = data.filter((element, index) => {

        return element.Ac === false;

    })
    showHotels(filter);



}

document.getElementById('logout').addEventListener('click', logOutMe);

function logOutMe() {
    alert('Logout Successfull');
    location.reload();
    localStorage.removeItem('temp')
}