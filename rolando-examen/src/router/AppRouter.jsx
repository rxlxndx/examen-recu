import React, { useContext } from 'react'
import SignInPage from '../modules/auth/SignInPage';
import AuthContext from '../config/context/auth-context';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Error from '../modules/temp/Error';
import AdminLayouts from '../modules/admin/AdminLayouts';

function AppRouter() {
  const {user} = useContext(AuthContext);
    const router  = createBrowserRouter(
      createRoutesFromElements(
        <>
        
        {
          //publico
        }
        {
          user.signed ? (
          <>
          <Route path='/' element={<AdminLayouts/>}> 
          <Route path='admin' element={<> ROLE: ADMIN</>}/>
          <Route path='user' element={<> ROLE: USER</>}/>
          <Route path='productos' element={<>Productos</>}/>
          </Route>
          
          </>
          ) : <Route path='/' element={<SignInPage/>}/>
        }
        <Route path='/*' element={<Error/>}/>
        </>
      )
    
  )
  return <RouterProvider router={router}/>
}

export default AppRouter