import React from "react";
import bulboff from './off.png'
import nature from "./on.png";
import './bulbstyle.css';
export default class Bulb extends React.Component{
    constructor(){
        super();
        this.state={status:'false'};
        this.callOn=this.callOn.bind(this);
        this.callOff=this.callOff.bind(this);
    }
    callOn(){
      
         this.setState({status:false});
  }
    callOff(){
         
            this.setState({status:true});
         
    }
      render(){

        return(
            <div className="container">
                 <div className="content">
                  <h1> hello </h1>
                 <button onClick={this.callOn}>ON</button>
               <img src={this.state.status ? bulboff:nature} width={300} height={300}/>
               <button onClick={this.callOff}>OFF</button>
               </div>
            </div>
        );
      }
}