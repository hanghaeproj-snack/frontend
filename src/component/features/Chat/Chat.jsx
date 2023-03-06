import React, { useRef, useState } from 'react';
import SockJS from 'sockjs-client';
import * as StompJs from "@stomp/stompjs";
import Stomp from 'stompjs';
import { useEffect } from 'react';
import SideBar from '../SideBar/SideBar';
import styled from 'styled-components';
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
import axios from 'axios';

function Chat() {
  const client = useRef({}); // 속성 값이 변경되어도 재렌더링하지 않고, 다시 렌더링 하더라도 유실되지 않도록 클리이언트를 current속성에 만든다.
  
  const [isChat, setIsChat] = useState(true);  // 초깃값: 메인화면(false), 채팅시작(true)
  const [messages, setMessages] = useState([]);  // 화면에 표시될 채팅 기록
  const [inputMsg, setInputMsg] = useState("");
  const [stompClient, setStompClient] = useState(null);

  const [roomNum, setRoomNum] = useState();
  
  useEffect(()=>{
    const socket = new SockJS('http://3.36.51.159:8080/ws/chat');
    const stompClient = Stomp.over(socket);

    stompClient.connect({}, () => {
      console.log("connected");
      stompClient.subscribe(`/topic/chat/room/1`, (data) => {

        const msgData = JSON.parse(data.body);
        console.log("msgData: ", msgData);

        setMessages([...messages, msgData]);
      });
      setStompClient(stompClient);
    });
    return () => {
      //  stompClient.disconnect();
    }
  }, []);
  
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("messages: ", messages);
    const username = 'testname'; // 질문
    const newMsg = {
      type: 'ENTER',
      dmId: roomNum,
      username, 
      message: inputMsg,
      uuid:"uuid"
    }
    if(inputMsg) {
      stompClient.send('/app/chat/message', {}, JSON.stringify(newMsg));
      setInputMsg('');
    }
  }
  // 메시지 배열에 추가!!
  return (
    <StContainer>
      <StHeader>
        <h3>다이렉트 메시지</h3>
      </StHeader>

      <StSideBarBox>
        <SideBar setRoomNum={setRoomNum} />
      </StSideBarBox>

      {
        isChat 
          ? 
          <Container>
            <StChatContainer>
              <StChatbox>
                <StProfile></StProfile>
                <StNameMsgBox>
                  <StName>송민진(항해99 12기 C반 담임매니저)</StName>
                  <StContent>
                    {messages.map((item)=><div key={item.username}>{item.message}</div>)}
                  </StContent>
                </StNameMsgBox>
              </StChatbox>
            </StChatContainer>
            <StMsgContainer onSubmit={onSubmitHandler}>
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
                <StInput 
                  value={inputMsg}
                  onChange={(e)=>setInputMsg(e.target.value)}
                  name='msg'
                  placeholder='_12기_공지방에게 메시지 보내기' 
                />
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
                <BiSend type='submit' />
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

const StSideBarBox = styled.div`
  z-index: 1;
  width: 16%;
  height: 100vh;
  padding: 0px;
  box-sizing: border-box;
  margin: 0;
  position: fixed;
  top: 45px;
`;