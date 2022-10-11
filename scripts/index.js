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
    console.log(res);
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
    console.log(res);
    document.getElementById("second_div_third_second_first_img").src = res[0].image_url;
    document.getElementById("second_div_third_second_first_p").innerHTML = `upto 35% off on ${res[0].category}`;
    document.getElementById("second_div_third_second_second_img").src = res[1].image_url;
    document.getElementById("second_div_third_second_second_p").innerHTML = `upto 40% off on ${res[1].category}`;
    document.getElementById("second_div_third_second_third_img").src = res[2].image_url;
    document.getElementById("second_div_third_second_third_p").innerHTML = `upto 45% off on ${res[2].category}`;
    document.getElementById("second_div_third_second_fourth_img").src = res[5].image_url;
    document.getElementById("second_div_third_second_fourth_p").innerHTML = `${res[5].category}`;
}
fetchingdatafor_second_div_second();
fetchingdatafor_second_div_third();
fetchingdatafor_second_div_first();
fetchingdatafor_pick_of_the_day();