import React from "react";
import SlackLogo from "../../../asset/SlackLogo";
import { FormContainer, FormBox, SlackFont, SlackBold, FormInput, FormButton, FormLine,Apple, Google } from "./SignUpStyled"

function SignUpForm() {
  return (
    <FormContainer>
      <SlackFont mt="50px" fw="700" fs="30px">
        <SlackLogo />
      </SlackFont>
      <SlackFont mt="50px" fw="700" fs="50px">
        먼저 이메일부터 입력해보세요
      </SlackFont>
      <SlackFont mt="10px" fs="20px" mb="10px">
        <SlackBold>직장에서 사용하는 이메일 주소</SlackBold>로 로그인하는 걸
        추천드려요.
      </SlackFont>
      <FormBox>
        <FormInput placeholder="user@work-email.com" />
        <FormInput placeholder="password" />
        <FormInput placeholder="password check" />
        <FormButton bc="#4A154B" fc="white">
          회원가입
        </FormButton>
      </FormBox>
      <FormLine>또는</FormLine>
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
    </FormContainer>
  );
}


export default SignUpForm;
