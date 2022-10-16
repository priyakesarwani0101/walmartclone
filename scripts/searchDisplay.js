//  document.getElementById("nav_searchbar").addEventListener("click",searchData)
function searchDataItem(){
    // let item=localStorage.getItem("SearchItemDisplay")
    let item = document.getElementById("nav_searchbar").value;
    document.getElementById("leftMain").textContent=""
    let url = `https://walmart-products-gopal.herokuapp.com/${item}`
    fetchData(url)
    
}
searchDataItem()

async function fetchData(url){
    try{
   let res = await fetch(url);
   let data = await res.json()
   console.log(data);
   dispalyData(data);
    }catch(error){
        console.log("Hello Error",error)
    }
}

function dispalyData(data){
    // console.log(data.title)
        data.forEach(ele=>{

            let div1=document.createElement("div")
            div1.id="div1"
            let div2=document.createElement("div")
            let img=document.createElement("img")
            img.src=ele.image;
            img.id="img"
            div2.append(img)
            let div3=document.createElement("div")
            let title=document.createElement("h5")
            title.id="title"
            title.innerText=ele.title;
            div3.append(title)
            let div4=document.createElement("div")
            let price=document.createElement("h3")
            price.id="price"
            price.innerText=`$ ${ ele.price}`
            div4.append(price)
            let div5=document.createElement("div")
            let addbtn=document.createElement("button")
            addbtn.innerText="+ Add"
            addbtn.id="addBtn"
            addbtn.addEventListener("click",(ele)=>{
                addItemToCart(ele);
            });
            div5.append(addbtn)
            let div6=document.createElement("div")
            div6.id="div6"

            div6.append(div4,div5)
div1.append(div2,div3,div6)
document.getElementById("leftMain").append(div1)
        })
    }
 