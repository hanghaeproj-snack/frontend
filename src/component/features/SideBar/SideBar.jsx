import React from 'react'
import { 
  StChannel, 
  StContainer, 
  StDmBox, 
  StHeader, 
  StIconArrow, 
  StName, 
  StTitle,
  StTitleDm,
} from './SideBarStyled'

function SideBar() {
  return (
    <StContainer>
      <StHeader>
        <StName>HangHae99</StName>
        <StIconArrow />
      </StHeader>
      <StChannel>
        <StTitle>채널</StTitle>
        <StTitle>_12기 공지방</StTitle>
        <StTitle>_12기 공지방</StTitle>
        <StTitle>_12기 공지방</StTitle>
      </StChannel>

      <StDmBox>
        <StTitleDm>
          <h3>다이렉트 메시지</h3>
        </StTitleDm>
        <StTitle>_12기 공지방</StTitle>
        <StTitle>_12기 공지방</StTitle>
        <StTitle>_12기 공지방</StTitle>
      </StDmBox>
    </StContainer>
  )
}

export default SideBar;

