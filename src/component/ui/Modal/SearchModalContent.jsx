import React, { useEffect, useState } from 'react'
import * as Modal from './ProfileModal'
import styled from 'styled-components'

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
          <SearchSubmitBox>{invite}</SearchSubmitBox>
          <UserDataBox>
          {monsters.map((item) => {
              return <SearchDataBox onClick={() => picUpData(item)}>{item}</SearchDataBox>
            })}
            {/* {monsters} */}
          </UserDataBox>
          <SearchButtonBox>
          <SearchButton wd="100px" hg="35px" border="2px solid #333639" fc="#ABACAD" fs="18px">채팅방 생성</SearchButton>
          <SearchButton wd="100px" hg="35px" border="2px solid #333639" fc="#ABACAD" fs="18px">DM 생성</SearchButton>
        </SearchButtonBox>
        </SearchBarBox>
      </SearchModalContainer>
    </Modal.Root>
  )
}

const SearchModalContainer = styled(Modal.Content)`
  left: 50%;
  top: 10%;
  transform: translate(-0%, -0%);
  margin-top: 300px;
  border-radius: 12px;
  border: 1px solid #333639;
  box-sizing: border-box;
  padding: 10px;
  background-color: #1B1D21;
  width: 1000px;
  height: 300px;
`

const SearchModalInput = styled.input`
  width: 1000px;
  height: 35px;
  font-size: 20px;
  color:#D1D2D3;
  border: 2px solid #333639;
  border-top: 1ch;
  border-left: 1ch;
  border-right: 1ch;
  background-color: #1B1D21;
`
const SearchBarRow = styled.div`
  height: 15%;
  /* border: 1px solid #333639;
  border-top: 1ch;
  border-left: 1ch;
  border-right: 1ch; */
  /* background-color: blue; */
  display: flex;
  flex-direction: row;
`
const SearchBarBox = styled.div`
  width: 100%;
  height: 100%;
  /* overflow: scroll; */
  /* background-color: yellow; */
`
const UserDataBox = styled.div`
  height: 55%;
  overflow: scroll;
  /* background-color: aqua; */
`
const SearchButtonBox = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: end;
  align-items: end;
  gap: 10px;
  /* background-color: pink; */
`
const SearchDataBox = styled.div`
  font-size: 20px;
  color: #D1D2D3;
  font-weight: 700;
  padding: 5px;

  :hover {
    background-color: #1263A3;
  }
`
const SearchSubmitBox = styled.div`
  width: 100%;
  height: 15%;
  /* background-color: beige; */
`
const SearchButton = styled.button`
  width: ${({ wd }) => wd};
  height: ${({ hg }) => hg};
  border: ${({ border }) => border};
  border-radius: 2px;
  color: ${({ fc }) => fc };
  font-size: ${({ fs }) => fs };
  background-color: #1B1D21;
  cursor: pointer;
`
export default SearchModalContent