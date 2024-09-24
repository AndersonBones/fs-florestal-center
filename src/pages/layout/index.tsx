import { Outlet } from "react-router-dom";


export function AppLayout(){
    return (
        <div className="flex min-g-screen flex-col antialiased">
            <>

            
            
            </>

            
            <div className="flex flex-1 flex-col gap-4 p-8 pt-6">
                <Outlet></Outlet> 
            </div>
           
            
        </div>
    )
}