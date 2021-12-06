/* eslint-disable no-undef */
import React, {useState,useRef} from 'react'
import '../styles/style.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import IMAGE from 'next/image'


function Edit() {
    return (
        <>
            <div className="formContainer container">
                
            </div>
        </>
    )
}


class InvitationCard extends React.Component{
    render(){
        return (
            
                <div className="body p-2" style={{backgroundColor: this.props.c,backgroundImage:`url(${this.props.im})`,backgroundSize:350,backgroundRepeat:'no-repeat'}} >
                    <h1 id="heading" style={{color: this.props.heading}}>{this.props.name}</h1>
                    <p style={{marginTop: "50px",color: this.props.content}}>{this.props.message}</p>
                    <p style={{color: this.props.content}} id="toWhom">{this.props.to}</p>
                </div>
        )
    }
    
}



export default Edit;



 