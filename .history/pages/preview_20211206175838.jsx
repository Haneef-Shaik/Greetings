import React from 'react'
import Card from "../components/card";
const Preview = (props) => {
    return (
        <>
            <Card event={query.event} bgImage={query.bgImg} name={query.name} greeting={query.greeting}  />
        </>
    );
}

export default Preview;
