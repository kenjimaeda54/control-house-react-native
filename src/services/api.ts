import axios from "axios";


export const api = axios.create({
  baseURL: "http://http://192.168.1.9:1880"
})