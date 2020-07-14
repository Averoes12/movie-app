import * as ActionType from './ActionType'
import axios from 'axios'
import {API_KEY} from "../constant/constant";

export const getDiscoverStart = () => {
    return {
        type: ActionType.GET_DISCOVER_START,
        isLoading: true,
    }
}

export const getDiscoverSuccess = discover => {
    return {
        type: ActionType.GET_DISCOVER_SUCCESS,
        isLoading: false,
        discover: discover,
    }
}

export const getDiscoverFailed = error => {
    return {
        type: ActionType.GET_DISCOVER_FAILED,
        isLoading: false,
        error: error,
    }
}

export const getNowPlayingStart = () => {
    return {
        type: ActionType.GET_NOW_PLAYING_START,
        isLoading: true
    }
}

export const getNowPlayingSuccess = (nowPlaying) => {
    return {
        type: ActionType.GET_NOW_PLAYING_SUCCESS,
        isLoading: false,
        nowPlaying: nowPlaying
    }
}

export const getNowPlayingFailed = (error) => {
    return {
        type: ActionType.GET_NOW_PLAYING_FAILED,
        isLoading: false,
        error: error
    }
}

export const getTrendingDayStart = () =>{
    return{
        type: ActionType.GET_TRENDING_DAY_START,
        isLoading: true
    }
}

export const getTrendingDaySuccess = (day) =>{
    return{
        type: ActionType.GET_TRENDING_DAY_SUCCESS,
        isLoading: false,
        day : day
    }
}

export const getTrendingDayFailed = (error) =>{
    return{
        type: ActionType.GET_TRENDING_DAY_FAILED,
        isLoading: false,
        error : error
    }
}

export const getTrendingWeekStart = () =>{
    return{
        type: ActionType.GET_TRENDING_WEEK_START,
        isLoading: true
    }
}

export const getTrendingWeekSuccess = (week) =>{
    return{
        type: ActionType.GET_TRENDING_WEEK_SUCCESS,
        isLoading: false,
        week : week
    }
}

export const getTrendingWeekFailed = (error) =>{
    return{
        type: ActionType.GET_TRENDING_WEEK_FAILED,
        isLoading: false,
        error:error
    }
}

export const getPopularStart = () =>{
    return{
        type: ActionType.GET_POPULAR_START,
        isLoading: true
    }
}

export const getPopularSuccess = (popular) =>{
    return{
        type: ActionType.GET_POPULAR_SUCCESS,
        isLoading: false,
        popular: popular
    }
}

export const getPopularFailed = (error) =>{
    return{
        type: ActionType.GET_POPULAR_FAILED,
        isLoading: false,
        error : error
    }
}

export const getTopRatedStart = () =>{
    return{
        type: ActionType.GET_TOP_RATED_START,
        isLoading: true
    }
}

export const getTopRatedSuccess = (top) =>{
    return{
        type: ActionType.GET_TOP_RATED_SUCCESS,
        isLoading: false,
        top : top
    }
}

export const getTopRatedFailed = (error) =>{
    return{
        type: ActionType.GET_TOP_RATED_FAILED,
        isLoading: false,
        error : error
    }
}

export const getUpcomingStart = () =>{
    return{
        type: ActionType.GET_UPCOMING_START,
        isLoading: true,
    }
}

export const getUpcomingSuccess = (upcoming) =>{
    return{
        type: ActionType.GET_UPCOMING_SUCCESS,
        isLoading: false,
        upcoming: upcoming
    }
}

export const getUpcomingFailed = (error) =>{
    return{
        type: ActionType.GET_UPCOMING_FAILED,
        isLoading: true,
        error:error
    }
}

export const getDiscover = () => {
    return dispatch => {
        dispatch(getDiscoverStart());
        axios.get("https://api.themoviedb.org/3/discover/movie?api_key=" + API_KEY)
            .then(response => {
                dispatch(getDiscoverSuccess(response.data.results))
                console.log(response.data)
            }).catch(error => {
            dispatch(getDiscoverFailed(error))
        })

    }
}

export const getNowPlaying = () => {
    return dispatch => {
        dispatch(getNowPlayingStart());
        axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=" + API_KEY)
            .then(response => {
                dispatch(getNowPlayingSuccess(response.data.results))
            }).catch(error => {
            dispatch(getNowPlayingFailed(error))
        })
    }
}

export const getTrendingDay = () =>{
    return dispatch =>{
        dispatch(getTrendingDayStart());
        axios.get("https://api.themoviedb.org/3/trending/movie/day?api_key="+API_KEY)
            .then(response =>{
                dispatch(getTrendingDaySuccess(response.data.results))
            }).catch(error => {
                dispatch(getTrendingDayFailed(error))
        })
    }
}

export const getTrendingWeek = () =>{
    return dispatch =>{
        dispatch(getTrendingWeekStart());
        axios.get("https://api.themoviedb.org/3/trending/movie/week?api_key="+API_KEY)
            .then(response =>{
                dispatch(getTrendingWeekSuccess(response.data.results))
            }).catch(error => {
            dispatch(getTrendingWeekFailed(error))
        })
    }
}

export const getPopular = () => {
    return dispatch => {
        dispatch(getPopularStart());
        axios.get("https://api.themoviedb.org/3/movie/popular?api_key=" + API_KEY)
            .then(response => {
                dispatch(getPopularSuccess(response.data.results))
            }).catch(error => {
            dispatch(getPopularFailed(error))
        })
    }
}

export const getTopRated = () => {
    return dispatch => {
        dispatch(getTopRatedStart());
        axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=" + API_KEY)
            .then(response => {
                dispatch(getTopRatedSuccess(response.data.results))
            }).catch(error => {
            dispatch(getTopRatedFailed(error))
        })
    }
}

export const getUpcoming = () => {
    return dispatch => {
        dispatch(getUpcomingStart());
        axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=" + API_KEY)
            .then(response => {
                dispatch(getUpcomingSuccess(response.data.results))
            }).catch(error => {
            dispatch(getUpcomingFailed(error))
        })
    }
}
