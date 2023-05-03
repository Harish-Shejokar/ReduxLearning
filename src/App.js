import Counter from './components/Counter';
import Headers from './components/Header';
import Auth from './components/Auth';
import UseerProfile from './components/UserProfile'
import { useSelector } from 'react-redux';


function App() {
    const islogin = useSelector((state) => state.Auth.isAuthenticated);

  return (
    <>
      <Headers />
      {islogin ? <UseerProfile />
        :
      <Auth />}
      <Counter />
    </>
  );
}

export default App;
