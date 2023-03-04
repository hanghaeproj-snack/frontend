import React, { useState } from 'react'
import { 
  Container,
  StContainer, 
  StHeader,
  StIconBox,
  StMsgBox,
  StMsgContainer,
  StIconBoxBottom,
  StLeft,
  StSend,
  StChatContainer,
  StChatbox,
  StProfile,
  StNameMsgBox,
  StName,
  StContent,
  StInput,
} from './ChatStyled'
import {BiBold, BiItalic, BiSend, BiStrikethrough, BiAt, BiSmile, BiLink, BiListOl, BiListUl, BiCodeAlt, BiMicrophone, BiCodeBlock, BiPlusCircle, BiVideo} from "react-icons/bi";

function Chat() {
  const [isChat, setIsChat] = useState(true);
  return (
    <StContainer>
      <StHeader>
        <h3>다이렉트 메시지</h3>
      </StHeader>
      {
        isChat 
          ? 
          <Container>
            <StChatContainer>
              <StChatbox>
                <StProfile></StProfile>
                <StNameMsgBox>
                  <StName>송민진(항해99 12기 C반 담임매니저)</StName>
                  <StContent>채팅 내용</StContent>
                </StNameMsgBox>
              </StChatbox>
            </StChatContainer>
            <StMsgContainer>
              <StIconBox>
                <BiBold />
                <BiItalic />
                <BiStrikethrough />        
                <h3>|</h3>
                <BiLink />
                <h3>|</h3>
                <BiListOl />
                <BiListUl />
                <h3>|</h3>
                <BiCodeAlt />
                <BiCodeBlock />
              </StIconBox>
              <StMsgBox>
                <StInput placeholder='_12기_공지방에게 메시지 보내기' />
              </StMsgBox>
              <StIconBoxBottom>
              <StLeft>
                <BiPlusCircle />
                <h3>|</h3>
                <BiVideo />
                <BiMicrophone />
                <h3>|</h3>
                <BiSmile />
                <BiAt />
              </StLeft>
              <StSend>
                <BiSend />
              </StSend>
              </StIconBoxBottom>
            </StMsgContainer> 
          </Container>
          : null

      }
    </StContainer>
  )
}

export default Chat;

// 메시지 보낼 때(input에 입력) StSend버튼 활성화(style주기)
// StChatBox -> get요청으로 받은 메시지 리스트 중 하나
// StNameMsgBox -> 작성자이름(StName), 내용(StContent) 포함
// StProfile -> 프로필 이미지 