import React, { useState } from 'react';
import axios from 'axios';
import {
  Input,
  Button,
  MessagesContainer,
  Message,
  Response,
  ChatContainer,
  InputContainer,
  Title,
} from './styles';

interface Conversation {
  message: string;
  response: string;
}

const ChatBot = () => {
  const [message, setMessage] = useState('');
  const [conversations, setConversations] = useState<Conversation[]>([]);

  const sendMessage = async () => {
    try {
      const res = await axios.post('https://your-api-url.com', { message });
      setConversations([...conversations, { message, response: res.data }]);
      setMessage('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ChatContainer>
      <MessagesContainer>
        {conversations.length === 0 && <Title>TRAVEL BUDDY</Title>}
        {conversations.map((conv, index) => (
          <React.Fragment key={index}>
            <Message>User: {conv.message}</Message>
            <Response>Bot: {conv.response}</Response>
          </React.Fragment>
        ))}
      </MessagesContainer>
      <InputContainer>
        <Input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <Button onClick={sendMessage}>Send</Button>
      </InputContainer>
    </ChatContainer>
  );
};

export default ChatBot;
