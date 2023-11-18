import { useState } from 'react'
import './App.css'
import Fouth from './Component/fouthComponent/Fouth'
import Details from './Component/detailsComponent/Details'
import { QueryClient, QueryClientProvider } from 'react-query' 
import {createRoot} from "react-dom/client"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './error-page'



function App() {
  const client = new QueryClient();
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Fouth />
    },
    {
      path: '/details/:id',
      element: <Details/>,
      errorElement: <ErrorPage />
    }
  ])
  return (
    <>
    <QueryClientProvider client={client}>
      <RouterProvider router={router} />
    {/* <BrowserRouter>
    <Routes>
        <Route path='/' element={<Fouth />}/>
        <Route path='/details' element={<Details />}/>
    </Routes>
    </BrowserRouter> */}
    </QueryClientProvider>
    </>
  )
}

export default App
