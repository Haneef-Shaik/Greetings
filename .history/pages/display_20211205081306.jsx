import React from 'react'
import Card from "../components/card.js";
import {useRouter} from 'next/router';

export default function Home() {
    const {query} = useRouter();
return (
    <>
    <Card event={query.event} bgImage={query.bgImg} name={query.name} greeting={query.greeting}  />
    </>
    )
}