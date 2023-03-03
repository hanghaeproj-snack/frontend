import React from 'react'
import { StContainer, StIconHelp, StProFile, StRightBox, StSearchBox } from './HeaderStyled'

function Header() {
  return (
    <StContainer>
      <StSearchBox>
        <h3>HangHae99 검색</h3>
        
      </StSearchBox>
      <StRightBox>
        <StIconHelp>?</StIconHelp>
        <StProFile></StProFile>
      </StRightBox>
    </StContainer>
  )
}

export default Header