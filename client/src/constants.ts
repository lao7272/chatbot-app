interface Message {
    role: string,
    content: string,
    timestamp: Date | string
}

interface ChatProps {
    messages: Message[];
    handleSetMessage: (newMessage: Message ) => void;
    handleSetResponse:(value: boolean) => void;
    response: boolean;
}
interface FooterProps {
    handleSetMessage: (newMessage: Message ) => void;
    handleSetResponse:(value: boolean) => void;
    response: boolean;
}
interface BodyMessageProps {
    messages: Message[];
}
export {
    type Message,
    type FooterProps,
    type BodyMessageProps,
    type ChatProps
}