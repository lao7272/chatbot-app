import React, {ChangeEvent, FormEvent, useState} from 'react';
import "./Footer.css";
import {FooterProps, Message} from "../../constants"

export default function Footer({handleSetMessage}: FooterProps) {
    const [message, setMessage] = useState<string>('');
    function handleChange (e: ChangeEvent<HTMLInputElement>) {
        const text = e.currentTarget.value;
        setMessage(text);
    }
    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if(message === "") return;
        const newMessage: Message = {
            sender: "user",
            content: message,
            timeStamp: new Date()
        }
        handleSetMessage(newMessage);
        setMessage("");
        e.currentTarget.reset();
    }
    return (
        <div className='chat-footer'>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input onChange={(e) => handleChange(e)} type="text" name='text' placeholder='Type a message'/>
                <button type='submit'><p>&#10148;</p></button>
            </form>
        </div>
    )
}
