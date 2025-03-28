import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Browse from './Browse'
import Login from './Login'
import Error from './Error'
import GPTSearch from './GPTSearch'
import Layout from './Layout'

function Body() {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<Layout/>}> 
            <Route path='' element={<Login/>}/>   
            <Route path='browse' element={<Browse/>}/>
            <Route path='error' element={<Error/>}/>
            <Route path='gpt' element={<GPTSearch/>}/>
            </Route>
        )
    )

  return (
        <RouterProvider router={router} />  
  )
}

export default Body