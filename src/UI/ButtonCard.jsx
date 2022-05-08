import React from "react";



const ButtonCard =(props)=>
{
    return (
        
        <button type={props.type} style={{ backgroundColor:'black',color :'white',border:'none',height:'30px'}}>{props.children}</button>
    )
}


export default ButtonCard ;