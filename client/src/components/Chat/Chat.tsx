import Footer from '../Footer/Footer'
import BodyMessage from '../BodyMessage/BodyMessage'
import "./Chat.css"
import Header from '../Header/Header'
import { ChatProps } from '../../constants'

export default function Chat({handleSetMessage, messages, handleSetResponse, response}: ChatProps) {
    return (
        <div className='chat'>
            <Header />
            <BodyMessage messages={messages}/>
            <Footer handleSetMessage={handleSetMessage} handleSetResponse={handleSetResponse} response={response}/>
        </div>
    )
}
