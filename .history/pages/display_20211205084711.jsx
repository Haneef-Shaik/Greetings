import React,{useState,useEffect} from 'react'
import Card from "../components/card.js";
import FORM from '../components/inpForm'

export default function Home() {
    
        const [seconds, setSeconds] = useState(0);
            useEffect(() => {
            const interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
            }, 5000);
        return () => clearInterval(interval);
        }, []);

        if(seconds<4000)
        {
            return (
                <>
                <Card event={query.event} bgImage={query.bgImg} name={query.name} greeting={query.greeting}  />
                </>
                )
        }
        else{
            return (
                <>
                <Card event={query.event} bgImage={query.bgImg} name={query.name} greeting={query.greeting}  />
                </>
                )
        }




}

