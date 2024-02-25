import React from 'react';
import { StyledImage, ImageContainer } from './styles';

const Home: React.FC = () => {
  return (
    <ImageContainer>
      <StyledImage
        src="/assets/carewallet.png"
        alt="Description of the image"
      />
    </ImageContainer>
  );
};

export default Home;
