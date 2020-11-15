import React from 'react'
import styled from 'styled-components'

const MessageContainer = styled.div`
padding: 5px;
    width: 33%;
    border: 3px solid "black";
    font-size: 0.9em;
    background-color: ${props => props.theme.colors.white};
`

const Chat = () => {
    return (
        <>
            <div>
                <MessageContainer>
                    <ul>
                      <li><b>username:</b> Chat Message</li>
                      <li><b>username:</b> Chat Message</li>
                      <li><b>otherUser:</b> Chat Message</li>
                      <li><b>username:</b> Chat Message</li>
                    </ul>
                </MessageContainer>
                <div>
                    <input type='text' placeholder='chat/guess ...'></input>
            
                </div>
            </div>
        </>
    )
}

export default Chat