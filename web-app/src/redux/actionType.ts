import * as actions from "./action"
import {getHistoryData} from "../api/api"
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



const getData = () => (dispatch : any) => {
    dispatch( getApiRequest() )
    getHistoryData()
    .then((res) => {
        dispatch( getApiData(res) )
    })
    .catch((error) => {
        dispatch( getApiError(error) )
    })
}

export { getData }