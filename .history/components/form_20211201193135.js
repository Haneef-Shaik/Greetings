/* eslint-disable no-undef */
import React, {useState,useRef} from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/card.module.scss';
import IMAGE from 'next/image'


function Edit() {
    return (
        <div className="container-fluid  p-5 bg-dark " >
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className={styles.formContainer} >
                            <form>
                                <input type="text" placeholder="Enter Your Name" className="col-12" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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



 