//createStore --> apodo que le doy a la funcion legacy-createStore
import {legacy_createStore as createStore, combineReducers, applyMiddleware} from "redux";
//legacy es la que sustituye al create store, el modo as, permite renombrar las funciones
import authReducer from "./reducers/auth.reducers";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
//si tenemos que realizar tareas asincronas tenemos que oinstalar redux-thunk, es un middleware, mejora la carga de datos 

//El ´combine` permite agruparlos los reducer
const reducer = combineReducers({
    auth: authReducer,
    // city: cityReducer (en caso de tener varios datos-reducer en el store)
});

//Se pone thunk como parametro para indicar que es asincrono, el compose permite usar un middleware que es el thunk
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
export default store;

