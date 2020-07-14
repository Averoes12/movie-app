import * as ActionType from './ActionType'
import axios from "axios";
import {API_KEY} from "../constant/constant";

export const getDetailStart = () => {
    return{
        type : ActionType.GET_DETAIL_START,
        isLoading : true,
    }
}

export const getDetailSuccess = (detail) => {
    return{
        type : ActionType.GET_DETAIL_SUCCESS,
        isLoading : false,
        detail : detail
    }
}

export const getDetailFailed = (error) => {
    return{
        type : ActionType.GET_DETAIL_FAILED,
        isLoading : false,
        error : error
    }
}

export const getDetail = (channel, movie_id) =>{
    return dispatch =>{
        dispatch(getDetailStart())
        axios.get("https://api.themoviedb.org/3/" + channel + "/" + movie_id + "?api_key="+ API_KEY)
            .then(response => {
                dispatch(getDetailSuccess(response.data))
            }).catch(error => {
                dispatch(getDetailFailed(error))
        })
    }
}
