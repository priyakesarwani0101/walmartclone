function navbar(){

   return ` <div class="mainJaggu">
    <div id="navbar">
        <div id="walmart_imgJaggu">
            <a href="../pages/index.html"><img id="walmart_logoJaggu"
                    src="https://logos-download.com/wp-content/uploads/2016/02/Walmart_logo_transparent_png_blue.png"
                  width="120px" height="50px"  alt=""></a>
        </div>
        <div id="div_dep">
            <div class="dropDown">
                <button id="btn_department">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-grid" viewBox="0 0 16 16">
                        <path
                            d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z" />
                    </svg>
                    Departments
                </button>
                <div class="dropdown-content">
                    <ul>
                        <a href="#">Savings & Featured Shops</a>
                        <a href="#">Featured Brands</a>
                        <a href="../pages/product_page.html">Grocery</a>
                        <a href="../pages/product_page.html">Electronics</a>
                        <a href="#">Clothing, Shoes & Accessories</a>
                        <a href="#">Home, Furniture & Appliances</a>
                        <a href="#">Toys & Video Games</a>
                        <a href="#">Home Improvement</a>
                        <a href="">Office & School Supplies</a>
                        <a href="">Baby</a>
                        <a href="">Patio & Garden</a>
                        <a href="#">Household Essentials</a>
                        <a href="">Beauty</a>
                        <a href="">Personal Care</a>
                        <a href="">Pharmacy, Health & Wellness</a>
                    </ul>
                </div>
            </div>
        </div>

        <div id="div_service">
            <div class="dropDown">
                <button id="btn_service">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-ui-radios-grid" viewBox="0 0 16 16">
                        <path
                            d="M3.5 15a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm9-9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm0 9a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zM16 3.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0zm-9 9a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0zm5.5 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zm-9-11a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 2a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                    </svg>
                    Services
                </button>
                <div class="dropdown-content">
                    <a href="#">Auto Care Center Services</a>
                    <a href="#">Health & Wellness</a>
                    <a href="#"> Registry, Lists, & Gifts</a>
                    <a href="">Custom Cakes</a>
                    <a href="">Photo Services</a>
                    <a href="">Financial Services</a>
                    <a href="">Protection, Home, & Tech</a>
                    <a href="">Get Inspired</a>
                    <a href="">Community & Giving</a>
                </div>
            </div>
        </div>


        <div id="div_search">
            <input oninput="debouncing()"  id="nav_searchbar" type="search"  placeholder="Search everything at Walmart online and in store..."
               >
        </div>
        <div id="search_svgDiv"> <svg xmlns="http://www.w3.org/2000/svg" width="27" id="search_svg" height="18"
                id="search_svg" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path
                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
        </div>


        <div id="div_items">
            <div class="dropDown">
                <button id="btn_itemJaggu">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" id="heart_svg"
                        fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                        <path
                            d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                    </svg>
                    <div style="margin-top:9px; padding:5px;">
                        My Items
                    </div>
                </button>
                <div class="dropdown-content1">
                    <a href="#">📥 Reorder</a>
                    <a href="../pages/wishlist.html">💝 Lists</a>
                    <a href="#">🎁 Registries</a>
                </div>
            </div>
        </div>


        <div id="div_acc">
            <div class="dropDown">
                <button id="btn_signin" style="width:110px ;">
                
                    
                    

                    <div id='freshaccount-div'  style="margin-top:7px; padding:5px;">
                    <p>sign In</p>
                        
                        Account
                       
                    </div>
                    <div id='accountholder-div'>
                    <svg id="jaggu-image-after-login" xmlns="http://www.w3.org/2000/svg" width="25" id="person_svg" height="28"
                    fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                    <path
                        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                </svg>
                <div> <p id='accountholder'></p> </div>
                   
                    </div>
                </button>
                <div id="userDropDownModal"class="dropdown-content1">
                    <section id="inner_section">
                        <a href="../pages/SigninEmail.html"><button id="inner_signBtn"> Sign In</button></a>
                        <a href="../pages/signup.html"><button id="inner_signBtn"> Create Acc</button></a>
                    </section>
                </div>
            </div>
        </div>

        <div id="div_cart">
            <a href="../pages/cart.html">
            <button id="btn_cart" >
            <div id="g-cart-length"><span id='cart-length'></span></div>
            
            <svg  xmlns="http://www.w3.org/2000/svg" id="cart_svg" width="30" height="40" fill="currentColor"
                class="bi bi-cart3" viewBox="0 0 16 16">
                <path
                    d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
            
        </button>
            </a>

            
        </div>
        <br>
    </div>

     <hr>

    <div class="downNavbar">

        <div class="rightDiv">
            <div id="location">
                <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-ad46/k2-_0a671c38-d307-447c-835e-7904ab143c26.v1.png"
                    width="40" height="40" style="padding-left:4px;" alt="">
                <div class="dropDown">

                    <button id="rightBtnJaggu" >
                        How do you want your items?
                    </button>
                    <div class="dropdown-content2">
                        <div id="location_div_img">
                            <div> <img
                                    src="https://i5.walmartimages.com/dfw/4ff9c6c9-486e/k2-_4be6f532-b0b2-4480-bb65-d53586e87193.v1.png"
                                    width="50" height="50" alt=""></div>
                            <div> <img
                                    src="	https://i5.walmartimages.com/dfw/4ff9c6c9-944a/k2-_333618e2-7327-4081-990e-7870dd062248.v1.png"
                                    width="50" height="50" alt=""></div>
                            <div> <img
                                    src="	https://i5.walmartimages.com/dfw/4ff9c6c9-4637/k2-_c8d39665-dac4-474a-9fb7-ab5feeb647b5.v1.png"
                                    width="50" height="50" alt=""></div>
                        </div>
                        <div id="location_btn">
                            <div>Shipping</div>
                            <div>PickUp</div>
                            <div>Delivery</div>
                        </div>
                        <div id="location_finding">
                            <br>
                            <div><img src="	https://i5.walmartimages.com/dfw/4ff9c6c9-5249/k2-_71d3c250-050a-40b0-8fd7-c84c1df83204.v1.png" width="16" height="16" alt="">
                                <span id="span_font">Add an address for shipping and delivery</span>
                                <br>
                                <span> Sacramento, CA 95829</span>
                                <br>
                                <button id="btn_find_loc">Add Address</button>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
            <div id="display_location_span">
                <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-40c5/k2-_f5224bb5-3493-47da-a046-7f816ac1730e.v1.png"  width="16" height="16" alt="">
                <span>Sacramento, 95829</span>
                <img src="	https://i5.walmartimages.com/dfw/4ff9c6c9-cc5a/k2-_cb966ffb-2cf6-4a8d-869c-27d99919cb16.v1.png"  width="16" height="16"  alt="">
                <span>Sacramento </span>
            </div>
        </div>

        <div class="leftDiv">
            <a href="#">Grocery & essentials</a>
            <a href="#">Flu shots & remedies</a>
            <a href="#"> Apparel</a>
            <a href="#">Home</a>
            <a href="#"> Top Toys List</a>
            <a href="#"> For Business</a>
           
           
        </div>
    </div>

</div>
`

}


export default navbar;

// var temp = JSON.parse(localStorage.getItem("temp")) || [];
// document.getElementById('accountholder-div').style.display = 'none';

// if (temp.length !== 0 && temp[0].login === true) {
//     document.getElementById('accountholder-div').style.display = 'block';

//     document.getElementById('accountholder').innerText = temp[0].name;
//     document.getElementById('freshaccount-div').style.display = 'none';
//     // freshaccount-div
//     // document.getElementById('logout').innerText = 'Logout';


// }
















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
  
let debouncing=debounce(searchData,2000)

window.debouncing=debouncing;
function searchData(){
 console.log("hello")
    var productItem=document.getElementById("nav_searchbar").value;
   if(productItem=="electronics"){
   
    window.location.href="searchItemDisplay.html"
   }
   else if(productItem== "groceries"){
    //  console.log(men)
     window.location.href="product_page.html"
    }
    // else if(men=== "kids"){
    //  console.log(men)
    //  window.location.href="Kids.html"
    // }
    // else if(men=== "kitchen"){
    //  console.log(men)
    //  window.location.href="Kitchen.html"
    // }
    document.getElementById("nav_searchbar").value=""
 
 }



