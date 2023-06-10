import {ChangeEvent, FormEvent, KeyboardEvent, useState, useRef, useEffect, RefObject} from 'react';
import "./Footer.css";
import {FooterProps, Message} from "../../constants"

export default function Footer({handleSetMessage, handleSetResponse, response}: FooterProps) {
    const [message, setMessage] = useState<string>('');
    const textareaRef:RefObject<HTMLTextAreaElement> = useRef(null);
    useEffect(() => {
        const textarea = textareaRef.current;
        if(!textarea) return;
        textarea.style.height = "auto";
        const height = textarea.scrollHeight;
        textarea.style.height = `${height}px`;
    }, [message])
    
    function handleChange (e: ChangeEvent<HTMLTextAreaElement>) {
        const text = e.currentTarget.value;
        setMessage(text);
    }
    function handleSubmit(e?: FormEvent<HTMLFormElement>) {
        if(message.trim() === "") return;
        const newMessage: Message = {
            role: "user",
            content: message,
            timestamp: new Date()
        }
        handleSetMessage(newMessage);
        handleSetResponse(true);
        setMessage("");
        if(!e) return;
        e.preventDefault();
        e.currentTarget.reset();
    }
    function preventEnter (e: KeyboardEvent<HTMLTextAreaElement>) {
        if(e.key === "Enter" && e.shiftKey) return;
        if(e.key === "Enter" && !response) {
            e.preventDefault()
            e.currentTarget.value = "";
            handleSubmit();
        } else if(e.key === "Enter") {
            e.preventDefault();
        }
        
    }
    return (
        <div className='chat-footer'>
            <form onSubmit={(e) => handleSubmit(e)}>
                <textarea ref={textareaRef} onChange={(e) => handleChange(e)} onKeyDown={e => preventEnter(e)} placeholder='Type a message'></textarea>
                {!response ? 
                <button type='submit'><p>&#10148;</p></button> : 
                <div className="chat-typing"></div>
                }
                
            </form>
        </div>
    )
}
