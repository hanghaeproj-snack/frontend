import React from 'react';
import { useQuery } from 'react-query';
import { getChannelList } from '../../../axios/api';
import { StTitle } from './SideBarStyled';
import styled from 'styled-components';
import {BiLockAlt} from "react-icons/bi";

function ChannelList() {
  // const {isLoading, isError, data} = useQuery("listCh", getChannelList);

  // console.log("data : ", data);

  // if(isLoading) return <h3>Loading...</h3>
  // if(isError) return <h3>Error...</h3>

  return (
    <>
    {
      // data?.map((item)=>{
      //   return <StTitle key={item.id}>{item.id}</StTitle>
      // })
    }
        <StContainer>
          <StIcon />
          <StTitle>디엠이름디엠이름디엠이름디엠이름</StTitle>
        </StContainer>
    </>

  )
}

export default ChannelList;

const StContainer = styled.div`
  display: flex;
  align-items: center;
  gap:8px;
`;
const StIcon = styled(BiLockAlt)`
  color: #D1D2D3;
  font-size: 20px;
`;