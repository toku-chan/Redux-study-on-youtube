import * as Actions from './actions.js'
import initialState from '../store/initialState.js'

export const UsersReducers = (state = initialState.users, action) => {
    switch(action.type) {
        case Actions.SIGN_IN:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}