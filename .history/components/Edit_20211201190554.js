/* eslint-disable no-undef */
import React, {useState,useRef} from 'react'
import '../styles/style.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Img1 from '../public/images/christmas/christmas.png'
import Img2 from '../public/images/christmas/christmas1.png'
import Img3 from '../public/images/christmas/christmas2.png'
import Img4 from '../public/images/christmas/christmas2.png'



import IMAGE from 'next/image'


function Edit() {
    const [name,setname]=useState("Name Here");
    const [color,setcolor]=useState();
    const [headingColor,sethead]=useState();
    const [contentColor,setcontent]=useState();
    const [message,setmessage]=useState("It’s the birthday of our beloved [name], and we want you to be with us during the spectacular celebration of the day. Please join us on [date] to share the joy.");
    const [to,settowhom]=useState("Let us have a blast, you're cordially invited");
    const [ime,setime]=useState(Img1);

    const [image1,setimage1] = useState({Img1});
    const [image2,setimage2] = useState({Img2});
    const [image3,setimage3] = useState({Img3});
    const [image4,setimage4] = useState({Img4});

  
    const componentRef = useRef();

    

    return (
        <>
        
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



 