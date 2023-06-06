import React from 'react';
import "./BodyMessage.css";
import { BodyMessageProps, Message } from "../../constants"
export default function BodyMessage({messages}: BodyMessageProps) {
    return (
        <div className='chat-body'>
            {messages.map((msg: Message, i: number) => {
                const msgClass = ["msg", `${msg.sender}-msg`].join(" ");
                return <div key={i} className={msgClass}>{msg.content}</div>
            })}
        </div>
    )
}
