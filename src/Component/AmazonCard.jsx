
import React from "react";
import Arrow from "../UI/Arrow";
import Button from "../UI/ButtonCard";
import Date from "../UI/Date";
import Desktop from "../UI/Desktop";
import Gift from "../UI/Gift";
import Logo from "../UI/Logo";
import Pay from "../UI/Pay";


let container = {height:'380px',width:'600px',backgroundColor:'orange',paddingLeft:'30px',paddingRight:'30px',paddingTop:'20px',margin:'auto',marginTop:'50px',marginBottom:'50px'}
let firstDiv = {display:'flex',justifyContent:'space-between'}
let secondDiv = {display:'flex',justifyContent:'space-between'}


const AmazonCard = ()=>
{

    return (

        <>
            <div style={container}>

            <div style={firstDiv}>
                <Date>28/10/2020</Date>
                <Logo src="https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png" alt=''></Logo>  
            </div>

            <Button type="button">Case Study</Button>
            <Gift>Amazon Gift</Gift>
            <Pay>Pay</Pay>

            <div style={secondDiv}>
                <Desktop>Desktop - Mobile</Desktop>
                <Arrow src='https://www.freeiconspng.com/uploads/right-arrow-icon-12.png' alt=''></Arrow>
            </div>
          
            </div>

        
        </>




    )
}

export default AmazonCard ;