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

const ModalButtonSetter = styled.div`
  position: absolute;
  bottom: 12px;
  right: 12px;
  display: flex;
  gap: 5px;
`

const StModalContent = styled(Modal.Content)`
  left: 50%;
  top: 10%;
  transform: translate(-60%, -10%);
  margin-top: 200px;
  border-radius: 12px;
  box-sizing: border-box;
  padding: 24px;
  background-color: #1B1D21;
  width: 700px;
  height: 600px;
`
const StWhatModal = styled.div`
  /* background-color: yellow; */
  width: 100%;
  height: 90%;
`
const ProfileRowInput = styled.div`
  display: flex;
  flex-direction: row;
  height: 350px;
  border: 2px solid #36373B;
  border-left: 1ch;
  border-bottom: 1ch;
  border-right: 1ch;
  /* background-color: green; */
`
const ProfileRowBoxInput = styled.div`
  
  width: 60%;
`
const ProfileRowBoxImage = styled.div`
  width: 40%;
  margin: 0 auto;
`
const ImageBox = styled.div`
  width: 100%;
  height: 230px;
  
  background-color: #7F56C3;
  margin: 0 auto;
  border-radius: 5px;
  /* margin-top: 5px; */
`
const ImageInput = styled.input`
  display: none;
`
const ImageButton = styled.button`
  width: 100%;
  height: 40px;
  display: flex;
  color: #D1D2D3;
  justify-content: center;
  background-color: #1B1D21;
  border: 1px solid #525357;
  margin: 0 auto;
  font-size: 20px;
  border-radius: 5px;
  align-items: center;
  margin-top: 10px;
  cursor: pointer;
`
const AddressBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5px;
  height: 50px;
  /* background-color: beige; */
`
const OutlineMail = styled(AiOutlineMail)`
  background-color: gray;
  margin-right: 5px;
  width: 35px;
  height: 70%;
  padding: 5px;
`
const ModalButtonBox = styled.div`
  height: 10%;
  display: flex;
  justify-content: end;
  /* background-color: pink; */
  border: 2px solid #36373B;
  border-left: 1ch;
  border-bottom: 1ch;
  border-right: 1ch;
  align-items: center;
`
const ModalCloseButton = styled.button`
  width: 120px;
  height: 40px;
  background-color: ${({ bc }) => bc};
  border: 2px solid ${({ oc }) => oc};
  color: #F2F7F5;
  font-size: 16px;
  font-weight: 700;
  border-radius: 5px;
  margin: 5px;
  cursor: pointer;
`
const ModalFont = styled.div`
  width: ${({ wd }) => wd};
  height: ${({ hg }) => hg};
  font-size: ${({ fs }) => fs};
  /* font-weight: ${({ fw }) => fw}; */
  font-weight: 500;
  color : ${({ fc }) => fc};
  margin-top: ${({ mt }) => mt};
  margin-bottom: 5x;
  color: #D1D2D3;
  padding: 2px;
`
const ModalEmailFont = styled.div`
  width: ${({ wd }) => wd};
  height: ${({ hg }) => hg};
  font-size: ${({ fs }) => fs};
  font-weight: ${({ fw }) => fw};
  color : ${({ fc }) => fc};
  margin-top: ${({ mt }) => mt};
  margin-bottom: 5x;
  /* color: #D1D2D3; */
  padding: 2px;
`
const ModalInput = styled.input`
  width: ${({ wd }) => wd};
  height: ${({ hg }) => hg};
  border-radius: 5px;
  border: 1px solid #525357;
  background-color: #1B1D21;
`
export default Header