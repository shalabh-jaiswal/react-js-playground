const Greeting = (props: Message) : JSX.Element => {
    const {message, color} = props
    return(<p>Greetings from... from App... ${message}... {color}</p>)
}

type Message = {message: string, color?: string}

export default Greeting