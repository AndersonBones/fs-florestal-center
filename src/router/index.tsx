import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../pages/layout";

export const Router = createBrowserRouter([

    {
        path:'/',
        element:<AppLayout/>,
        
        children:[
            {path:'/', element:},
            {path:'/orders', element:}
        ],
    },

])