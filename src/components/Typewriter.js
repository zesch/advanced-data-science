import React, { useEffect, useState } from 'react';

const Typewriter = ({texts, typingSpeed=10}) => {

    const [fullText, setFullText] = "moped";
    const [caret, setCaret]
    const [mode, setMode] = useState('type');

    const type = () => {

    }

    const remove = () => {

    }
    useEffect(()=>{
        const interval = setInterval(() => {
            setSubtitle(randomTagline);
        }, typingSpeed)
        return () => clearInterval(interval);
    })
    
    
    return (
        <div>{typedText}</div>
    )
}