import axios from "axios"
import {BCX_BASE_URL, BCX_CURRENT_PRICE_API_PATH, 
    BCX_HISTORIC_VALUE_API_PATH, NEWS_API_BASE_URL, NEWS_API_URL_PATH} from "./config"

// /weekly_popular_posts.json

export const getHistoryData = async () => {
    try{
        const response = await axios.get(`${BCX_BASE_URL}${BCX_HISTORIC_VALUE_API_PATH}`)
        return response.data
    }catch(error : any){
        throw new Error(error.message || 'API Error')
    }
}

export const currentPriceData = async () => {
    try{

    }catch(error : any){
        throw new Error(error.message || 'API Error')
    }
}

export const getNewsApiData = async () => {
    try{
        const response = await axios.get(`${NEWS_API_URL_PATH}/weekly_popular_posts.json`)
        return response.data
    }catch(error :any){
        throw new Error(error.message || 'API Error')
    }
}