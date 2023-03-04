import React from 'react';
import { useQuery } from 'react-query';
import { getDMList } from '../../../axios/api';
import { StTitle } from './SideBarStyled';

function DmList() {
  const {isLoading, isError, data} = useQuery("listDm", getDMList);

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

export default DmList