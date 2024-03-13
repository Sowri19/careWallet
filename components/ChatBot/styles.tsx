import styled from 'styled-components';

export const ChatContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;
export const Title = styled.h1`
  color: grey;
  padding: 20px;
  text-align: center;
  margin: 400px 0 0 0;
`;

export const MessagesContainer = styled.div`
  height: calc(100vh - 70px);
  overflow-y: auto;
  background-color: #121212;
  padding: 20px;
`;

export const Message = styled.div`
  background-color: #282828;
  color: #fff;
  margin-bottom: 10px;
  padding: 10px 15px;
  border-radius: 10px;
  max-width: 70%;
`;

export const Response = styled(Message)`
  background-color: #1e1e1e;
  margin-left: auto;
`;

export const InputContainer = styled.div`
  display: flex;
  padding: 10px;
  background-color: #222;
`;

export const Input = styled.input`
  width: calc(100% - 120px);
  padding: 15px;
  margin-right: 10px;
  border: 2px solid #333;
  background-color: #222;
  color: #ddd;
  font-size: 16px;
  border-radius: 4px;

  &:focus {
    outline: none;
    border-color: #555;
  }
`;

export const Button = styled.button`
  padding: 15px 20px;
  background-color: #555;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #777;
  }
`;
