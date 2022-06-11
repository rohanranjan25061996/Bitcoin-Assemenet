import * as actions from "./action"
import {getHistoryData, getNewsApiData} from "../api/api"
import {AnyAction} from "redux"

interface TypeOfData{
    time: number,
    price: number
}
interface DATA{
    data: [TypeOfData]
}

function getApiRequest() {
    return{
        type: actions.FETCH_HISTORY_DATA_REQUEST
    }
}

function getApiError(error : String){
    return{
        type:actions.FETCH_HISTORY_DATA_ERROR,
        error
    }
}

function getApiData(data : DATA){
    return{
        type: actions.FETCH_HISTORY_DATA_SUCCESS,
        data
    }
}

function getApiNewsRequest() {
    return{
        type: actions.FETCH_NEWS_DATA_REQUEST
    }
}

function getApiNewsError(error : String){
    return{
        type:actions.FETCH_NEWS_DATA_ERROR,
        error
    }
}

function getApiNewsData(data : any){
    return{
        type: actions.FETCH_NEWS_DATA_SUCCESS,
        data
    }
}
export function getTimeData(time: String){
    if(time === '24'){
        return{
            type: actions.GET_TWENTY_FOUR_HOURS_DATA
        }
    }else if(time === '7'){
        return{
            type: actions.GET_ONE_WEEK_DATA
        }
    }else if(time === '1'){
        return{
            type: actions.GET_ONE_MONTH_DATA
        }
    }
}

const getData = () => (dispatch : any) => {
    dispatch( getApiRequest() )
    getHistoryData()
    .then((res) => {
        dispatch( getApiData(res) )
        dispatch( getTimeData('1') )
    })
    .catch((error) => {
        dispatch( getApiError(error) )
    })
}

const getNewsData = () => (dispatch : any) => {
    dispatch( getApiNewsRequest() )
    getNewsApiData()
    .then((res) => {
        dispatch( getApiNewsData(res) )
    })
    .catch((error) => {
        dispatch( getApiNewsError(error) )
    })
}


export { getData, getNewsData }