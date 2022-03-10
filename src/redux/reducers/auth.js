
import {
    LOGIN_REQUEST_SUCCESS,
    BUTTON_LOADING_TRUE,
    BUTTON_LOADING_FALSE,
    SPLASH_LOADING_TRUE,
    SPLASH_LOADING_FALSE,
} from './../constants/actions';


const userState = {
    buttonLoading: false,
    splashLoading: false,
    info: []
}

const userInfo = (state = userState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST_SUCCESS:
            return {
                ...state,
                info: action.payload,
            };
        case BUTTON_LOADING_TRUE:
            return {
                ...state,
                buttonLoading: true,
            };
        case BUTTON_LOADING_FALSE:
            return {
                ...state,
                buttonLoading: false
            };
        case SPLASH_LOADING_TRUE:
            return {
                ...state,
                splashLoading: true
            };
        case SPLASH_LOADING_FALSE:
            return {
                ...state,
                splashLoading: false
            };
        default:
            return state;
    }
}

export default userInfo