

let Products = [];
console.log(Products);
async function getdata() {
  console.log("getdata");

  let url = "https://walmart-products-gopal.herokuapp.com/groceries"
  let res = await fetch(url);
  let res2 = await res.json();
  Products = res2
  // console.log(Products);
  showProducts(Products)
  document.getElementById("sortproducts").addEventListener("click", handlePriceSort)
  function handlePriceSort(){
    var selected= document.getElementById("sortproducts").value;
       if(selected==="htl"){
      Products.sort(function(a,b){
        return b.price- a.price;
       
      });
      showProducts(Products);
     } 
     if(selected==="lth"){
      Products.sort(function(a,b){
        return a.price-b.price;
        
      });
      showProducts(Products);
    }
     if(selected=="relevance"){
      showProducts(Products);
     
  }
   
  


}
}
getdata();

document.getElementById("g-coffee").addEventListener("click", () => {
  let data = Products.filter((elem) => {
    return elem.category == "cofee";
  });

  showProducts(data);
  document.getElementById("sortproducts").addEventListener("click", handlePriceSort)
  function handlePriceSort(){
    var selected= document.getElementById("sortproducts").value;
       if(selected==="htl"){
      data.sort(function(a,b){
        return b.price- a.price;
      });
     }
  if(selected==="lth"){
    data.sort(function(a,b){
      return a.price-b.price;
    });
  }


showProducts(data);
}
});

document.getElementById("g-freshfood").addEventListener("click", () => {
  let data = Products.filter((elem) => {
    return elem.category == "fresh produce";
  });

  showProducts(data);
  document.getElementById("sortproducts").addEventListener("click", handlePriceSort)
  function handlePriceSort(){
    var selected= document.getElementById("sortproducts").value;
       if(selected==="htl"){
      data.sort(function(a,b){
        return b.price- a.price;
      });
     }
  if(selected==="lth"){
    data.sort(function(a,b){
      return a.price-b.price;
    });
  }


showProducts(data);
}
});

document.getElementById("g-meat").addEventListener("click", () => {
  let data = Products.filter((elem) => {
    return elem.category == "Meat & Seafood";
  });

  showProducts(data);
  document.getElementById("sortproducts").addEventListener("click", handlePriceSort)
  function handlePriceSort(){
    var selected= document.getElementById("sortproducts").value;
       if(selected==="htl"){
      data.sort(function(a,b){
        return b.price- a.price;
      });
     }
  if(selected==="lth"){
    data.sort(function(a,b){
      return a.price-b.price;
    });
  }


showProducts(data);
}
});

document.getElementById("g-snaks").addEventListener("click", () => {
  let data = Products.filter((elem) => {
    return elem.category == "Snacks";

  });

  showProducts(data);
  document.getElementById("sortproducts").addEventListener("click", handlePriceSort)
  function handlePriceSort(){
    var selected= document.getElementById("sortproducts").value;
       if(selected==="htl"){
      data.sort(function(a,b){
        return b.price- a.price;
      });
     }
  if(selected==="lth"){
    data.sort(function(a,b){
      return a.price-b.price;
    });
  }


showProducts(data);
}
  })


document.getElementById("candy").addEventListener("click", () => {
  let data = Products.filter((elem) => {
    return elem.category == "Halloween food and candy";
  });

  showProducts(data);
  console.log(data);

  document.getElementById("sortproducts").addEventListener("click", handlePriceSort)
  function handlePriceSort(){
    var selected= document.getElementById("sortproducts").value;
       if(selected==="htl"){
      data.sort(function(a,b){
        return b.price- a.price;
      });
     }
  if(selected==="lth"){
    data.sort(function(a,b){
      return a.price-b.price;
    });
  }


showProducts(data);
}


  });
 

let main = document.getElementById("lower");
function showProducts(data) {
  main.innerHTML = "";
  data.forEach((product, index) => {
    const { id, image, title, price, category } = product;
    const parentEl = document.createElement("div");
    parentEl.setAttribute("id", "g-products_tab");
    parentEl.innerHTML = `
      <div  id="g-img-main-div">
      <div id="g-image-div">
        <img id="g-img" src="${image}" alt="">

     </div>
      <div onclick="addToWishList(${index})" id="wish-button-div">
    <img id="g-heart-image" src="https://t4.ftcdn.net/jpg/02/59/94/23/360_F_259942375_MICoy5xhFf02fsQv8MQUCMBbDnu1FeeR.webp"  alt="">
        </div>
      
    </div>
    
        <div id="cart-button-div">
            <button onclick="addToCart(${index})"   id="g-cart-button">+ADD</button>
        </div>
        

   

    <div id="g-price-div">
        <p>$${price}</p>
    </div>

    <div id="g-title-div">
        <p onclick="getproduct(${id})">${title}</p>
    </div>
            `;
    main.appendChild(parentEl);
  });
}


function addToCart(index) {

  var cartArray = JSON.parse(localStorage.getItem("cart")) || [];
    if(cartArray.find((el)=>el.id===Products[index].id)){
      alert("Item is already added in cart");
    }else{
      cartArray.push(Products[index]);
    }

  
    // document.getElementById("g-cart-length").innerText=cartArray.length;  

  localStorage.setItem("cart", JSON.stringify(cartArray))
  location.reload();
}

// document.getElementById("g-cart-length").innerText=cartArray.length; 

function addToWishList(i){
var WishArray = JSON.parse(localStorage.getItem("wishlist")) || [];


if(WishArray.find((el)=>el.id===Products[i].id)){
  alert("Item is already in list");
}else{
  WishArray.push(Products[i]);
}
 
 
  


  localStorage.setItem("wishlist", JSON.stringify(WishArray))
}

function debounce(fn,delay){
  let timerId;
  return function(){
      if (timerId){
          clearTimeout(timerId)
      }
         timerId= setTimeout(function(){
              fn();
          },delay);
      
      
  }
}

async function searchdata(){
  let search = document.getElementById("searchinput")
 const searchItem = search.value;
 let url= `https://walmart-products-gopal.herokuapp.com/${searchItem}`
        let res= await fetch(url);
        let res2= await res.json();
        showProducts(res2);
        console.log(res2);

 }

 let debouncefunction = debounce(searchdata,3000)


 function getproduct(id){
  let url= `https://walmart-products-gopal.herokuapp.com/groceries/${id}`

fetch(url).then(function(res){
return res.json();
}).then(function(res2){
console.log(res2);

localStorage.setItem("product", JSON.stringify(res2));
  window.location.href="../pages/single_product.html"
})
}









