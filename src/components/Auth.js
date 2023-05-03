import classes from './Auth.module.css';
import { useDispatch,useSelector } from 'react-redux';
import { authAction } from "../Store/index";


const Auth = () => {
  const dispatch = useDispatch();
  const Auth = useSelector((state) => state.Auth.isAuthenticated);
  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(authAction.login());
    console.log(Auth);

  }


  return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button onClick={loginHandler}>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
