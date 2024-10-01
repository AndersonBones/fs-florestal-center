import { Outlet } from "react-router-dom";

import { LayoutContainer } from "./styles";
import { Menu } from "../../components/menu";


export function AppLayout(){
    return (
        <LayoutContainer>
            <Menu></Menu>
            <Outlet></Outlet>
        </LayoutContainer>
    )
}
