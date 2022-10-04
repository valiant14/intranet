import React, { useState } from "react";
import styled from "@emotion/styled";

const InputContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 20px;
  color: dimgray;
`;

const Input = styled.input`
  flex-grow: 1;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 10px 20px;
  border: none;
  font-size: 18px;
  color: dimgray;
  outline: none;
`;

const SubmitButton = styled.button`
  cursor: pointer;
  width: 150px;
  color: white;
  background-color: #235090;
  border-top-right-radius: 10px;
  border: none;
  padding: 10px 20px;
  outline: none;
`;

export default function InputBox({ onSubmit, isTyping, setIsTyping }) {
  const [currentValue, setCurrentValue] = useState("");

  const resetInput = () => {
    setCurrentValue("");
    setIsTyping((prevState) => ({ ...prevState, user: false }));
  };

  const handleInputChange = ({ target }) => {
    setCurrentValue(target.value);

    if (target.value.length > 0 && !isTyping.user) {
      setIsTyping((prevState) => ({ ...prevState, user: true }));
    }

    if (target.value.length === 0 && isTyping.user) {
      setIsTyping((prevState) => ({ ...prevState, user: false }));
    }
  };

  const handleInputKeyup = ({ key }) => {
    if (key === "Enter") {
      onSubmit(currentValue);
      resetInput();
    }
  };

  const handleSubmitButtonClick = () => {
    onSubmit(currentValue);
    resetInput();
  };

  return (
    <InputContainer>
      <Input
        onChange={handleInputChange}
        onKeyUp={handleInputKeyup}
        value={currentValue}
        placeholder="Write your message here..." 
      />
      <SubmitButton onClick={handleSubmitButtonClick}>
        Send
        {/* <span role="img" aria-label="send">
          ↗️
        </span> */}
      </SubmitButton>
    </InputContainer>
  );
}
