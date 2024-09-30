import { styled } from "../../styles"


export const HomeContainer = styled('div',{
    display:"flex",
    flexDirection:"column",
    gap:"3rem",
    borderRadius:".2rem",


    height:"100vh",

    justifyContent:"center",
    alignItems:"center",

    background:"white",


    '.fs-sorriso':{
        
        backgroundColor:'$yellow_fs'
    },

    '.fs-lrv':{
        backgroundColor:"$green_fs",
    },

    '.fs-pdl':{
        backgroundColor:"$green_light"
    },

    a:{
        width:"18rem",
        textAlign:"center",
        textDecoration:"none",
        padding:'1rem .5rem',
        color:"White",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        borderRadius:".2rem"
    }
})



export const TitleContainer = styled('div',{
    display:"flex",
    flexDirection:"column",
    textAlign:"center",
    gap:"1rem"
})

export const NavContainer = styled('div',{
    display:"flex",
    flexDirection:"column",
    gap:"1rem",
})