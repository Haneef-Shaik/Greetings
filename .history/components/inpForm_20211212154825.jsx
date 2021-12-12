import React, {useState,useRef} from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import IMAGE from 'next/image';
import styles from '../styles/form.module.scss';
import SELECT from 'react-select';
import Link from 'next/link'
import SS from '../components/socialShare'


import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';



const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function Edit() {
    const festivals=[

        {label: 'Christmas',value: 'christmas'},
        {label: 'New Year',value: 'newYear'}
    ];

    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


    const [desc,setDesc]=useState("");
    const [UserName,setName]=useState("");
    const [festivalName,setFestivalName]=useState(festivals[0].value);
    const [IMG1,setImg]=useState("1");


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
        lineHeight:'2.6rem',
    }),

    option: (provided,state) => ({
        ...provided,
        margin:'0',
        padding:'0',
        textAlign:'center',
        fontFamily: 'Times New Roman',
        fontSize:'1.6rem',
        border:'none',
        backgroundColor:'#fff',
        borderRadius:'15px',
        boxShadow:'inset 4px -4px 0px #EABC32',
        lineHeight:'2.6rem',
        marginTop:'10px',
        color:'#000'
    }),
    placeholder: (provided, state) => ({
        ...provided,
        color:'#000',
        boxShadow:'none'
    })

}




    return (
        <div className="container-fluid p-2 "  style={{backgroundColor:'#EABC32',minHeight:'100vh'} }>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className={styles.formContainer} >
                            <form className="formStyle p-0">
                                <input type="text" value={UserName} placeholder="Enter Your Name" className={styles.myInp} onChange= { (e)=>{setName(e.target.value) } } required/>
                                
                                <SELECT  
                                    styles={customStyles}
                                    options={festivals}  
                                    defaultValue={festivals[0]}
                                    onChange= { (e)=>{setFestivalName(e.value)} }
                                    className={styles.myInp}
                                    classNamePrefix="festival"
                                    placeholder="EVENT"
                                    autoFocus
                                    isSearchable
                                    
                                />
                                <input type="text" value={desc} placeholder="Description" className={styles.myInp} onChange= { (e)=>{setDesc(e.target.value)} } optional="true" />
                                
                                <div className="d-flex justify-content-around align-items-center flex-wrap mt-4" style={{backgroundColor:'darkgrey',borderRadius:'15px',padding:'10px'}}>
                                

                                    {/* <IMAGE className={styles.btnhighlight} onClick={(e)=>{setImg('1' )}} src={`/images/${festivalName}/1.webp`} width="120" height="150" loading='eager' priority/>                       
                                    <IMAGE className={styles.btnhighlight} onClick={(e)=>{setImg('2' )}} src={`/images/${festivalName}/2.webp`} width="120" height="150" loading='eager' priority/>                       
                                    <IMAGE className={styles.btnhighlight} onClick={(e)=>{setImg('3' )}} src={`/images/${festivalName}/3.webp`} width="120" height="150" loading='eager' priority/>                       
                                    <IMAGE className={styles.btnhighlight} onClick={(e)=>{setImg('4' )}} src={`/images/${festivalName}/4.webp`} width="120" height="150" loading='eager' priority/>                        */}


                                <button   checked className={styles.btnhighlight} onClick={(e)=>{e.preventDefault();setImg('1' )}}>
                                    <IMAGE  src={`/images/${festivalName}/1.webp`} width="120" height="150" loading='eager' priority/>
                                </button> 
                                
                                <button  className={styles.btnhighlight} onClick={(e)=>{e.preventDefault();setImg('2' )}}>
                                    <IMAGE  src={`/images/${festivalName}/2.webp`} width="120" height="150" loading='eager' priority/>

                                </button> 
                                
                                <button  className={styles.btnhighlight} onClick={(e)=>{e.preventDefault();setImg('3' )}}>
                                <IMAGE  src={`/images/${festivalName}/3.webp`} width="120" height="150" loading='eager' priority/>

                                </button> 
                                
                                <button  className={styles.btnhighlight} onClick={(e)=>{e.preventDefault(); setImg('4' )}}>
                                <IMAGE  src={`/images/${festivalName}/4.webp`} width="120" height="150" loading='eager' priority/>

                                </button> 
                                
                                
                                </div>

                                <div className="footerBanner p-2 m-0 d-flex justify-content-around" style={{width: '100%'}}>
                                    <button type="submit" className="px-4 py-2" style={{backgroundColor:'#EABC32',boxShadow:'inset 4px -4px 8px #f0f0f0',width:'100%',borderRadius:'5px',color:'#000' }} > 
                                    <Link href={`/preview?event=${festivalName  }&name=${ UserName==null?"name":UserName }&bgImg=${IMG1} `} style={{backgroundColor:'#00f',width:'100%',height:'100%'}}>
                                        <a style={{textDecoration: 'none',color:'#000',fontFamily:'Times New Roman',fontWeight:'bold',fontSize:'1.5rem',backgroundColor:'red',width:'100%',height:'100%'}}> Preview </a></Link> </button>
                                    {/* <button className="px-4 py-2"  >  Share </button> */}

                                    <Button variant="outlined" onClick={handleClickOpen} style={{backgroundColor:'#EABC32',boxShadow:'inset 4px -4px 8px #f0f0f0',width:'100%',borderRadius:'5px',color:'#000' }} >Share</Button>
                                        <Dialog
                                            open={open}
                                            TransitionComponent={Transition}
                                            keepMounted
                                            onClose={handleClose}
                                            aria-describedby="alert-dialog-slide-description"
                                        >
                                        <DialogTitle>{"Share Link"}</DialogTitle>
                                        <DialogContent>
                                                <DialogContentText>Click the link to Copy to Clipboard </DialogContentText>
                                        </DialogContent>
                                        
                                            <SS mylink={`/display?event=${festivalName}&name=${UserName}&bgImg=${IMG1} `} />
                                        
                                        </Dialog>
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
