const getdata = async (url)=>{
    let res = await fetch (url);
    let data = await res.json();
    return data;
}

export {getdata};