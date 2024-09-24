import { globalCss } from ".";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
   


  },

  body:{
    fontFamily:'monospace',
    background:"$darkGray"
  },

  button:{
    opacity:'0.9',
    cursor:'pointer',
    border:'none',
    borderRadius:".3rem",
    fontSize:"$md2",
    

    '&:hover':{
      opacity:'1'
    }
  },






});
