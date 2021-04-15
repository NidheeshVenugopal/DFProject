initialState = {
    errorMsg: '',
    ShowLoader: false,
    messages: '',
    Services: [],
    Submitsuggstion_res: '',
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'AddErrorD':
            return { ...state, errorMsg: action.payload };
        case 'ShowLoader':
            return { ...state, ShowLoader: action.payload };
        case 'AddMessageD':
            return { ...state, messages: action.payload };
        case 'submit_suggestion':
            return {
                ...state,
                Submitsuggstion_res: action.payload,
                showLoader: false
            }
        case 'clearSignin':
            return { initialState };
        default:
            return state;
    }
};
