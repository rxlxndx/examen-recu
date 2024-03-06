import { useEffect, useReducer } from 'react';
import './output.css';
import 'animate.css';
import { authManager } from './config/context/auth-manager';
import AuthContext from './config/context/auth-context';
import AppRouter from './router/AppRouter';

const init = () => JSON.parse(
  //localStorega es una varibla global en la cual hace referencai de un apartado del navegador para guardar datos => String 
localStorage.getItem('user')
) || {signed: false};

function App() {
  const [user, dispatch] = useReducer(
    authManager, {}, init
  );
  //use se va a ejcutar una vez se haya renderizado el html y se va aseguir ejecutando cada que hay aun cambio en user
  useEffect(()=>{
    if(!user) return;
    localStorage.setItem("user",JSON.stringify(user));
  }, [user]);

  return <AuthContext.Provider 
  value={{dispatch,user}}>
    <AppRouter
    
    />
  </AuthContext.Provider>
}

export default App
