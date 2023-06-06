interface Message {
    sender: string,
    content: string,
    timeStamp: Date
}
interface FooterProps {
    handleSetMessage: (newMessage: Message ) => void;
}
interface BodyMessageProps {
    messages: Message[];
}
export {
    type Message,
    type FooterProps,
    type BodyMessageProps
}