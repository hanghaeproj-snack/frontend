import styled from "styled-components";
import {IoIosArrowDown} from "react-icons/io";

const StContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: #19171D;
    box-sizing: border-box;
    border-right: 0.01px solid #363636;
`;
const StHeader = styled.div`
    padding: 16px 14px;
    border-bottom: 0.01px solid #363636;
    display: flex;
    align-items: center;
    gap: 2px;
    justify-content: start;
`;
const StName = styled.h3`
    color: #D1D2D3;
    font-weight: 800;
    margin: 0px;
    font-size: 18px;

`;

const StIconArrow = styled(IoIosArrowDown)`
    color: #D1D2D3;
    margin: 0px;
`;

const StChannel = styled.div`
    padding: 6px 14px;
`;

const StTitleDm = styled.div`
    h3{
    color: whitesmoke;
    font-size: 14px;
    cursor: pointer;
    }
`;

const StTitle = styled.div`
    h3{
    color: whitesmoke;
    font-size: 14px;
    cursor: pointer;
    display: inline-block;
    width: 200px;
    white-space: nowrap; // 연속된 스페이스 또는 탭 병합, 줄바꿈 병합, 자동 줄바꿈x 
    overflow: hidden;
    text-overflow: ellipsis;
    }
`;

const StDmBox = styled.div`
    padding: 6px 14px;
    
`;

export {
    StContainer,
    StHeader,
    StName,
    StIconArrow,
    StChannel,
    StTitle,
    StDmBox,
    StTitleDm
}