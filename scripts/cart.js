    import navbar from "../component/navbar.js";
    document.getElementById("navbar").innerHTML = navbar();
    var temp = JSON.parse(localStorage.getItem("temp")) || [];
console.log(temp);
document.getElementById('accountholder-div').style.display = 'none';

if (temp.length !== 0 && temp[0].login === true) {
    document.getElementById('accountholder-div').style.display = 'block';

    document.getElementById('accountholder').innerText = temp[0].name;
    document.getElementById('freshaccount-div').style.display = 'none';
    // freshaccount-div
    // document.getElementById('logout').innerText = 'Logout';


}


const carttemp= JSON.parse(localStorage.getItem("cart")) || [];

console.log(carttemp.length);
document.getElementById('cart-length').innerText=carttemp.length;


let items = JSON.parse(localStorage.getItem("cart")) || [];
console.log(items);

if(items.length==0){
    window.location.href = "./emptycart.html"
}

let totalAmount = 0;
calculateTotalCartAmount();
// for(let i =0;i<items.length;i++){
//     totalAmount += items[i].quantity*items[i].price;
// }

// document.getElementById('total_amount').innerText = `$ ${totalAmount}`
//   document.getElementById('total').innerText = `$ ${totalAmount}`


let displayCartData = (arr)=>{
document.getElementById("cart_items").innerText = "";
arr.map((el,index)=>{
    console.log(el)
    let div = document.createElement("div");
    div.className = "item_data";
    let imgDiv = document.createElement("div");
    let image = document.createElement("img");
    image.src = el.image;
    image.alt = el.title;
    imgDiv.append(image);
    let productDiv = document.createElement("div");
    productDiv.id = "productDiv";
    let name = document.createElement("h4");
    name.innerText = el.title;
    name.style.color = "black"
    let price = document.createElement("p");
     price.innerText = `$ ${el.quantity*el.price}`;
     price.style.paddingTop = "20px";
    
    productDiv.append(name,price);
    let divBox = document.createElement("div");
    let divContainer = document.createElement("div");
    divContainer.className = "divContainer";
    let decre = document.createElement("button");
    decre.innerText = "-";
    decre.style.border = "1px solid #d5d7db"
    decre.addEventListener("click",()=>{
        el.quantity = decrementValue(index,el.quantity);
        quantity.value = el.quantity;
        price.innerText = `$ ${(el.quantity*el.price).toFixed(2)}`;
        localStorage.setItem("cart",JSON.stringify(items));
        calculateTotalCartAmount();
    });
    let quantity = document.createElement("input");
    quantity.value =el.quantity;
     quantity.style.width = "15%";
     quantity.style.border = "1px solid #d5d7db"

     let incre = document.createElement("button");
    incre.innerText = "+"
    incre.style.border = "1px solid #d5d7db";
    incre.addEventListener("click",()=>{
        el.quantity =  incrementValue(index,el.quantity);
        quantity.value = el.quantity
        price.innerText = `$ ${(el.quantity*el.price).toFixed(2)}`;
        localStorage.setItem("cart",JSON.stringify(items));
        calculateTotalCartAmount();
    });
      divContainer.style.margin = "10%"
    divContainer.append(decre,quantity,incre);

     let remove = document.createElement("button");
     remove.id = "remove_btn";
     remove.innerText = "Delete from Cart";
    
    remove.addEventListener("click",function(){
        dltFromCart(index);
    });
    divBox.append(divContainer,remove);
    div.append(imgDiv,productDiv,divBox);
    document.getElementById("cart_items").append(div);
})
}

displayCartData(items);

function dltFromCart(index){
    items.splice(index,1);
    localStorage.setItem("cart",JSON.stringify(items));
     calculateTotalCartAmount()

    displayCartData(items);
}

function decrementValue(index, itemQuantity){
    --itemQuantity;
    if(itemQuantity===0){
        items.splice(index,1);
        localStorage.setItem("cart",JSON.stringify(items));
        displayCartData(items);
    }
    return itemQuantity;
  }

  function incrementValue(index, itemQuantity){
    return ++itemQuantity;
  }

  function calculateTotalCartAmount(){
    totalAmount=0;
    let cart = JSON.parse(localStorage.getItem("cart"))
    document.getElementById('cart-length').innerText = cart.length;
    cart.forEach(element => {
    totalAmount+=element.quantity*+element.price
  });

  document.getElementById('total_amount').innerText = `$ ${(totalAmount).toFixed(2)}`
  document.getElementById('total').innerText = `$ ${(totalAmount).toFixed(2)}`
  }

  document.getElementById('coupon_btn').addEventListener("click",function(){
    applyCoupon()
  })

  let couponApplied = false;

  function applyCoupon(){
    let couponCode = document.getElementById('Coupon_Code').value
    if(couponApplied==true){
        alert("Coupon already applied");
    }
    if(couponCode=="masai30"&&couponApplied==false){
        totalAmount=totalAmount - ((totalAmount/100)*30);
    }else if(couponCode == "firstuser"&&couponApplied==false){
        totalAmount=totalAmount-50;
    }
    couponApplied=true;
    document.getElementById('total_amount').innerText = `$ ${(totalAmount).toFixed(2)}`
  document.getElementById('total').innerText = `$ ${(totalAmount).toFixed(2)}`
  }


  document.getElementById("checkout").addEventListener("click",()=>{
    window.location.href = "checkout.html";
  })