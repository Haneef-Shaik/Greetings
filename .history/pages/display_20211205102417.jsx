import React,{useState,useEffect} from 'react'
import Card from "../components/card.js";
import FORM from '../components/inpForm'
import { useRouter } from 'next/router';
export default function Home() {
    const {query} = useRouter();
    
    // return (
    //     <>
    //     <Card event={query.event} bgImage={query.bgImg} name={query.name} greeting={query.greeting}  />
    //     </>
    //     )



    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setSeconds(seconds => seconds + 1000);
      }, 1000);
      return () => clearInterval(interval);
    }, []);
  
    if(seconds/1000 < 8)
    {

        return (
            <>
                <Card event={query.event} bgImage={query.bgImg} name={query.name} greeting={query.greeting}  />
            </>
            );
    }
    else
    {
        <FORM/>
    }


}

