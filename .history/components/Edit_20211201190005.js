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
        <body>
            <div classNameName="container-fluid">
                <div classNameName="row mt-4">
                    <div classNameName="col-md-6">
                        <form>
                          <div className="form-group row">
                            <label htmlFor="inputPassword" className="col col-form-label">Name here: </label>
                            <div className="col-sm-10">
                              <input type="text" className="form-control" id="inputPassword" placeholder="Name" value={name} onChange={e => setname(e.target.value)}/>
                            </div>
                          </div>
                          <div className="form-group row">
                            <label htmlFor="inputPassword" className="col-4 col-form-label">Heading Color: </label>
                            <div className="col-sm-3">
                              <input type="color" className="form-control" id="inputPassword" placeholder="Name" value={headingColor} onChange={e => sethead(e.target.value)}/>
                            </div>
                          </div>
                          <div className="form-group row">
                            <label htmlFor="inputPassword" className="col-4 col-form-label">Background Color: </label>
                            <div className="col-sm-3">
                              <input type="color" className="form-control" value={color} onChange={e => setcolor(e.target.value)}/>
                            </div>
                          </div>
                          <div className="form-group row">
                            <label htmlFor="inputPassword" className="col col-form-label">Message: </label>
                            <div className="col-sm-10">
                              <textarea placeholder="Edit your text here" rows="8" cols="45" value={message} onChange={e => setmessage(e.target.value)} />
                            </div>
                          </div>
                          <div className="form-group row">
                            <label htmlFor="inputPassword" className="col-4 col-form-label">Content Color: </label>
                            <div className="col-sm-3">
                              <input  type="color" className="form-control" value={contentColor} onChange={e => setcontent(e.target.value)} />
                            </div>
                          </div>
                          <div className="form-group row">
                            <label htmlFor="inputPassword" className="col col-form-label">Conclusion: </label>
                            <div className="col-sm-10">
                              <input placeholder="Final note" value={to} onChange={e => settowhom(e.target.value)}/>
                            </div>
                          </div>
                        </form>

                        <div className="d-flex justify-content-around flex-wrap" >
                        <button onClick={()=>setime(imgs)}> 
                          <IMAGE src='../public/images/christmas/christmas.png' width={200} height={100} />             
                        </button>  
                        
                        <button onClick={()=>setime(imgs2)}>
                          <IMAGE src='../public/images/christmas/christmas1.png' width={100} height={100} />
                        </button> 
                        <button onClick={()=>setime(imgs3)}>
                          <IMAGE src={Img3} width={100} height={100} />             
                        </button> 

                        <button onClick={()=>setime(imgs3)}>
                          <IMAGE src={Img4} width={100} height={100} />             
                        </button> 
                        
                            </div>
                    </div>
              
                    <div classNameName="col-md-6">
                        <div classNameName="container" id="con">
                            <InvitationCard name={name} heading={headingColor} c={color} message={message} content={contentColor} to={to} ref={componentRef} im={ime}/>
                        </div>
                    </div>
                </div>
                
            </div>
        </body>
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



 