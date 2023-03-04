import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_URL,
});

// 디엠 바 조회
const getDMList = async () => {
    const response = await instance.get("/dm");
    return response.data;
};

// 채널 바 조회(url channel로 변경하기)
const getChannelList = async () => {
    const response = await instance.get("/dm");
    return response.data;
};

export {getDMList, getChannelList};