import React, { useEffect, useState } from 'react';
import './App.css';
import Chat from './components/Chat/Chat';
import { Message } from './constants';

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [response, setResponse] = useState<boolean>(false);
  
  const getMessages = async () => {
    try {
      const options = {
        method: "POST",
        body: JSON.stringify({
          content: messages[messages.length -1].content
        }),
        headers: {
          "Content-Type": "application/json"
        }
      }
      const res = await fetch("http://localhost:8080/completion", options);
      const data: Message = await res.json();
      handleSetMessage(data);
      setResponse(false);
    } catch(err) {
      console.error(err);
    }
  }
  useEffect(() => {
    if(!response) return;
      getMessages();
  }, [messages])
  function handleSetMessage(newMessage: Message) {
    setMessages((currMessages: Message[]) => {
        const updatedMessages = [...currMessages, newMessage];
        return updatedMessages;
    });
  }
  function handleSetResponse(value: boolean) {
    setResponse(value)
  }
  return (
    <div className="app">
      <Chat handleSetMessage={handleSetMessage} messages={messages} handleSetResponse={handleSetResponse} response={response}/>
    </div>
  )
}

export default App;
