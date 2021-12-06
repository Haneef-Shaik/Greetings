import React,{useState,useEffect} from 'react'
import Card from "../components/card.js";
import { useRouter } from 'next/router';
import LINK from 'next/link';
import Modal from "react-modal";

export default function Home() {
    const {query} = useRouter();
    
    // return (
    //     <>
    //     <Card event={query.event} bgImage={query.bgImg} name={query.name} greeting={query.greeting}  />
    //     </>
    //     )

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
            <LINK href="/create" style={{position:'absolute',top:'50px'}} ><a>Create for You</a></LINK>
            
            </>
        )
    }


}

