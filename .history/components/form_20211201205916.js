/* eslint-disable no-undef */
import React, {useState,useRef} from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/form.module.scss';
import IMAGE from 'next/image'


function Edit() {

    const [IMG1,setImg]=useState('');


    return (
        <div className="container-fluid p-2 "  style={{backgroundColor:'#4C4C4C'} }>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className={styles.formContainer} >
                            <form className="formStyle">
                                <input type="text" placeholder="Enter Your Name" className="col-12" required />

                                <select name="festival" className="col-12 p-2">
                                    <option value="christmas">Christmas</option>
                                    <option value="newYear">New Year</option>
                                </select>

                                <input type="text" placeholder="Description" className="col-12" optional />
                                <div className="d-flex justify-content-around align-items-center flex-wrap">
                                    {/* <label htmlFor="img1">
                                        <IMAGE src='/images/christmas/christmas.png' width={200} height={100} /> 
                                    </label>
                                    <label htmlFor="img2">
                                        <IMAGE src='/images/christmas/christmas.png' width={200} height={100} /> 
                                    </label>
                                    <label htmlFor="img3">
                                        <IMAGE src='/images/christmas/christmas.png' width={200} height={100} /> 
                                    </label>
                                    <label htmlFor="img4">
                                        <IMAGE src='/images/christmas/christmas.png' width={200} height={100} /> 
                                    </label>
                                    <input type="radio" name="BgImage" className="bgImg" id="img1" hidden="true" />
                                    <input type="radio" name="BgImage" className="bgImg" id="img2" hidden="true" />
                                    <input type="radio" name="BgImage" className="bgImg" id="img3" hidden="true" />
                                    <input type="radio" name="BgImage" className="bgImg" id="img4" hidden="true" /> */}

                                <button onClick={()=>setImg('christmas.png')}>
                                    <IMAGE src='/images/christmas/christmas.png' width="200" height="200" />                       
                                </button> 
                                
                                <button onClick={()=>setImg('christmas1.png')}>
                                    <IMAGE src='/images/christmas/christmas1.png' width="200" height="200" />                       
                                </button> 
                                
                                <button onClick={()=>setImg('christmas2.png')}>
                                    <IMAGE src='/images/christmas/christmas2.png' width="200" height="200" />                       
                                </button> 
                                
                                <button onClick={()=>setImg('christmas2.png')}>
                                    <IMAGE src='/images/christmas/christmas2.png' width="200" height="200" />                       
                                </button> 
                                
                                </div>
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



 