import {getdata} from "../component/getdata.js"

const fetchingdatafor_pick_of_the_day = async () =>{
    let res = await getdata('https://my-notso-cool-project.herokuapp.com/flash_pick_of_the_day');
    let data = res[1];
    document.getElementById("pick_of_the_day_img").src = data.image_url;
    document.getElementById("pick_of_the_day_price").innerHTML = `Now $${data.price}`;
    document.getElementById("pick_of_the_day_original_price").innerHTML = `$${data.original_price}`;
    document.getElementById("pick_of_the_day_title").innerText = data.title;
}

const fetchingdatafor_second_div_first = async () =>{
    let res = await getdata('https://my-notso-cool-project.herokuapp.com/popular_services');
    document.getElementById("second_div_first_second_second_first_img").src = res[0].image_url;
    document.getElementById("second_div_first_second_second_second_img").src = res[1].image_url;
    document.getElementById("second_div_first_second_second_third_img").src = res[2].image_url;
}
const fetchingdatafor_second_div_second = async () =>{
    let res = await getdata('https://my-notso-cool-project.herokuapp.com/Shop_Rollbacks_and_more');
    document.getElementById("second_div_second_second_first_img").src = res[0].image_url;
    document.getElementById("second_div_second_second_first_p").innerHTML = `upto 35% off on ${res[0].category}`;
    document.getElementById("second_div_second_second_second_img").src = res[1].image_url;
    document.getElementById("second_div_second_second_second_p").innerHTML = `upto 45% off on ${res[1].category}`;
    document.getElementById("second_div_second_second_third_img").src = res[2].image_url;
    document.getElementById("second_div_second_second_third_p").innerHTML = `upto 40% off on ${res[2].category}`;
    document.getElementById("second_div_second_second_fourth_img").src = res[5].image_url;
    document.getElementById("second_div_second_second_fourth_p").innerHTML = `${res[5].category}`;
}
const fetchingdatafor_second_div_third = async () =>{
    let res = await getdata('https://my-notso-cool-project.herokuapp.com/top_find_for_less');
    document.getElementById("second_div_third_second_first_img").src = res[0].image_url;
    document.getElementById("second_div_third_second_first_p").innerHTML = `upto 35% off on ${res[0].category}`;
    document.getElementById("second_div_third_second_second_img").src = res[1].image_url;
    document.getElementById("second_div_third_second_second_p").innerHTML = `upto 40% off on ${res[1].category}`;
    document.getElementById("second_div_third_second_third_img").src = res[2].image_url;
    document.getElementById("second_div_third_second_third_p").innerHTML = `upto 45% off on ${res[2].category}`;
    document.getElementById("second_div_third_second_fourth_img").src = res[5].image_url;
    document.getElementById("second_div_third_second_fourth_p").innerHTML = `${res[5].category}`;
}
const fetchingdatafor_fourth_div = async () =>{
    let res = await getdata('https://my-notso-cool-project.herokuapp.com/no_trick_just_treat');
    document.getElementById("fourth_div_second_first_img").src = res[0].image_url;
    document.getElementById("fourth_div_second_first_p").innerHTML = res[0].title;
    document.getElementById("fourth_div_second_second_img").src = res[1].image_url;
    document.getElementById("fourth_div_second_second_p").innerHTML = res[1].title;
    document.getElementById("fourth_div_second_third_img").src = res[2].image_url;
    document.getElementById("fourth_div_second_third_p").innerHTML = res[2].title;
    document.getElementById("fourth_div_second_fourth_img").src = res[3].image_url;
    document.getElementById("fourth_div_second_fourth_p").innerHTML = res[3].title;
}
const fetchingdatafor_fifth_div = async () =>{
    let res = await getdata('https://my-notso-cool-project.herokuapp.com/for_you');
    document.getElementById("fifth_div_second_first_first_img").src = res[0].image_url;
    document.getElementById("fifth_div_second_first_second_h3").innerHTML = res[0].title;
    document.getElementById("fifth_div_second_first_second_p").innerHTML = res[0].sub_title;
    document.getElementById("fifth_div_second_second_first_img").src = res[1].image_url;
    document.getElementById("fifth_div_second_second_second_h3").innerHTML = res[1].title;
    document.getElementById("fifth_div_second_second_second_p").innerHTML = res[1].sub_title;
    document.getElementById("fifth_div_second_third_first_img").src = res[2].image_url;
    document.getElementById("fifth_div_second_third_second_h3").innerHTML = res[2].title;
    document.getElementById("fifth_div_second_third_second_p").innerHTML = res[2].sub_title;
}
const fetchingdatafor_sixth_div = async () =>{
    let res = await getdata('https://my-notso-cool-project.herokuapp.com/your_favourite_departement');
    console.log(res);
    res.map((el) => {
        let folder = document.getElementById("sixth_div_second");
        let div = document.createElement("div");
        div.setAttribute("class" ,'sixth_div_second_all');
        let img = document.createElement("img");
        img.setAttribute("class" ,'sixth_div_second_all_img');
        img.src = el.image_url;
        let p = document.createElement("p");
        p.setAttribute("class" ,'sixth_div_second_all_p');
        p.innerHTML = el.title;
        div.append(img,p);
        folder.append(div);
    })
}
fetchingdatafor_pick_of_the_day();
fetchingdatafor_second_div_first();
fetchingdatafor_second_div_second();
fetchingdatafor_second_div_third();
fetchingdatafor_fourth_div();
fetchingdatafor_fifth_div();
fetchingdatafor_sixth_div();