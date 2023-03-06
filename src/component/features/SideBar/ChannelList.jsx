import React from 'react';
import { useQuery } from 'react-query';
import { getChannelList } from '../../../axios/api';
import { StTitle } from './SideBarStyled';

function ChannelList() {
  const {isLoading, isError, data} = useQuery("listCh", getChannelList);

  // console.log("data : ", data);

  if(isLoading) <h3>Loading...</h3>
  if(isError) <h3>Error...</h3>

  return (
    <>
    {
      // data.map((item)=>{
      //   return <StTitle key={item.id}>{item.id}</StTitle>
      // })
    }
    </>

  )
}

export default ChannelList;