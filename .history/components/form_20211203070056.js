/* eslint-disable no-undef */
import React, {useState,useRef} from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/form.module.scss';
import IMAGE from 'next/image';
import SELECT from 'react-select';

function handleChange(e)
{
    this.setState({value: event.target.value});
}

function Edit() {

    const customStyles = {
            control: (provided,state) => ({
            ...provided,
            margin:'0',
            padding:'0',
            textAlign:'center',
            fontFamily: 'Times New Roman',
            fontSize:'1.6rem',
            border:'none',
            backgroundColor:'#fff',
            borderRadius:'15px',
            boxShadow:'inset 4px -4px 0px #EABC32 ',
            lineHeight:'3rem',

        }),
        
        input:(provided, state)=>({
            ...provided,
            borderRadius:'15px'
        }),

        placeholder: (provided, state) => ({
            ...provided,
            color:'#707070',
            boxShadow:'none'
        })

    }

    const [UserName,setName]=useState('');
    const [festival,setFestival]=useState('christmas');
    const [IMG1,setImg]=useState('christmas.png');

    const Festivals=[

        {label: 'christmas',value: 'christmas'},
        {label: 'New Year',value: 'newYear'}

    ];

    return (
        <div className="container-fluid p-2 "  style={{backgroundColor:'#4C4C4C'} }>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className={styles.formContainer} >
                            <form className="formStyle p-0">
                                <input type="text" placeholder="Enter Your Name" className="col-12" required />

                                <SELECT className="col-12 m-0 festival" classNamePrefix="festival"  options={Festivals} styles={customStyles}  value={festival} onClick={(e)=> {setFestival(e.target.value) }}/>

                                <input type="text" placeholder="Description" className="col-12" optional />
                                
                                <div className="d-flex justify-content-around align-items-center flex-wrap mt-4" style={{backgroundColor:'darkgrey',borderRadius:'15px',padding:'10px'}}>
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

                                <button onClick={()=>setImg('christmas.png')} className="btn p-1" checked>
                                    <IMAGE src='/images/christmas/christmas.webp' width="120" height="150" loading='eager' priority/>                       
                                </button> 
                                
                                <button onClick={()=>setImg('christmas1.png')} className="btn p-1">
                                    <IMAGE src='/images/christmas/christmas1.webp' width="120" height="150" loading='eager' priority/>                       
                                </button> 
                                
                                <button onClick={()=>setImg('christmas2.png')} className="btn p-1">
                                    <IMAGE src='/images/christmas/christmas2.webp' width="120" height="150" loading='eager' priority/>                       
                                </button> 
                                
                                <button onClick={()=>setImg('christmas2.png')} className="btn p-1">
                                    <IMAGE src='/images/christmas/christmas2.webp' width="120" height="150" loading='eager' priority/>                       
                                </button> 
                                
                                </div>

                                <div className="footerBanner p-2 m-0 d-flex justify-content-around" style={{width: '100%'}}>
                                    <button className="px-4 py-2" style={{backgroundColor:'#EABC32',boxShadow:'inset 4px -4px 8px #f0f0f0',width:'100%',borderRadius:'5px',color:'#000' }} > Preview</button>
                                    <button className="px-4 py-2" style={{backgroundColor:'#EABC32',boxShadow:'inset 4px -4px 8px #f0f0f0',width:'100%',borderRadius:'5px',color:'#000' }} > Create Link </button>
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



 