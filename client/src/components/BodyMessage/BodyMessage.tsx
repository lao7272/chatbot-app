import React, { useEffect, useRef } from 'react';
import "./BodyMessage.css";
import { BodyMessageProps, Message } from "../../constants"
export default function BodyMessage({ messages }: BodyMessageProps) {
    const messagesRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const messagesContainer = messagesRef.current
        if (!messagesContainer) return;
        messagesContainer.scrollTo({
            top: messagesContainer.scrollHeight,
            behavior: 'smooth',
        });
    }, [messages]);
    return (
        <div ref={messagesRef} className='chat-body'>
            {messages.map((msg: Message, i: number) => {
                const msgClass = ["msg", `${msg.role}-msg`].join(" ");
                return <div key={i} className={msgClass}>{msg.content}</div>
            })}
        </div>
    )
}
