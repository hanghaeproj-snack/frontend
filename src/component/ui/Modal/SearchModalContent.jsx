import React, { useEffect, useState } from 'react'
import * as Modal from './ProfileModal'
import {  SearchModalContainer,
  SearchModalInput,
  SearchBarRow,
  SearchBarBox,
  UserDataBox,
  PickupData,
  SearchButtonBox,
  SearchDataBox,
  SearchSubmitBox, 
  SearchButton} from  './SearchModalStyled'

function SearchModalContent() {

  const [ copy, setCopy ] = useState([]);
  const [ searchTerm, setSearchTerm ] = useState('');
  const [ monsters, setMonsters ] = useState([]);
  const [ invite, setInvite ] = useState([]);

  // 우선 api에서 유저정보 가져왔다 가정하고 데이터 넣어놓기
  // setMonsters(userData);
  // setCopy(userData)
  // 이름 입력값 받아주기
  // const InputChangeHandler = (event) => {
  //   setSearchTerm(event.target.value)
  //   console.log(searchTerm)
  // }

  useEffect(() => {
    const userData = ['삼순이', '몽룡이', '춘향이', '세종대왕', '백설공주', '신데렐라', '바보', '멍청이', '흥부', '놀부']
    setMonsters(userData);
    setCopy(userData)

  }, [])

  useEffect(() => {
    setMonsters(
      copy.filter(
        (event) => {
          return event.toLowerCase().includes(searchTerm.toLowerCase())
        }
      )
    )
    
  }, [searchTerm, copy])

  const picUpData = (item) => {
    console.log(item)
    setInvite([...invite, item])
  }
  return (
    <Modal.Root>
      <Modal.Trigger asChild>
        <h3>HangHae99 검색</h3>
      </Modal.Trigger>
      <Modal.Overlay />
      <SearchModalContainer>
        <SearchBarBox>
          <SearchBarRow>
            <SearchModalInput 
              placeholder='이름, 채팅방 검색'
              onChange={(e) => setSearchTerm(e.target.value)}/>
            <Modal.Close asChild>
              <SearchButton wd="35px" hg="35px" border="none" fc="#ABACAD" fs="26px">x</SearchButton>
            </Modal.Close>
          </SearchBarRow>
          <SearchSubmitBox>
            {invite.map((item) => {
              return <PickupData>{item}</PickupData>
            })}
            </SearchSubmitBox>
          <UserDataBox>
          {monsters.map((item) => {
              return <SearchDataBox onClick={() => picUpData(item)}>{item}</SearchDataBox>
            })}
            {/* {monsters} */}
          </UserDataBox>
          <SearchButtonBox>
          <SearchButton wd="100px" hg="35px" border="2px solid #333639" fc="#ABACAD" fs="18px">채널 생성</SearchButton>
          <SearchButton wd="100px" hg="35px" border="2px solid #333639" fc="#ABACAD" fs="18px">DM 생성</SearchButton>
        </SearchButtonBox>
        </SearchBarBox>
      </SearchModalContainer>
    </Modal.Root>
  )
}

export default SearchModalContent