import React,{useState,useEffect} from 'react'
import Card from "../components/card.js";
import { useRouter } from 'next/router';
import LINK from 'next/link';
import Popup from 'reactjs-popup';
import Modal from "react-modal";


export default function Home() {
    const {query} = useRouter();

    const [seconds, setSeconds] = useState(0);

    const [isOpen, setIsOpen] = useState(true);

    function toggleModal() {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds + 1000);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const modalstyle = [
{
        overlay: {
            header:'auto',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.75)'
        },
        content: {
            position: 'absolute',
            border: '1px solid #ccc',
            background: '#fff',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '4px',
            outline: 'none',
            padding: '20px'
        }
    }
    ];
    if(seconds/1000 < 5)
    {

        return (
            <>
                <Card event={query.event} bgImage={query.bgImg} name={query.name} greeting={query.greeting}  />
            </>
            )
    }
    else
    {
        return (
            <>

            <Card event={query.event} bgImage={query.bgImg} name={query.name} greeting={query.greeting}  />
            
            <Modal 
                isOpen={isOpen}
                onRequestClose={toggleModal}
                contentLabel="My dialog"
                style={}
                            >
                <LINK href="/create"><a className="btn btn-primary" style={{display:'inline-block',position:'absolute',top:'45%',width:'100%',fontSize:'2rem',testAlign:'center',transition:'.6s'}}>Create Your  Geetrings</a></LINK>
            </Modal>

            
            </>
        )
    }


}

