import React, { useState } from 'react';
import ChannelList from './ChannelList';
import DmList from './DmList';
import { 
  StChannel, 
  StContainer, 
  StDmBox, 
  StHeader, 
  StIconArrow,
  StIconToggleOpen,
  StIconToggleClose,
  StName, 
  StTitleChDm,
  StTitleBox,
} from './SideBarStyled';

function SideBar({setRoomNum}) {
  const [toggleCh, setToggleCh] = useState(false);
  const [toggleDm, setToggleDm] = useState(false);


  const onClickToggleChHandler = () => {
    setToggleCh(!toggleCh);
  }
  const onClickToggleDmHandler = () => {
    setToggleDm(!toggleDm);
  }

  return (
    <StContainer>
      <StHeader>
        <StName>HangHae99</StName>
        <StIconArrow />
      </StHeader>

      <StChannel>
        <StTitleBox>
          {
            toggleCh
              ? 
                <>
                  <StTitleChDm onClick={onClickToggleChHandler}>
                    <StIconToggleOpen />
                    <h3>채널</h3>
                  </StTitleChDm>
                  <ChannelList />

                </>
              :  
                <StTitleChDm onClick={onClickToggleChHandler}>
                  <StIconToggleClose />
                  <h3>채널</h3>
                </StTitleChDm>
          }
        </StTitleBox>
      </StChannel>

      <StDmBox>
        <StTitleBox>
          {
            toggleDm
              ? 
                <>
                  <StTitleChDm onClick={onClickToggleDmHandler}>
                    <StIconToggleOpen />
                    <h3>다이렉트 메시지</h3>
                  </StTitleChDm>
                  <DmList setRoomNum={setRoomNum} />

                </>
              :  
                <StTitleChDm onClick={onClickToggleDmHandler}>
                  <StIconToggleClose />
                  <h3>다이렉트 메시지</h3>
                </StTitleChDm>
          }
        </StTitleBox>
      </StDmBox>
    </StContainer>
  )
}

export default SideBar;
