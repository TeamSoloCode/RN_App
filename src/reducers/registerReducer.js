import {
    TYPING_USERNAME,
    TYPING_REGISTER_EMAIL,
    TYPING_REGISTER_PASSWORD,
    TYPING_REGISTER_CONFIRM_PASSWORD,
    BIRTHDAY_SELECTED,
    REGISTER_SUCCESSFUL,
    REGISTER_FAILURE,
    REGISTER_CANCELED,
    REGISTERING

} from '../actions/actionsTypes';

let initialState = {
    registerAccount: {
        registerUsername: '',
        registerEmail: '',
        registerPassword: '',
        registerConfirmPassword: '',
        registerBirthday: '',
        registerStatus: ''
    }
}

//tạo reducer cho hành động đăng nhập
const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPING_USERNAME:
            state.registerAccount.registerUsername = action.username
            break;

        case TYPING_REGISTER_EMAIL:
            state.registerAccount.registerEmail = action.email
            break;

        case TYPING_REGISTER_PASSWORD:
            state.registerAccount.registerPassword = action.password
            break;

        case TYPING_REGISTER_CONFIRM_PASSWORD:
            state.registerAccount.registerConfirmPassword = action.confirmPassword
            break;

        case BIRTHDAY_SELECTED:
            state.registerAccount.registerBirthday = action.birthday
            alert(JSON.stringify(state.registerAccount.registerBirthday));
            break;

        case REGISTER_SUCCESSFUL:
            state.registerAccount.registerStatus = action.registerStatus
            break;
            
        case REGISTER_FAILURE:
            state.registerAccount.registerStatus = action.registerStatus
            break;

        case REGISTER_CANCELED:
            state.registerAccount.registerStatus = action.registerStatus
            break;

        case REGISTERING:
            
            break;
    }
    return state
}


export default registerReducer;