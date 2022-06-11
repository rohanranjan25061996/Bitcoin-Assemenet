import * as actions from "./action"

const initalState = {
    apiData: [],
    loading: false,
    error: ''
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
        default:
            return state
    }
}