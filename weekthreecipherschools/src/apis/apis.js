import Axios from "axios";

export const getAllPhtos = ()=> 
Axios.get("https://jsonplaceholder.typicode.com/photos");