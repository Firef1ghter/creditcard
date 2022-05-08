
import React from "react";
import Arrow from "../UI/Arrow";
import Button from "../UI/ButtonCard";
import Date from "../UI/Date";
import Desktop from "../UI/Desktop";
import Gift from "../UI/Gift";
import Logo from "../UI/Logo";
import Pay from "../UI/Pay";


let container = {height:'380px',width:'600px',backgroundColor:'lightGrey',paddingLeft:'30px',paddingRight:'30px',paddingTop:'20px',margin:'auto',marginTop:'50px',marginBottom:'50px'}
let firstDiv = {display:'flex',justifyContent:'space-between'}
let secondDiv = {display:'flex',justifyContent:'space-between'}


const AppleCard = ()=>
{

    return (

        <>
            <div style={container}>

            <div style={firstDiv}>
                <Date>17 Sep 2020</Date>
                <Logo src="https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png" alt=''></Logo>  
            </div>

            <Button type="button">Case Study</Button>
            <Gift>Apple Gift</Gift>
            <Pay>Payment</Pay>

            <div style={secondDiv}>
                <Desktop>MacOS - Mobile</Desktop>
                <Arrow src='https://www.freeiconspng.com/uploads/right-arrow-icon-12.png' alt=''></Arrow>
            </div>
          
            </div>

        
        </>




    )
}

export default AppleCard ;