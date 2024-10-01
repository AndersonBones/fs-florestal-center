import { styled } from "../../styles";



export const MenuContainer = styled('div',{
    padding:".5rem",
    
    display:"flex",
    flexDirection:"column",
    gap:"1rem"
    
})

export const ItemsContainer = styled('div', {
    display:"flex",
    flexDirection:"column",
    gap:"1rem",
    background:"$white_smoke",
    height:'100%',
    borderRadius:".3rem",
    padding:".5rem"
})

export const Item = styled('button',{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    gap:".5rem",
    padding:".5rem",
    borderRadius:".3rem",
    cursor:"pointer",
    backgroundColor:"$green_fs",
    color:"White",
    fontWeight:"bold",
    border:'none'
})

export const LogoContainer = styled("div",{
    background:"$white_smoke",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    height:"2rem",
    textAlign:"center",
    h1:{
        fontSize:"1rem"
    },
    borderRadius:".3rem",


})