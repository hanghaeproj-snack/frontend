import React from "react";
import SlackLogo from "../../../asset/SlackLogo";
import { FormContainer, FormBox, SlackFont, SlackBold, FormInput, FormButton, FormLine,Apple, Google } from "./LoginStyled"

function LoginForm() {
  return (
    <FormContainer>
      <SlackFont mt="50px" fw="700" fs="30px">
        <SlackLogo />
      </SlackFont>
      <SlackFont mt="50px" fw="700" fs="50px">
        이메일로 로그인해 보세요
      </SlackFont>
      <SlackFont mt="10px" fs="20px" mb="10px">
        <SlackBold>직장에서 사용하는 이메일 주소</SlackBold>로 로그인하는 걸
        추천드려요.
      </SlackFont>
      <FormBox>
        <FormButton fc="#4284F3" bc="white">
          <Google />
          Google을(를) 사용하여 로그인
        </FormButton>
        <FormButton bc="white">
          <Apple />
          Apple을(를) 사용하여 로그인
        </FormButton>
      </FormBox>
      <FormLine>또는</FormLine>
      <FormBox>
        <FormInput placeholder="user@work-email.com" />
        <FormInput placeholder="password" />
        <FormButton bc="#4A154B" fc="white">
          이메일로 로그인
        </FormButton>
      </FormBox>
    </FormContainer>
  );
}


export default LoginForm;
