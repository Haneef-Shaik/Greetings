import React,{useState,useEffect} from 'react'
import Card from "../components/card";
import { useRouter } from 'next/router';
import LINK from 'next/link';
import Modal from "react-modal";

import SS from '../components/socialShare'


import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

export default function Home() {
    const {query} = useRouter();

    const [seconds, setSeconds] = useState(0);

    const [isOpen, setIsOpen] = useState(true);

    function toggleModal() {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds + 1000);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

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


}







