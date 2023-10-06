import React from 'react'
import { useLocation } from 'react-router-dom';
import DetailAlbum from '../component/DetailAlbum';

const Details = () => {
    //on appelle le hook de react router-router-dom
    const location = useLocation();
    // on récupère les dats depuis le router 
    const data = location?.state?.params ; 
    console.log(data);
  return (
    <DetailAlbum dataAlbum={data} />
    
  )
}

export default Details