import React, { useState } from 'react'
import Footer from '../Footer/Footer'
import BodyMessage from '../BodyMessage/BodyMessage'
import "./Chat.css"
import Header from '../Header/Header'
import { Message } from '../../constants'

export default function Chat() {
    const [messages, setMessages] = useState<Message[]>([]);
    function handleSetMessage(newMessage: Message) {
        setMessages((currMessages: Message[]) => {
            const updatedMessages = [...currMessages, newMessage];
            return updatedMessages;
        });
    }
    return (
        <div className='chat'>
            <Header />
            <BodyMessage messages={messages}/>
            <Footer handleSetMessage={handleSetMessage} />
        </div>
    )
}
