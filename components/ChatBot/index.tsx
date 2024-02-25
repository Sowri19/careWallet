// ChatBot.js

import React, { useState } from 'react';
import axios from 'axios';
import { Input, Button, Response } from './styles';

const ChatBot = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const sendMessage = async () => {
    try {
      const res = await axios.post('https://your-api-url.com', { message });
      setResponse(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button onClick={sendMessage}>Send</Button>
      <Response>{response}</Response>
    </div>
  );
};

export default ChatBot;
