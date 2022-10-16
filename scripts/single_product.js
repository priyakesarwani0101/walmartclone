


let main= document.getElementById("g-container");
function showproduct() {
   main.innerHTML = "";
   let data= JSON.parse(localStorage.getItem("product"));
     const { id,image, title, price,category} = data;
 
     const productEl = document.createElement("div");
 
   //   movieEl.setAttribute("id", "movies_tab");
     productEl.innerHTML = `
     <div id="g-main-container">
     <div id="g-my-imagediv">
     <img id="g-my-product-image"
         src="${image}"
         alt="">
 </div>


 <div id="g-info-div">
     <p>${category}</p>
     <h1 id=g-my-title>${title}</h1>
     <h3 id="g-my-price">Now $${price}</h3>
     <p></p>
     <button onclick="addToBucket(${id})" id="g-my-cart-button">Add to cart</button>
     <div>

     </div>
     <div id="g-wish_list-div">
         <div id="g-add-to-list-div">
             <div onclick="addToW(${id})" > <img id="g-heart"
                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWs1h5qWVFepNVXx591cpucGwt7a13bfaoZQ&usqp=CAU"
                     alt=""> </div>
             <div id="add-to-list">Add to list</div>
         </div>
         <div></div>
     </div>
     
 </div>
 </div>
 
       
           `;
     main.appendChild(productEl);
   };


 showproduct();


async  function addToBucket(id){

  var mybucket = JSON.parse(localStorage.getItem("cart")) || [];

   let url= `https://walmart-products-gopal.herokuapp.com/groceries/${id}`
   let res= await fetch(url);
   let res2= await res.json();
   console.log(res2);
   if(mybucket.find((el)=>el.id===res2.id)){
    alert("Item is already added in cart");
  }else{
    mybucket.push(res2);
  }
  

  //  mybucket.push(res2)

   localStorage.setItem("cart", JSON.stringify(mybucket))


 }

 async  function addToW(id){

  var mybucket = JSON.parse(localStorage.getItem("wishlist")) || [];

   let url= `https://walmart-products-gopal.herokuapp.com/groceries/${id}`
   let res= await fetch(url);
   let res2= await res.json();
   console.log(res2);
   if(mybucket.find((el)=>el.id===res2.id)){
    alert("Item is already added in wishlist");
  }else{
    mybucket.push(res2);
  }
  

  //  mybucket.push(res2)

   localStorage.setItem("wishlist", JSON.stringify(mybucket))


 }