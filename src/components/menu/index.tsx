import { useNavigate } from "react-router-dom";
import { ItemsContainer, MenuContainer, Item, LogoContainer } from "./styles";
import { FaHome  } from "react-icons/fa";
import { MdForest } from "react-icons/md"
import { HiDocumentReport } from "react-icons/hi"


export function Menu(){

    const navigate = useNavigate()

    return (
        <MenuContainer>
            <LogoContainer>
                <h1>FS FLORESTAL</h1>
            </LogoContainer>

            <ItemsContainer>

                <Item onClick={()=>navigate("/")}>Home <FaHome size={20}/></Item>
                <Item onClick={()=>navigate("/guia_florestal")}>Guia Florestal <MdForest size={20}/></Item>  
                <Item onClick={()=>navigate("/complemento")}>Complemento <HiDocumentReport size={20}/></Item>
                <Item onClick={()=>navigate("/contratos")}>Contratos <HiDocumentReport size={20}/></Item>
                <Item onClick={()=>navigate("/pedidos")}>Pedidos <HiDocumentReport size={20}/></Item>
                <Item onClick={()=>navigate("/bonificaçao")}>Bonificação <HiDocumentReport size={20}/></Item>
            </ItemsContainer>

        </MenuContainer>
    )
}