import styled from "styled-components";
import * as Modal from "./ProfileModal";

const SearchModalContainer = styled(Modal.Content)`
  left: 50%;
  top: 10%;
  transform: translate(-0%, -0%);
  margin-top: 300px;
  border-radius: 12px;
  border: 1px solid #333639;
  box-sizing: border-box;
  padding: 10px;
  background-color: #1b1d21;
  width: 1000px;
  height: 300px;
`;
const SearchModalInput = styled.input`
  width: 1000px;
  height: 35px;
  font-size: 20px;
  color: #d1d2d3;
  border: 2px solid #333639;
  border-top: 1ch;
  border-left: 1ch;
  border-right: 1ch;
  background-color: #1b1d21;
`;
const SearchBarRow = styled.div`
  height: 15%;
  /* border: 1px solid #333639;
  border-top: 1ch;
  border-left: 1ch;
  border-right: 1ch; */
  /* background-color: blue; */
  display: flex;
  flex-direction: row;
`;
const SearchBarBox = styled.div`
  width: 100%;
  height: 100%;
  /* overflow: scroll; */
  /* background-color: yellow; */
`;
const UserDataBox = styled.div`
  height: 55%;
  overflow: scroll;
  /* &::-webkit-scrollbar {
        display: none;
    } */
  /* background-color: aqua; */
`;
const PickupData = styled.div`
  width: 90px;
  height: 30px;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  padding-top: 5px;
  color: #d1d2d3;
  border-radius: 5px;
  background-color: #222529;

  /* :hover {
    border-radius: 5px;
    background-color: #222529;
  } */
`;
const SearchButtonBox = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: end;
  align-items: end;
  gap: 10px;
  /* background-color: pink; */
`;
const SearchDataBox = styled.div`
  font-size: 20px;
  color: #d1d2d3;
  font-weight: 700;
  padding: 5px;

  :hover {
    background-color: #1263a3;
  }
`;

const SearchSubmitBox = styled.div`
  width: auto;
  margin-left: 10px;
  margin-right: 10px;
  height: 15%;
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  white-space: nowrap;
  gap: 10px;
`;
const SearchButton = styled.button`
  width: ${({ wd }) => wd};
  height: ${({ hg }) => hg};
  border: ${({ border }) => border};
  border-radius: 2px;
  color: ${({ fc }) => fc};
  font-size: ${({ fs }) => fs};
  background-color: #1b1d21;
  cursor: pointer;
`;
export {
  SearchModalContainer,
  SearchModalInput,
  SearchBarRow,
  SearchBarBox,
  UserDataBox,
  PickupData,
  SearchButtonBox,
  SearchDataBox,
  SearchSubmitBox, 
  SearchButton
};
