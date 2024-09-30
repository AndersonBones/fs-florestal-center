import { BrowserRouter } from "react-router-dom"

import { globalCss } from "./styles"
import { Router } from "./router"


globalCss()


function App() {


  return (
    
    <BrowserRouter>
      <Router></Router>
    </BrowserRouter>
    
    
  )
}


export default App
