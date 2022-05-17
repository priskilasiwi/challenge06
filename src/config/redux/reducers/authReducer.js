const intialState = {
    dataLogin: null,
    dataRegist: null
};

const authReducer = (state=intialState, action) => {
    switch (action.type) {
        case "SET_DATA_AUTH":
            return {
                ...state,
                dataLogin:action.payload,
            };
        default:
            return state;
    }
};

export default authReducer;