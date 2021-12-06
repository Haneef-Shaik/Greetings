import React from 'react'
import Card from "../components/card.js";
import {useRouter,useEffect} from 'next/router';
import FORM from '../components/inpForm'

export default function Home() {
    
    const [seconds, setSeconds] = useState();
    useEffect(() => {
        const interval = setInterval(() => {
          setSeconds(seconds => seconds - 1);
        }, 1000);
        return () => clearInterval(interval);
      }, []);
      if(seconds==0)
      {
        <FORM />
      }
return (
    <>
    <Card event={query.event} bgImage={query.bgImg} name={query.name} greeting={query.greeting}  />
    </>
    )
}