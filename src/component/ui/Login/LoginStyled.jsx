import styled from "styled-components";
import { BsApple } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

// 부모Container CSS
const FormContainer = styled.div`
  width: 600px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

// 입력Container CSS
const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  gap: 20px;
`;

// font 공통 CSS
const SlackFont = styled.div`
  margin-top: ${({ mt }) => mt};
  margin-bottom: ${({ mb }) => mb};
  font-size: ${({ fs }) => fs};
  font-weight: ${({ fw }) => fw};
  text-align: center;
`;

// 부분 bold CSS
const SlackBold = styled.b`
  color: #444245;
`;

// input 공통 CSS
const FormInput = styled.input`
  width: 400px;
  height: 40px;
  margin: 0 auto;
  border: 1px solid black;
  border-radius: 5px;
`;

// button 공통 CSS
const FormButton = styled.button`
  width: 410px;
  margin: 0 auto;
  height: 50px;
  font-size: 18px;
  font-weight: 500;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
  color: ${({ fc }) => fc};
  border: 3px solid ${({ fc }) => fc};
  background-color: ${({ bc }) => bc};
`;

// -또는- CSS
const FormLine = styled.div`
  display: flex;
  flex-basis: 10%;
  align-items: center;
  color: rgba(0, 0, 0, 0.35);
  font-size: 12px;
  margin: 8px 35px;

  &::before,
  &::after {
    content: "";
    flex-grow: 1;
    background: rgba(0, 0, 0, 0.35);
    height: 1px;
    font-size: 0px;
    line-height: 0px;
    margin: 0px 16px;
  }
`;

// 아이콘
const Apple = styled(BsApple)`
  align-items: center;
  size: 20px;
  margin-top: 3px;
  margin-right: 5px;
`;
const Google = styled(FcGoogle)`
  align-items: center;
  margin-top: 3px;
  margin-right: 5px;
`;

// 계정 생성 폰트
const CreateFont = styled.div`
  width: 410px;
  margin: 0 auto;
  text-align: center;
  color: #1263A3;
  cursor: pointer;
  
  :hover {
    text-decoration: underline;
    text-decoration-color: #1263A3;
  }
`

export { FormContainer, 
          FormBox, 
          SlackFont, 
          SlackBold, 
          FormInput, 
          FormButton, 
          FormLine,
          Apple, 
          Google,
          CreateFont }