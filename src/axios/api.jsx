import axios from "axios";

const instance = axios.create({
    baseURL: 'http://3.35.131.228:8080',
    withCredentials: true
});

// 디엠 바 조회
const getDMList = async () => {
    const response = await instance.get("/api/dm");
    console.log('dm response', response)
    return response.data;
};

// 채널 바 조회(url channel로 변경하기)
const getChannelList = async () => {
    const response = await instance.get("/api/channel");
    console.log('channel response', response)
    return response.data;
};

// 회원가입
const postSignUp = async (signUp) => {
  console.log(signUp)
  const response = await instance.post('/api/auth/signup', signUp);
  console.log('signup', response.data)
  return response.data;
}

// 로그인
const postLogin = async (login) => {
  const response = await instance.post('/api/auth/login', login);
  // console.log('axios header', response.headers.authorization)

  const cookies = response.headers.authorization
  console.log('cookies', cookies)

  return {reponse: response.data, cookies : cookies};
}

export { getDMList, getChannelList, postSignUp, postLogin };