import { RouterProvider } from "react-router-dom"

import { globalCss } from "./styles"
import { Router } from "./router"


globalCss()


function App() {


  return (
    
    <RouterProvider router={Router}></RouterProvider>
    
    
  )
}


export default App
