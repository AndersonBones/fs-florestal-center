
import {Routes, Route} from 'react-router-dom'
import Home from "../pages/home";
import { AppLayout } from '../pages/layout';
import GuiaFlorestal from '../pages/GuiaFlorestal';


export const Router = ()=>{
    return (
        <Routes> 
            
            <Route path='/' element={<AppLayout/>}>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/Guia_florestal' element={<GuiaFlorestal/>}></Route>
            </Route>
        
            
        </Routes>
    )
}