import * as ActionType from './ActionType'
import axios from 'axios'
import {API_KEY} from "../constant/constant";

export const getTvStart = () =>{
    return{
        type: ActionType.GET_TV_START,
        isLoading : true
    }
}

export const getTvSuccess = (tv) => {
    return{
        type: ActionType.GET_TV_SUCCESS,
        isLoading: false,
        tv : tv,
    }
}

export const getTvFailed = (error) => {
    return{
        type : ActionType.GET_TV_FAILED,
        isLoading: false,
        error: error
    }
}

export const getTv = () =>{
    return dispatch =>{
        dispatch(getTvStart());
        axios.get("https://api.themoviedb.org/3/tv/popular?api_key=" + API_KEY)
            .then(response =>{
                dispatch(getTvSuccess(response.data.results))
            }).catch(error => {
                dispatch(getTvFailed(error))
        })
    }
}
