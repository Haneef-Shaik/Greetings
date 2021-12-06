import React, {useState,useRef} from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import IMAGE from 'next/image';
import Select from 'react-select';
import styles from '../styles/form.module.scss';

const { Option } = Select;

function frame(e)
{
    setMyFrame('none')
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
            lineHeight:'2.5rem',
            marginTop:'2rem'
        }),
        
        '#react-select-26-input':(provided, state)=>({
            ...provided,
            borderRadius:'50px',
            boxShadow:'none'
        }),

        placeholder: (provided, state) => ({
            ...provided,
            color:'#707070',
            boxShadow:'none'
        })

    }

    const [myFrame,SetMyFrame]=useState('none');
    const [UserName,setName]=useState('');
    const [festival,setFestival]=useState('christmas');
    const [IMG1,setImg]=useState('christmas.png');

    const Festivals=[

        {label: 'Christmas',value: 'christmas'},
        {label: 'New Year',value: 'newYear'}

    ];

    const handleChange = (e) => {
        setFestival({ festival: e.target.value });
        console.log(festival);
      };
    

    return (
        <div className="container-fluid p-2 "  style={{backgroundColor:'#4C4C4C'} }>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className={styles.formContainer} >
                            <form className="formStyle p-0">
                                <input type="text" placeholder="Enter Your Name" className={styles.myInp} required />
                                
                                <Select value={festival} options={FESTIVALS} onChange={handleChange} />
                                <input type="text" placeholder="Description" className={styles.myInp} optional />
                                
                                <div className="d-flex justify-content-around align-items-center flex-wrap mt-4" style={{backgroundColor:'darkgrey',borderRadius:'15px',padding:'10px'}}>
                                

                                <button onClick={()=>setImg('christmas.png')} className="btn p-1 btnhighlight" checked >
                                    <div onClick={(event)=>event.target.style.border = '5px solid blue'} className="MyImgCon">
                                        <IMAGE src='/images/christmas/christmas.webp' width="120" height="150" loading='eager' priority/>                       
                                    </div>
                                </button> 
                                
                                <button onClick={()=>setImg('christmas1.png')} className="btn p-1 btnhighlight">
                                    <div onClick={(event)=>{frame;event.target.style.border = '5px solid blue';}}>

                                    <IMAGE src='/images/christmas/christmas1.webp' width="120" height="150" loading='eager' priority/>                       
                                    </div>
                                </button> 
                                
                                <button onClick={()=>setImg('christmas2.png')} className="btn p-1 btnhighlight" >
                                    <IMAGE src='/images/christmas/christmas2.webp' width="120" height="150" loading='eager' priority/>                       
                                </button> 
                                
                                <button onClick={()=>setImg('christmas2.png')} className="btn p-1 btnhighlight">
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

export default Edit;
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