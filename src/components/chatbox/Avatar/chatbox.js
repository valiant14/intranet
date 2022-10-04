import React from "react";

import { styles } from "./styles";
import Chatboxs from "../Chatbox";
const ChatBox = props => {
    return (
        <div 
            className='transition-5'
            style={{
                ...styles.supportWindow,
                ...{ opacity: props.visible ? '1' : '0' }
            }}
        >
        <Chatboxs />
        </div>
    )
}

export default ChatBox;