import * as ActionType from '../actions/ActionType'

const initialState = {
    isLoading: false,
    detail: null,
    error: null,
}
export const detailReducer = (state = initialState, actions) => {
    switch (actions.type) {

        case ActionType.GET_DETAIL_START:
            return {
                ...state,
                isLoading: actions.isLoading,
            }

        case ActionType.GET_DETAIL_SUCCESS:
            return {
                ...state,
                isLoading: actions.isLoading,
                detail: actions.detail
            }

        case ActionType.GET_DETAIL_FAILED:
            return {
                ...state,
                isLoading: actions.isLoading,
                error: actions.error,
            }

        default:
            return state;
    }
}
