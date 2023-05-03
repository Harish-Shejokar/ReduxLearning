import classes from './Header.module.css';
import { useSelector,useDispatch } from 'react-redux';
import { authAction } from '../Store/index';

const Header = () => {
  const dispatch = useDispatch();
  const islogin = useSelector((state) => state.Auth.isAuthenticated);
  // console.log(islogin);

  const logoutHandler = () => {
    dispatch(authAction.logout());
  }


  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          {islogin &&<li>
            <a href='/'>My Products</a>
          </li>}
          {islogin &&<li>
            <a href='/'>My Sales</a>
          </li>}
          {islogin&&<li>
            <button onClick={logoutHandler}>Logout</button>
          </li>}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
