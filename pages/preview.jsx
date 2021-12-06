import React from 'react'
import Card from "../components/card";
import {useRouter} from 'next/router';

const Preview = (props) => {

  const {query} = useRouter();

    return (
        <>
            <Card event={query.event} bgImage={query.bgImg} name={query.name} greeting={query.greeting}  />
        </>
    );
}

export default Preview;
