import React, { useState, useEffect, useRef } from "react";
import styled from "@emotion/styled";
import axios from "axios";
import _ from "lodash";

import Ellipsis from "./Ellipsis";
import Inputbox from "./Inputbox";
import Greetings from "../../data/greetings";
import Emojis from "../../data/emojis";

const Header = styled.h1`
  text-align: center;
  color: white;
  height: 5rem;
  margin: 0;
  padding: 10px 0;
  background-color: #235090;
  box-shadow: 0 5px 5px darkgray;
  position: relative;
`;

const Body = styled.section`
  position: relative;
  height: 100%;
  background-color: whitesmoke;
`;

const ChatBubble = styled.div`
  text-align: left;
  background-color: white;
  color: dimgray;
  font-size: 16px;
  padding: 15px 20px;
  margin: 20px;
  max-width: 400px;
  width: fit-content;
  border-radius: 20px;
  border-bottom-left-radius: 0px;
`;

const UserChatBubble = styled(ChatBubble)`
  background-color: lightgray;
  border-radius: 20px;
  border-bottom-right-radius: 0px;
  margin-left: auto;
`;

const ChatContainer = styled.section`
  color: darkgray;
  font-size: 12px;
  text-align: center;
  padding-top: 10px;
  height: calc(100% - 130px);
  overflow: auto;
`;

export default function Chatboxs() {
  const [firstMessage, setFirstMessage] = useState(true);
  const [chats, setChats] = useState([]);
  const [isTyping, setIsTyping] = useState({ user: false, chat: false });
  const chatContainerRef = useRef();
  const date = new Date().toLocaleTimeString();
  const timestamp = `${date.slice(0, 4)} ${date
    .slice(8, 10)
    .toLocaleLowerCase()}`;

  useEffect(() => {
    const {
      clientHeight: containerHeight,
      scrollHeight
    } = chatContainerRef.current;

    if (scrollHeight > containerHeight) {
      chatContainerRef.current.scroll({ top: scrollHeight });
    }
  }, [chats, chatContainerRef, isTyping]);

  const respondBack = (message) => {
    setIsTyping((prevState) => ({ ...prevState, chat: false }));
    setChats((prevState) => [...prevState, { user: false, content: message }]);
  };

  // chat response
  const chatReponse = _.debounce(() => {
    if (firstMessage) {
      setFirstMessage(false);
      respondBack(Greetings[Math.floor(Math.random() * Greetings.length)]);
    } else {
      axios("https://api.adviceslip.com/advice").then((res) => {
        const message = res.data.slip.advice;
        const emoji = Emojis[Math.floor(Math.random() * Emojis.length)];
        respondBack(`${message} ${emoji}`);
      });
    }
  }, 2000);

  const handleInputSubmit = (value) => {
    setIsTyping({ user: false, chat: true });

    if (value.length > 0) {
      setChats((prevState) => [...prevState, { user: true, content: value }]);
      chatReponse();
    }
  };

  return (
    <Body>
      <Header>
        ChatBox&nbsp;
        {/* <Ellipsis color="black" size="7" /> */}
      </Header>
      <ChatContainer ref={chatContainerRef}>
        {timestamp}
        {chats.map((chat, i) =>
          chat.user ? (
            <UserChatBubble key={i}>{chat.content}</UserChatBubble>
          ) : (
            <ChatBubble key={i}>{chat.content}</ChatBubble>
          )
        )}
        {isTyping.chat && (
          <ChatBubble>
            <Ellipsis color="darkgray" size="5" />
          </ChatBubble>
        )}
        {isTyping.user && (
          <UserChatBubble>
            <Ellipsis color="darkgray" size="5" />
          </UserChatBubble>
        )}
      </ChatContainer>
      <Inputbox
        onSubmit={handleInputSubmit}
        isTyping={isTyping}
        setIsTyping={setIsTyping}
      />
    </Body>
  );
}
