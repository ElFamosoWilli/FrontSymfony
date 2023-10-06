import React from 'react'
import { useLocation } from 'react-router-dom'
import HeaderDetail from './HeaderDetail';
import ToolsBarDetail from './ToolsBarDetail';
import ListAlbumSong from './ListAlbumSong';

const DetailAlbum = (props) => {
  const {dataAlbum} = props ; 
  console.log("PROPS:",dataAlbum);
  return (
    <>
      <HeaderDetail dataAlbum={dataAlbum}/>
      <ToolsBarDetail dataAlbum={dataAlbum}/>
      <ListAlbumSong dataAlbum={dataAlbum}/>
    </>
  )
}

export default DetailAlbum