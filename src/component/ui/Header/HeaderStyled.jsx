import styled from "styled-components";
import {AiOutlineQuestionCircle} from "react-icons/ai"

const StContainer = styled.div`
    background: #121016;
    box-shadow: 0 1px 0 0 rgb(209 210 211 / 10%);
    width: 100%;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
`;

const StRightBox = styled.div`
    position: absolute;
    right: 14px;
    top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
`;
const StProFile = styled.button`
    width: 26px;
    height: 26px;
    background-color: whitesmoke;
    border-radius: 4px;
`;
const StIconHelp = styled(AiOutlineQuestionCircle)`
    color: #D1D2D3;
    font-size: 22px;
`;

const StSearchBox = styled.div`
    width: 60%;
    height: 26px;
    background-color: #38373C;
    border-radius: 5px;
    border: 1px solid #535155;
    display: flex;
    justify-content: center;
    align-items: center;
    h3 {
        color: #B0B1B3;
        font-size: 14px;
        font-weight: 400;
    }
`;

export {
    StContainer,
    StProFile,
    StIconHelp,
    StRightBox,
    StSearchBox,
};