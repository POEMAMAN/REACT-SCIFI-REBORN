import { loginUser } from '../redux/actions/auth.actions';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logear = async (formData) => {
    dispatch(loginUser(formData, navigate));
  };
 

  return (
    <div>
        <p>Acceso a la Web (Login)</p>
        <form onSubmit={handleSubmit(logear)}>
          <label>
            Email
            <input type="email" placeholder="Introduce tu email" {...register("email")} />       
          </label>
          <label>
            Password
          <input type="password" placeholder="Introduce tu password" {...register("password")}/>
          </label>
          <input className="special-buttom"   type="submit" value="Login"  />
        </form>
    </div>
  );
};

export default Login;
