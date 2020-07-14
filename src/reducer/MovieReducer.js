import * as ActionType from '../actions/ActionType'

const initialState = {
    isLoading: false,
    discover: [],
    nowPlaying:[],
    day:[],
    week:[],
    popular:[],
    top: [],
    upcoming: [],
    error: null
}

export const movieReducer = (state = initialState, actions) => {
    switch (actions.type) {

        case ActionType.GET_DISCOVER_START:
            return {
                ...state,
                isLoading: actions.isLoading,
            }

        case ActionType.GET_DISCOVER_SUCCESS:
            return {
                ...state,
                isLoading: actions.isLoading,
                discover: actions.discover
            }

        case ActionType.GET_DISCOVER_FAILED:
            return {
                ...state,
                isLoading: actions.isLoading,
                error: actions.error
            }

        case ActionType.GET_NOW_PLAYING_START:
            return {
                ...state,
                isLoading: actions.isLoading,
            }

        case ActionType.GET_NOW_PLAYING_SUCCESS:
            return {
                ...state,
                isLoading: actions.isLoading,
                nowPlaying : actions.nowPlaying
            }

        case ActionType.GET_NOW_PLAYING_FAILED:
            return {
                ...state,
                isLoading: actions.isLoading,
                error : actions.error
            }

        case ActionType.GET_TRENDING_DAY_START:
            return {
                ...state,
                isLoading: actions.isLoading
            }

        case ActionType.GET_TRENDING_DAY_SUCCESS:
            return {
                ...state,
                isLoading: actions.isLoading,
                day: actions.day
            }

        case ActionType.GET_TRENDING_DAY_FAILED:
            return {
                ...state,
                isLoading: actions.isLoading,
                error : actions.error
            }

        case ActionType.GET_TRENDING_WEEK_START:
            return {
                ...state,
                isLoading: actions.isLoading,
            }

        case ActionType.GET_TRENDING_WEEK_SUCCESS:
            return {
                ...state,
                isLoading: actions.isLoading,
                week: actions.week
            }

        case ActionType.GET_TRENDING_WEEK_FAILED:
            return {
                ...state,
                isLoading: actions.isLoading,
                error: actions.error
            }

        case ActionType.GET_POPULAR_START:
            return {
                ...state,
                isLoading: actions.isLoading,
            }


        case ActionType.GET_POPULAR_SUCCESS:
            return {
                ...state,
                isLoading: actions.isLoading,
                popular: actions.popular
            }

        case ActionType.GET_POPULAR_FAILED:
            return {
                ...state,
                isLoading: actions.isLoading,
                error: actions.error
            }

        case ActionType.GET_TOP_RATED_START:
            return {
                ...state,
                isLoading: actions.isLoading,
            }

        case ActionType.GET_TOP_RATED_SUCCESS:
            return {
                ...state,
                isLoading: actions.isLoading,
                top: actions.top
            }


        case ActionType.GET_TOP_RATED_FAILED:
            return {
                ...state,
                isLoading: actions.isLoading,
                error : actions.error
            }

        case ActionType.GET_UPCOMING_START:
            return {
                ...state,
                isLoading: actions.isLoading,
            }

        case ActionType.GET_UPCOMING_SUCCESS:
            return {
                ...state,
                isLoading: actions.isLoading,
                upcoming: actions.upcoming
            }

        case ActionType.GET_UPCOMING_FAILED:
            return {
                ...state,
                isLoading: actions.isLoading,
                error : actions.error
            }

        default:
            return state
    }

}
