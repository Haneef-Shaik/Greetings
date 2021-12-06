import React,{useState,useEffect} from 'react'
import Card from "../components/card.js";
import FORM from '../components/inpForm'
import { useRouter } from 'next/router';
export default function Home() {
    const {query} = useRouter();
    
    return (
        <>
        <Card event={query.event} bgImage={query.bgImg} name={query.name} greeting={query.greeting}  />
        </>
        )




}

