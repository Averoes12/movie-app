import * as ActionType from '../actions/ActionType'

const initialState = {
    isLoading: false,
    tv: [],
    error: null,
}

export const tvReducer = (state = initialState, actions) => {
    switch (actions.type) {

        case ActionType.GET_TV_START:
            return {
                ...state,
                isLoading: actions.isLoading,
            }

        case ActionType.GET_TV_SUCCESS:
            return {
                ...state,
                isLoading: actions.isLoading,
                tv: actions.tv
            }

        case ActionType.GET_TV_FAILED:
            return {
                ...state,
                isLoading: actions.isLoading,
                error: actions.error,
            }

        default:
            return state;
    }
}
