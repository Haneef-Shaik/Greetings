import React,{useState,useEffect} from 'react'
import Card from "../components/card.js";
import { useRouter } from 'next/router';
import LINK from 'next/link';
import Popup from 'reactjs-popup';

export default function Home() {
    const {query} = useRouter();

    const [seconds, setSeconds] = useState(0);

    const [isOpen, setIsOpen] = useState(false);

    function toggleModal() {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds + 1000);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

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
            
                <LINK href="/create"><a className="btn btn-primary" style={{display:'inline-block',position:'absolute',top:'50%',width:'100%',fontSize:'2rem'}}>Create Your  Geetrings</a></LINK>
            
            {/* <LINK href="/create" style={{position:'absolute',left: '30px'}} ><a className="btn btn-primary" style={{display:'inline-block',position:'absolute',top:'50%',width:'100%',fontSize:'2rem'}}>Create Your  Geetrings</a></LINK> */}
            
            </>
        )
    }


}

