import React from 'react'
import Footer from '../Footer/Footer'
import BodyMessage from '../BodyMessage/BodyMessage'
import "./Chat.css"
import Header from '../Header/Header'

export default function Chat() {
    return (
        <div className='chat'>
            <Header/>
            <BodyMessage/>
            <Footer/>
        </div>
    )
}
