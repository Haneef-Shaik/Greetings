import React from 'react'
import Card from "../components/card";
import {useRouter} from 'next/router';
import Modal from "react-modal";

const Preview = (props) => {

  const {query} = useRouter();
 const modalstyle = [
{
        overlay: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            backgroundColor: 'transparent',
            padding:'0'
        },
        content: {
            position: 'absolute',
            border: '1px solid red',
            backgroundColor: 'transparent',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '4px',
            outline: 'none',
        }
    }
    ];
      if(seconds/1000 < 2)
    {

        return (
            <>
                <Card event={query.event} bgImage={query.bgImg} name={query.name} greeting={query.greeting}  />
            </>
            )
    }
    else
    {
        return (
            <>

            <Card event={query.event} bgImage={query.bgImg} name={query.name} greeting={query.greeting}  />
            
            <Modal 
                isOpen={isOpen}
                onRequestClose={toggleModal}
                contentLabel="My dialog"
                style={modalstyle}
                >
                    <SS mylink={`/display?event=${festivalName}&name=${UserName}&bgImg=${IMG1} `} />
            </Modal>

            
            </>
      

    )
}

export default Preview;
