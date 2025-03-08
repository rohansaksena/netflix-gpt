import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Browse from './Browse'
import Login from './Login'
import Error from './Error'

function Body() {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route>
            <Route path='/' element={<Login/>}/>    
            <Route path='browse' element={<Browse/>}/>
            <Route path='error' element={<Error/>}/>
            </Route>
        )
    )

  return (
        <RouterProvider router={router} />  
  )
}

export default Body