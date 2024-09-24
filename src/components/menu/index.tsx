import { MenuContainer, NavContainer, TitleContainer } from "./styles";


export default function Menu(){
    return (
        <MenuContainer>

            <TitleContainer>

                <h1>Baixa de Guias Florestais</h1>

                <p>
                    Selecione uma das industrias abaixo.
                </p>
                
            </TitleContainer>

            <NavContainer>


                <a href="" className="fs-sorriso">FS Sorriso</a>
                <a href="" className="fs-lrv">FS Lucas do rio verde</a>
                <a href="" className="fs-pdl">FS Primavera do leste</a>

            </NavContainer>
            

        </MenuContainer>
    )
}