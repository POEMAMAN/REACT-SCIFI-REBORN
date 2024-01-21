//El nombre AUTH solo es para identificar que van asociados a las acciones de authentificacion, si hay mas de un store se suele meter todos sus componenetes en una carpeta
//En vez de definir el estado inicila en la funcion, lo hacemos fuera con una variable, es mas facil actualizar el estado
const INITIAL_STATE = {
    user: null,
    token: null,
    error: null,
    isLoading: false,

};
const authReducer = (state = INITIAL_STATE, action) => {

    switch(action.type){
        case "register_user":
            return {...state, isLoading: true};     
        case "register_user_ok":
            return {...state, user: action.payload, error: null, isLoading: false};
        case "register_user_ko":
            return {...state, error: action.payload, isLoading: false};
        case "login_user":
            return {...state, isLoading: true};  
        case "login_user_ok":
            return {...state, user: action.payload, error: null, isLoading: false};
        case "login_user_ko":
            return {...state, error: action.payload, isLoading: false};
        case "logout_user":
            return;
        case "actual_user_ok":
            return {...state, isLoading: true};  
        case "actual_user_ko":
            return {...state, error: action.payload, isLoading: false};
        case "log_out":
            return {...state, isLoading: true};  
        case "log_out_ko":
            return {...state, error: action.payload, isLoading: false};

    default:
        return state;
    
    }
};

export default authReducer;