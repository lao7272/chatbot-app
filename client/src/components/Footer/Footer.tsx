import React, {FormEvent, useState} from 'react';

export default function Form() {
    const [message, setMessage] = useState<FormDataEntryValue | null>(null);
    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData:FormData = new FormData(e.currentTarget);
        const text: FormDataEntryValue | null = formData.get("text");
        if(text === '') return;
        setMessage(text);
        console.log(text)
        e.currentTarget.reset();
    }
    return (
        <div className='chat-footer'>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" name='text' placeholder='Type a message'/><button type='submit'>&#10148;</button>
            </form>
        </div>
    )
}
