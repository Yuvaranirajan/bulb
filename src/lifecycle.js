import React from'react';
import natureimage from "./nature.jpg";
// import nature from "./nature1.jpg";
import { BsFacebook ,BsWhatsapp,BsTwitter,BsInstagram} from "react-icons/bs";
import "./style.css";
export default class LifeCycle extends React.Component{

    render(){
        return(
            <div className='container'>
                <img src={natureimage} alt='nature' width="300" height="300"/>
                {/* <button>load more <BsFacebook/></button> */}
                {/* <img src={nature} alt='nature' width="300" height="300"/> */}
                <div className='element'>
                    <p>Share me----<BsFacebook className='icon'/><BsWhatsapp className='icon'/><BsTwitter className='icon'/><BsInstagram className='icon'/></p>
                </div>
            </div>
        );
    }
}