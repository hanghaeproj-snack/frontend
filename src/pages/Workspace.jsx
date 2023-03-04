import React from 'react'
import Chat from '../component/features/Chat/Chat'
import SideBar from '../component/features/SideBar/SideBar'
import Header from '../component/ui/Header/Header';
import styled from 'styled-components';

function WorkSpace() {
  return (
    <>
      <StHeaderBox>
        <Header />
      </StHeaderBox>
      <StSideBarBox>
        <SideBar />
      </StSideBarBox>
      <StChatBox>
        <Chat />
      </StChatBox>
    </>
  )
}

export default WorkSpace;

const StHeaderBox = styled.div`
  position: relative;
  z-index: 1;
`;

const StSideBarBox = styled.div`
  z-index: 1;
  width: 16%;
  height: 100vh;
  padding: 0px;
  box-sizing: border-box;
  margin: 0;
  position: fixed;
`;

const StChatBox = styled.div`
  z-index: 0;
  position: fixed;
  box-sizing: border-box;
  top: 0px;
  right: 0px;
  height: 100%;
  width: 100%;
`;