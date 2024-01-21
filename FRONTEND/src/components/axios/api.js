import axios from "axios";

const token = localStorage.getItem("token")
console.log(token)
//vamos a definir los datos del HEADER de la peticion a la API
const APIHeader = {
    //tipo de aplicacion
    'Accept': 'application/json',
    //contenido de la aplicacion
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    //la autorizacion, el beare es el token
    'Authorization': {
        toString(){
            return `Bearer ${localStorage.getItem("token")}`;
        }
    },
};

//creamos la estructura del axios (axios.create, crear con estructura axios), y la exportamos como constante para luego poner usar con metodos. Esta es una forma diferente de export sin DEFAULT (esto se usa para componentes)
export const API = axios.create({
    //headres que va allevar
    headers: APIHeader,
    //tiempo que durara la peticion
    timeout: 10000,
    //defino la ruta de la peticion directamente o cun una variable de entorno
    baseURL: "http://localhost:5000/",


});


