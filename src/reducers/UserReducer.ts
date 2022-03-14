import {
    USER_FAIL,
    USER_LOADING,
    USER_SUCCESS,
    UserDispatchTypes,
    UserType
} from "../actions/UserActionTypes";

interface DefaultStateI {
    loading: boolean,
    users?: UserType[],
    error?: string;
}

const defaultState: DefaultStateI = {
    loading: false,
    users: [],
    error: ""
};

const userReducer = (state: DefaultStateI = defaultState, action: UserDispatchTypes): DefaultStateI => {
    switch (action.type) {
        case USER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case USER_LOADING:
            return {
                ...state,
                loading: true
            }
        case USER_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload
            }
        default:
            return state
    }
};
export default userReducer