import React from 'react';
import { ImageContainer } from './styles';
import ChatBot from '../../components/ChatBot/index';

const Home: React.FC = () => {
  return (
    <ImageContainer>
      <ChatBot />
    </ImageContainer>
  );
};

export default Home;
