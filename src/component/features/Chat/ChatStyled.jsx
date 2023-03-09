import styled from "styled-components";
import {IoIosArrowDown} from "react-icons/io";

const StContainer = styled.div`
    background-color: #222529;
    width: 100%;
    height: 100%;
    margin-top: 45px;
    box-sizing: border-box;
    display: flex;
`;
const StHeader = styled.div`
    background-color: #222529;
    border-bottom: 0.5px solid #363636; 
    color: #D1D2D3;
    padding: 16px 14px;
    display: flex;
    z-index: 1;
    position: absolute;
    width: 100%;
    justify-content: start;
    top: 1px;

    h3 {
        color: #D1D2D3;
        font-weight: 800;
        margin: 0px;
        font-size: 18px;
    }
`;

const  StChatBoxContainer = styled.div`
    height: 100%;
    overflow-x: auto;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
    &::-webkit-scrollbar-thumb{
        color: red
    }
    &::-webkit-scrollbar-track{
        color: green;
    }
`;

const Container = styled.div`
    width: 84%;
    height: 100%;
    padding: 20px 13px 38px 13px;
    box-sizing: border-box;
    position: absolute;
    gap: 16px;
    top: 24px;
    right: 0px;
    /* z-index: 0; */
    @media screen and (max-width:800px) {
        width: 100%;
    }
`;

// 채팅 리스트 
const StChatContainer = styled.div`
    width: 100%;
    height: 82%;
    display: flex;
    flex-direction: column;
    padding: 0px 0px;
    margin:0;
    box-sizing: border-box;
    overflow-x: auto;
    overflow-y: scroll;
    position: relative;
    &::-webkit-scrollbar {
        display: none;
    }
`;
const StChatbox = styled.div`
    display: flex;
    gap:12px;
    padding-bottom: 32px;
    box-sizing: border-box;
`;
const StProfile = styled.div`
    width: 26px;
    height: 26px;
    background-color: whitesmoke;
    border-radius: 4px;
    img {
        width: 100%;
        height: 100%;
        border-radius: 4px;
    }
`;
const StNameMsgBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;
const StName = styled.div`
    color: whitesmoke;
    font-weight: 800;
`;
const StContent = styled.div`
    color: whitesmoke;
`;

// 메시지 입력하는 박스
const StMsgContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 16px;
    width: 100%;
    height: 18%;
    padding: 8px 13px;
    box-sizing: border-box;
    border: 1.5px solid #5b5e5f;
    border-radius: 8px;
    /* position: absolute;
    bottom: 24px;
    right: 24px; */
`;
const StIconBox = styled.div`
    display: flex;
    align-items: center;
    color: #5b5e5f;
    gap: 12px;
    font-size: 18px;
    cursor: pointer;
    h3 {
        margin: 0;
        font-weight: 200;
        margin-bottom: 5px;
    }
`;
const StMsgBox = styled.label`
    color: #5b5e5f;

`;
const StInput = styled.input`
    background-color: #222529;
    width: 100%;
    border: none;
    font-size: 16px;
    color: whitesmoke;
    &:focus {
        outline: none;
    }
`;

const StIconBoxBottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const StLeft = styled.div`
    display: flex;
    align-items: center;
    color: #5b5e5f;
    gap: 12px;
    font-size: 18px;
    h3 {
        margin: 0;
        font-weight: 200;
        margin-bottom: 5px;
    }
`;
const StSend = styled.div`
    color: #5b5e5f;
    padding-right: 5px;
    font-size: 18px;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    
    h3 {
        margin: 0;
        font-weight: 200;
        font-size: 18px;
    }
`;
const StSendTrue = styled.div`
    color: #5b5e5f;
    padding-right: 5px;
    font-size: 18px;
    cursor: pointer;
    background-color: #007A5A;
    color: whitesmoke;
    padding: 3px 8px;
    border-radius: 3px;
    box-sizing: border-box;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;

    h3 {
        margin: 0;
        font-weight: 200;
        font-size: 18px;
    }
`;
const StSendIcon = styled(IoIosArrowDown)`
    font-size: 14px;
`;


export {
    Container,
    StContainer,
    StHeader,
    StChatContainer,
    StChatbox,
    StMsgContainer,
    StIconBox,
    StMsgBox,
    StIconBoxBottom,
    StLeft,
    StSend,
    StProfile,
    StNameMsgBox,
    StName,
    StContent,
    StInput,
    StChatBoxContainer,
    StSendTrue,
    StSendIcon,
};