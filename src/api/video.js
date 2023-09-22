import axios from "axios";

// http://localhost:8080/api
const instance = axios.create({
    baseURL : "http://localhost:8080/api/",

});

// async ~ await + axios
export const getCategories = async () => {
    return await instance.get("category");
};

export const addVideo = async (data) => {
    return await instance.post("video", data); // post는 넘기는 값이 있어야 함
};

export const getvideos = async (page, category) => {
    console.log(category);
    let url = `video?page=${page}`;
    if(category!==null && category!==undefined){
        url += `&category=${category}`;
    }
    return await instance.get(url);
} 