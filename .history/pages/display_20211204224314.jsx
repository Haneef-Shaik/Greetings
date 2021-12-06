import React from 'react'
import Card from "../components/card.js";
import {useRouter} from 'next/router';

export default function Home() {
    const {query} = useRouter();
    const myurls='./images/christmas/christmas1.webp';
return (
    <>
    <h1>Hello</h1>
    <Card event={query.event} image={query.bgImg} name={query.name} bgImage={query.bgImg}  />
    </>
    )
}