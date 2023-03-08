import React, { useState } from "react";
// import { useCookies } from "react-cookie";
import { setCookie } from "../../../cookies/cookies";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import SlackLogo from "../../../asset/SlackLogo";
import { postLogin } from "../../../axios/api";
import { FormContainer, FormBox, SlackFont, SlackBold, FormInput, FormButton, FormLine,Apple, Google, CreateFont } from "./LoginStyled"

function LoginForm() {

  const navi = useNavigate();

  // 로그인 초기 데이터값
  const initialState = {
    email : '',
    password : ''
  }

  // 로그인 데이터 상태값
  const [ userLogin, setUserLogin ] = useState(initialState);

  // 쿠키 상태값
  // const [ cookies, setCookies ] = useCookies(['userCookie']) 

  // 로그인 api 통신
  const { mutate } = useMutation(postLogin, {
    onSuccess : (response) => {
      console.log('login', response.reponse)
      localStorage.setItem('email', response.reponse.email)
      localStorage.setItem('nickName', response.reponse.nickname)
      setCookie('userCookie', response.cookies)
      alert('로그인이 완료되었습니다.');
      // 로그인 성공 후 workspace(메인페이지)로 이동
      navi('/workspace')
    },
    onError : () => {
      alert('로그인을 실패하였습니다.')

      // 서버에서 에러값 받아주기
    }
  })
  // input Handler
  const onInputChange = (event) => {
    const { name, value } = event.target;
    setUserLogin({
      ...userLogin,
      [name] : value
    });
  }

  // 로그인 submit Handler
  const onSubmitHandler = async (event) => {
    event.preventDefault();
  
    
    if ((userLogin.email === '' || userLogin.password === '')) {
      alert('빈칸없이 채워주세요.')
    } else {
      mutate({
        ...userLogin,
        setUserLogin
      })
    }
  }


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
        <FormButton fc="#4284F3" bc="white"
          onClick={() => {alert('서비스 준비중입니다.')}}>
          <Google />
          Google을(를) 사용하여 로그인
        </FormButton>
        <FormButton bc="white"
          onClick={() => {alert('서비스 준비중입니다.')}}>
          <Apple />
          Apple을(를) 사용하여 로그인
        </FormButton>
      </FormBox>
      <FormLine>또는</FormLine>
      <FormBox onSubmit={onSubmitHandler}>
        <FormInput 
          placeholder="user@work-email.com"
          name='email'
          type='text'
          value={userLogin.email}
          onChange={onInputChange}/>
        <FormInput 
          placeholder="password"
          name='password'
          type='password'
          value={userLogin.password}
          onChange={onInputChange}/>
        <FormButton bc="#4A154B" fc="white">
          이메일로 로그인
        </FormButton>
        <CreateFont onClick={() => {navi('/signup')}}>계정 생성</CreateFont>
      </FormBox>
    </FormContainer>
  );
}



export default LoginForm;
