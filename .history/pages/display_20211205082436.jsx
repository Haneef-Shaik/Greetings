import React from 'react'
import Card from "../components/card.js";
import {useRouter} from 'next/router';
import FORM from '../components/inpForm'

export default function Home() {
    const {query} = useRouter();
    setTimeout(() => {
        return(
            <>

            </>
        )
    }, 3000);
return (
    <>
    <Card event={query.event} bgImage={query.bgImg} name={query.name} greeting={query.greeting}  />
    </>
    )
}