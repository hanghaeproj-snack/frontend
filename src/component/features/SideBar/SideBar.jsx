import React from 'react';
import ChannelList from './ChannelList';
import DmList from './DmList';
import { 
  StChannel, 
  StContainer, 
  StDmBox, 
  StHeader, 
  StIconArrow,
  StName, 
  StTitle,
  StTitleDm,
} from './SideBarStyled';

function SideBar({setRoomNum}) {

  return (
    <StContainer>
      <StHeader>
        <StName>HangHae99</StName>
        <StIconArrow />
      </StHeader>

      <StChannel>
        <StTitle>
          <h3>채널</h3>
          </StTitle>
        <ChannelList />
      </StChannel>

      <StDmBox>
        <StTitleDm>
          <h3>다이렉트 메시지</h3>
        </StTitleDm>
        <DmList setRoomNum={setRoomNum} />
      </StDmBox>
    </StContainer>
  )
}

export default SideBar;
