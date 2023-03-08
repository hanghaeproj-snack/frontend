import React, { useRef, useState } from 'react'
import { IoIosTrendingUp } from 'react-icons/io'
import { ModalClose, ModalCotent, ModalOverlay, ModalPortal, ModalRoot, ModalTrigger } from '../Modal/ProfileModal'
import { StContainer, StIconHelp, StProFile, StRightBox, StSearchBox } from './HeaderStyled'
import styled from 'styled-components'
import * as Modal from '../Modal/ProfileModal'
import { AiOutlineMail } from 'react-icons/ai'
import ProfileModalContent from '../Modal/ProfileModalContent'
import SearchModalContent from '../Modal/SearchModalContent'


function Header() {

  const imageInput = useRef();

  const onClickImageUpload = () => {
    imageInput.current.click();
  };

  return (
    <StContainer>
      <StSearchBox>
        <SearchModalContent />
      </StSearchBox>
      <StRightBox>
        <StIconHelp>?</StIconHelp>
        <ProfileModalContent />
      </StRightBox>
    </StContainer>
  )
}

export default Header