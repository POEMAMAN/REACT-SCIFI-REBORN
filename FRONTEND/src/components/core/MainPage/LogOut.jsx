import { logoutUser } from '../../redux/actions/auth.actions';
// import {forceUpdate} from "react";
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import Header from '../Header';

const LogOut = () => {
  //register va a guardar las proiedades en un objeto, la vamos ejecutando en cada imput, y usamos spread por el tema del objeto, e indicamos el nombre de la propiedad donde quiero guardarlo
  const { handleSubmit } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logOutAction = async (formData) => {
    dispatch(logoutUser(formData, navigate));
    localStorage.setItem("email","desconectado");
    navigate("/")


  };

  return (
    <div>
      <button className="special-buttom" onClick={handleSubmit(logOutAction)}>Cerrar Sesion</button>
    </div>
  );
};

export default LogOut;
