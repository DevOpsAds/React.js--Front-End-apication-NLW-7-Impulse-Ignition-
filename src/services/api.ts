import axios from "axios"

const api = axios.create({
    baseURL:"http://localhost4000",
})

export{api}