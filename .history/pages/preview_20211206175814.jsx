import React,{useState,useEffect} from 'react'
import { RecordCircleFill } from 'react-bootstrap-icons';
import Card from "../components/card";
const Preview = (props) => {
    return (
        <>
            <Card event={query.event} bgImage={query.bgImg} name={query.name} greeting={query.greeting}  />
        </>
    );
}

export default Preview;
