import React from 'react'
import { StChannel, StContainer, StDmBox, StHeader, StIconArrow, StName, StTitle } from './SideBarStyled'

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
        <StTitle>다이렉트 메시지</StTitle>
        <StTitle>_12기 공지방</StTitle>
        <StTitle>_12기 공지방</StTitle>
        <StTitle>_12기 공지방</StTitle>
      </StDmBox>
    </StContainer>
  )
}

export default SideBar;

