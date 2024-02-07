import React from 'react';
import styled from 'styled-components';
import defaultProfile from 'assets/default_profile.png';
import { ChatContent } from 'types/Chat';

type ChatBubbleProps = {
  isMine: boolean;
};

const ChatBubble = ({ chat }: { chat: ChatContent }) => {
  const { isMine, contents } = chat;

  return (
    <Container isMine={isMine}>
      {!isMine && <ProfileImage src={defaultProfile} />}
      <ChatInfoWrapper>
        <Message isMine={isMine}>{contents}</Message>
        <Time isMine={isMine}>오전 10:57</Time>
      </ChatInfoWrapper>
    </Container>
  );
};

const Container = styled.li<ChatBubbleProps>`
  display: flex;
  align-items: center;
  gap: 16px;
  justify-content: ${({ isMine }) => (isMine ? 'flex-end' : 'flex-start')};
`;

const ProfileImage = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;

  @media ${({ theme }) => theme.devices.tablet} {
    width: 52px;
    height: 52px;
  }
`;

const ChatInfoWrapper = styled.div`
  display: flex;
  gap: 8px;

  @media ${({ theme }) => theme.devices.tablet} {
    gap: 10px;
  }
`;

const Message = styled.p<ChatBubbleProps>`
  font-size: 16px;
  font-weight: 500;
  padding: 8px 12px;
  background-color: ${({ theme, isMine }) => (isMine ? theme.colors.orange[400] : theme.colors.orange[200])};
  border-radius: 10px;

  @media ${({ theme }) => theme.devices.tablet} {
    font-size: 20px;
    padding: 10px 13px;
  }
`;

const Time = styled.span<ChatBubbleProps>`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray[400]};
  align-self: flex-end;
  order: ${({ isMine }) => (isMine ? -1 : 1)};

  @media ${({ theme }) => theme.devices.tablet} {
    font-size: 16px;
  }
`;

export default ChatBubble;
