import React, { useState } from 'react';
import axios from 'axios';
import useSWR from 'swr';

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

// SWR fetcher function
const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const ChatBot = () => {
  const [message, setMessage] = useState('');
  const [conversations, setConversations] = useState<Conversation[]>([]);

  // Use SWR to fetch initial conversations or chat history
  const { data, error, mutate } = useSWR<Conversation[]>(
    'https://your-api-url.com/conversations',
    fetcher
  );

  // Update local state with SWR data on load
  React.useEffect(() => {
    if (data) {
      setConversations(data);
    }
  }, [data]);

  const sendMessage = async () => {
    try {
      const res = await axios.post('https://your-api-url.com/message', {
        message,
      });
      const newConversation = { message, response: res.data };

      // Update the local state
      setConversations((prev) => [...prev, newConversation]);

      // Optionally, revalidate the SWR data to keep it in sync
      mutate();

      // Clear the input field
      setMessage('');
    } catch (error) {
      console.error(error);
    }
  };

  if (error) return <div>Error loading conversations...</div>;
  if (!data) return <div>Loading...</div>;

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
