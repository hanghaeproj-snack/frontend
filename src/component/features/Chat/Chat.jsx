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
  StChatBoxContainer,
  StSendTrue,
  StSendIcon,
} from './ChatStyled'
import {BiBold, BiItalic, BiSend, BiStrikethrough, BiAt, BiSmile, BiLink, BiListOl, BiListUl, BiCodeAlt, BiMicrophone, BiCodeBlock, BiPlusCircle, BiVideo} from "react-icons/bi";
import { getCookie } from '../../../cookies/cookies';

function Chat() {
  // const client = useRef({}); // 속성 값이 변경되어도 재렌더링하지 않고, 다시 렌더링 하더라도 유실되지 않도록 클리이언트를 current속성에 만든다.
  const scrollRef = useRef();

  const [isChat, setIsChat] = useState(false);  // 초깃값: 메인화면(false), 채팅시작(true) - 방을 클릭했을 때 변경
  const [messages, setMessages] = useState([]);  // 화면에 표시될 채팅 기록
  const [inputMsg, setInputMsg] = useState("");
  const [stompClient, setStompClient] = useState(null);
  const [isCheck, setIsCheck] = useState(false); 

  const [roomNum, setRoomNum] = useState();
  const [uuid, setUuid] = useState();

  useEffect(()=>{
    const socket = new SockJS(`${process.env.REACT_APP_URL}/stomp/chat`);
    const stompClient = Stomp.over(socket);

    const thisHeader = { Authorization : getCookie('userCookie')};
    // console.log(thisHeader);

    stompClient.connect({}, () => {
      console.log("connected");
      console.log('uuid: ', uuid);
      stompClient.subscribe(`/sub/topic/dm/message/${uuid}`, (data) => {
        const msgData = JSON.parse(data.body);
        console.log("msgData: ", msgData);

        setMessages((prev) => [...prev, msgData]);
      },
      thisHeader,
      );
      setStompClient(stompClient);
    });
    // return () => {
      // stompClient.disconnect();
    // }
  }, [roomNum]);
  
  const onSubmitHandler = (e) => {
    e.preventDefault();

    // console.log('roomnumber: ',roomNum);
    // if(!stompClient.current.connected) return;  // 연결이 끊겼을 때
    const username = localStorage.getItem('nickName'); 
    const email = localStorage.getItem('email');
    const newMsg = {
      dmId: roomNum,
      nickname:username, 
      message: inputMsg,
      uuid,
      email,
    }
    // console.log("userCookie: ",getCookie('userCookie'));
    if(inputMsg) {
      stompClient.send('/app/chat/message', {
        Authorization: getCookie('userCookie')
      }
      , JSON.stringify(newMsg));
      setInputMsg('');
    }
  }

  const onChangeInputHandler = (e) => {
    setInputMsg(e.target.value);
  };

  useEffect(()=>{
    if(inputMsg === "") setIsCheck(()=>false);
    else setIsCheck(()=>true);
  },[inputMsg]);

  // scroll to bottom
  const scrollToBottom = () => {
    if(scrollRef.current){
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }
  useEffect(()=>{
    scrollToBottom();
  },[messages]);

  return (
    <StContainer>
      <StSideBarBox>
        <SideBar setRoomNum={(e, i, v, arr)=>{
          setRoomNum(e)
          setUuid(i)
          setIsChat(v)
          setMessages(arr);
        }} />
      </StSideBarBox>
      {
        isChat 
          ? 
          <Container>
            <StChatContainer>
              <StHeader>
                <h3>다이렉트 메시지</h3>
              </StHeader>
              <StChatBoxContainer ref={scrollRef}>
                {
                  messages.map((item)=> 
                    <StChatbox>
                      <StProfile>
                        <img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'/>
                      </StProfile>
                      <StNameMsgBox>
                        <StName>{item.nickname}</StName>
                        <StContent key={item.id}>{item.message}</StContent>
                      </StNameMsgBox>
                    </StChatbox>
                  )
                }
              </StChatBoxContainer>
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
                  onChange={onChangeInputHandler}
                  name='msg'
                  placeholder="메시지 보내기"
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
              {
                isCheck
                  ?
                  <StSendTrue>
                    <BiSend type='submit'/>
                    <h3>|</h3>
                    <StSendIcon />
                  </StSendTrue>
                  :
                  <StSend>
                    <BiSend type='submit'/>
                    <h3>|</h3>
                    <StSendIcon />
                  </StSend>
              }
              </StIconBoxBottom>
            </StMsgContainer> 
          </Container>
          : null
      }
    </StContainer>
  )
}

export default Chat;

const StSideBarBox = styled.div`
  width: 16%;
  @media screen and (max-width:800px) {
    display: none;
  }
`;