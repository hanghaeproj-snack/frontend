import React from 'react';
import { useQuery } from 'react-query';
import { getDMList } from '../../../axios/api';
import { StTitle } from './SideBarStyled';

function DmList({setRoomNum}) {
  // const {isLoading, isError, data} = useQuery("listDm", getDMList);

  // if(isLoading) return <h3>Loading...</h3>
  // if(isError) return <h3>Error...</h3>

  return (
    <>
    {
        // data.map((item)=>{
        //   return <StTitle 
        //     key={item.id} 
        //     onClick={()=>setRoomNum(item.id)}
        //     >{item.id}</StTitle>
        // })
    }
    </>
  )
}

export default DmList

// sidebar에서 방을 클릭하면 방의 채팅룸 연결
