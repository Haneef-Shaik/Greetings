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
      }, 10000);
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="App">
        <header className="App-header">
          {seconds/1000} seconds have elapsed since mounting.
        </header>
      </div>
    );


}

