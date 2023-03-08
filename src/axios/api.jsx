import axios from "axios";
import { getCookie } from "../until/cookies";

const instance = axios.create({
    baseURL: `${process.env.REACT_APP_URL}`,
    withCredentials: true,
    headers: {
      Authorization: `${getCookie("userCookie")}`,
    }
});

// 디엠 바(방목록) 조회
const getDMList = async () => {
    const response = await instance.get("/api/dm");
    // console.log('dm response', response);
    return response.data;
};

// 채널 바 조회(url channel로 변경하기)
const getChannelList = async () => {
    const response = await instance.get("/api/channel");
    console.log('channel response', response)
    return response.data;
};

// 이전 대화 불러오기
const getPrevChat = async (dmId) => {
  const response = await instance.get('/api/dm', {param:{id:dmId}});
  console.log("response", response);
  return response.data;
}

// 회원가입
const postSignUp = async (signUp) => {
  console.log(signUp)
  const response = await axios.post(`${process.env.REACT_APP_URL}/api/auth/signup`, signUp);
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

export { getDMList, getChannelList, postSignUp, postLogin, getPrevChat };