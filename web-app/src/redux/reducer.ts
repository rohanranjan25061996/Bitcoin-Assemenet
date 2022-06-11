import * as actions from "./action"
import * as helper from "../utils/helper"

const initalState = {
    apiData: [],
    loading: false,
    error: '',
    timeData: [],
    newsData: []
}

export const reducers = (state = initalState, action : any) => {
    switch(action.type){
        case actions.FETCH_HISTORY_DATA_REQUEST:{
            return{
                ...state,
                loading: true,
                error: ''
            }
        }
        case actions.FETCH_HISTORY_DATA_ERROR:{
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        }
        case actions.FETCH_HISTORY_DATA_SUCCESS:{
            return{
                ...state,
                loading: false,
                error: '',
                apiData: action.data
            }
        }

        case actions.FETCH_NEWS_DATA_REQUEST:{
            return{
                ...state,
                loading: true,
                error: ''
            }
        }
        case actions.FETCH_NEWS_DATA_ERROR:{
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        }
        case actions.FETCH_NEWS_DATA_SUCCESS:{
            return{
                ...state,
                loading: false,
                error: '',
                newsData: action.data
            }
        }

        case actions.GET_TWENTY_FOUR_HOURS_DATA: {
            const newData = helper.getDataOfTime(state.apiData, '24')
            let arr = []
            arr.push(newData)
            return{
                ...state,
                timeData: arr
            }
        }
        case actions.GET_ONE_WEEK_DATA: {
            const newData = helper.getDataOfTime(state.apiData, '7')
            return{
                ...state,
                timeData: newData
            }
        }

        case actions.GET_ONE_MONTH_DATA: {
            const newData = helper.getDataOfTime(state.apiData, '1')
            return{
                ...state,
                timeData: newData
            }
        }
        default:
            return state
    }
}