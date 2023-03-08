import React, { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import SlackLogo from "../../../asset/SlackLogo";
import { postLogin, postSignUp } from "../../../axios/api";
import { FormContainer, FormBox, SlackFont, SlackBold, FormInput, FormButton, FormLine,Apple, Google } from "./SignUpStyled"

function SignUpForm() {

  const navi = useNavigate();

  // 회원가입 초기 데이터값
  const initialState = {
    email : '',
    password : '',
    passwordCheck : '',
    nickname : '',
    admin : false,
    adminToken : ''
  }

  // 회원가입 데이터 상태값
  const [ user, setUser ] = useState(initialState);

  // 회원가입 api 통신
  const { mutate } = useMutation(postSignUp, {
    onSuccess : () => {
      alert('회원가입이 완료되었습니다.');
      // 회원가입 완료 후 로그인페이지로 이동시키기
      navi('/')
    },
    onError : (error) => {
      alert('회원가입을 실패하였습니다.');
      // 회원가입 에러 분기처리
    }
  })

  // 회원가입 요청 상태 관리
  const [ isLoading, setIsLoading ] = useState(false);

  // input Handler
  const onInputChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name] : value
    });
  }

  // 회원가입 form handler
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    // console.log('email:', user.email, 'name :', user.nickname, 'password :', user.password)

    // 이메일 정규식
    const emailVal = new RegExp('^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$');
    if ((user.email === '' || user.nickname === '' || user.password === '' || user.passwordCheck === '')) {
      alert('빈칸없이 채워주세요.')
    } else {
      if(( user.password !== user.passwordCheck)) {
        alert('비밀번호가 일치하지 않습니다.')
      } else if (user.email.match(emailVal) === null ) {
        alert('이메일 형식이 맞지 않습니다.')
      } else if (user.password.length < 6) {
        alert('비밀번호는 최소 6자 이상으로 입력해주세요.')
      }else {
        // 위의 회원가입 조건 에러처리를 통과하고 나면 api post 
        mutate({
          email: user.email,
          password: user.password,
          nickname: user.nickname,
          admin: user.admin,
          adminToken: user.adminToken
        })
      }
    }
  }
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
      <FormBox onSubmit={onSubmitHandler}>
        <FormInput
          placeholder="user@work-email.com" 
          name="email" 
          type="text"
          value={user.email}
          onChange={onInputChange}/>
        <FormInput 
          placeholder="name"
          name="nickname"
          type="text"
          value={user.nickname}
          onChange={onInputChange}/>
        <FormInput 
          placeholder="password 최소 6자 이상"
          name="password"
          type="password"
          value={user.password}
          onChange={onInputChange}/>
        <FormInput 
          placeholder="password check"
          name="passwordCheck"
          type="password"
          value={user.passwordCheck}
          onChange={onInputChange}/>
        <FormButton bc="#4A154B" fc="white" type='submit'>
          회원가입
        </FormButton>
      </FormBox>
      <FormLine>또는</FormLine>
      <FormBox>
        <FormButton fc="#4284F3" bc="white"
          onClick={() => alert('서비스 준비중입니다.')}>
          <Google />
          Google을(를) 사용하여 로그인
        </FormButton>
        <FormButton bc="white"
          onClick={() => alert('서비스 준비중입니다.')}>
          <Apple />
          Apple을(를) 사용하여 로그인
        </FormButton>
      </FormBox>
    </FormContainer>
  );
}


export default SignUpForm;
