const data = JSON.parse(localStorage.getItem("temp"));
const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
const cart = JSON.parse(localStorage.getItem("cart")) || [];


console.log(data[0]);
const name = data[0].name;
document.querySelector('title').innerText = `${name}'s List | My Lists | Walmart.com`

console.log(wishlist);

function calculateSum() {
    let sum = 0;

    wishlist.map((element, index) => {

        // let quantity = element.quantity;
        // console.log(quantity);
        let amount = +(element.price * element.quantity);
        sum += amount;

        console.log(sum);


    })
    return sum;
}





document.getElementById('amount').innerText = calculateSum().toFixed(2);

document.getElementById('namelist').innerText = `${name}'s List`;
document.getElementById('lengthlist').innerText = `${wishlist.length} items`;


console.log(wishlist);

displayData(wishlist)

function displayData(wishlist) {



    document.getElementById('lower-div').innerHTML = null;

    document.getElementById('amount').innerText = calculateSum().toFixed(2);

    if (wishlist.length === 0) {
        document.getElementById('lengthlist').innerText = `${0} items`;
        const div = document.createElement('div');
        div.innerHTML = ` <video width="440px" loop="true" autoplay="autoplay" >
        <source src="https://cdn.dribbble.com/users/2063647/screenshots/10500595/media/2959b8af671e3b452b75c485c49c47c5.mp4" type="video/mp4" />
       
        </video>`;

        document.getElementById('emptywishlist-div').append(div);
        document.getElementById('emptywishlist-div').addEventListener('click', gotoIndex);

        function gotoIndex() {

            window.location.href = "index.html";
        }

    } else {
        document.getElementById('lengthlist').innerText = `${wishlist.length} items`;

    }
    wishlist.map((element, index) => {

        const childdiv = document.createElement('div');

        const childdiv1 = document.createElement('div');

        const childdiv10 = document.createElement('div');

        const image = document.createElement("img");

        image.src = element.image;
        image.alt = element.title;

        childdiv10.append(image);


        const childdiv11 = document.createElement('div');

        const childdiv110 = document.createElement('div');
        childdiv110.setAttribute('id', 'childdiv110');



        const span1 = document.createElement("span");
        span1.setAttribute('id', 'title-span');
        span1.innerText = element.title;

        const span10 = document.createElement("span");
        span10.setAttribute('id', 'span10');
        span10.innerText = element.category;

        childdiv110.append(span1, span10);

        const span2 = document.createElement("span");
        span2.innerText = `$ ${element.price}`;
        span2.style = 'font-weight:900';


        childdiv11.append(childdiv110, span2);

        childdiv1.append(childdiv10, childdiv11);


        const childdiv2 = document.createElement('div');

        const childdiv20 = document.createElement('div');

        const remove = document.createElement('button');
        remove.innerText = 'Remove';
        remove.setAttribute('id', 'remove');

        remove.addEventListener('click', removeItem);

        function removeItem() {
            console.log('hi');
            wishlist.splice(index, 1);
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
            displayData(wishlist);
            // alert("Item Deleted Successfully");
        }



        childdiv20.append(remove);

        const childdiv21 = document.createElement('div');

        const childdiv210 = document.createElement('div');

        const span3 = document.createElement('span');
        span3.innerText = 'Need:';

        const input = document.createElement('input');
        input.type = 'number';
        // input.value = 1;
        input.value = element.quantity;
        console.log(element.quantity);



        input.setAttribute('id', 'need')




        input.addEventListener('change', (event) => {
            console.log(event.target.value);

            changeQuantity(event);
        });

        function changeQuantity(event) {




            var quantity = +event.target.value;
            console.log(quantity);
            console.log(typeof(quantity));

            if (quantity === 0) {
                removeItem();
                displayData(wishlist);
            } else {
                console.log(index);
                wishlist[index].quantity = quantity;

                localStorage.setItem('wishlist', JSON.stringify(wishlist));
                displayData(wishlist);
            }







        }

        childdiv210.append(span3, input);

        const childdiv211 = document.createElement('div');

        const addtocart = document.createElement('button');
        addtocart.setAttribute('id', 'addtocart');
        addtocart.innerText = "Add to cart";

        addtocart.addEventListener('click', addToCart);

        function addToCart() {

            console.log("hi");
            const data = wishlist.splice(index, 1);
            console.log(data[0]);
            cart.push(data[0]);
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
            localStorage.setItem('cart', JSON.stringify(cart));
            displayData(wishlist);

        }

        document.getElementById('totaladdtocartbtn').addEventListener('click', addAllToCart);


        function addAllToCart() {

            let cartofAll = JSON.parse(localStorage.getItem("cart")) || [];
            let wishlistofwhole = JSON.parse(localStorage.getItem("wishlist")) || [];
            for (let i = 0; i < wishlistofwhole.length; i++) {
                cartofAll.push(wishlistofwhole[i])
            }
            localStorage.setItem('cart', JSON.stringify(cartofAll));
            localStorage.removeItem('wishlist');
            // displayData(wishlist);
            location.reload();

            // console.log("hi");

        }



        childdiv211.append(addtocart);

        childdiv21.append(childdiv210, childdiv211);

        childdiv2.append(childdiv20, childdiv21);

        childdiv.append(childdiv1, childdiv2);

        document.getElementById('lower-div').append(childdiv);














    })



}
// localStorage.removeItem('wishlist');
// localStorage.removeItem('cart');


