import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAlbums } from '../redux/album/albumSlice';
import { selectAlbumData } from '../redux/album/albumSelector';
import Loader from '../component/Loader';
import AlbumCard from '../component/AlbumCard';

const Home = () => {
  // on récupère le hook de react redux 
  const dispatch = useDispatch();
  //on récupère les infos du slice de player 
  //pour savoir si une chanson est en cours de lecture et si le player est actif 
  const {activeSong, isPlaying} = useSelector(state => state.player)
  // on appelle le hook use effect, son rôle est essentiel 
  // car il gère 3 états , le chargement , la mise a jour , et le montage 
  useEffect(() => {
    // la mécanique lors du montage 
    // pour nous c'est ici qu'on va appeller notre reducer 
    // pour récupérer les données lors du montage 
    dispatch(fetchAlbums());
    // si j'ai besoin de faire quelque chose lors du démontage du composant
    return () => {
      // mécanique lors du démontage 
    }
    // et en dernier la mecanique de mise a jour
  },[dispatch]);

  // on récupère notre selector 
  const {albums,loading} = useSelector(selectAlbumData);
  const dataAlbum = albums['hydra:member']; 
    return (
    loading ? <Loader/> : 
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Tous les albums 
      </h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {/* on va mapper sur notre tableau albums  */}
        {dataAlbum && dataAlbum.map((data, index)=> {
          return (
            // on appelle AlbumCard en lui passant ses props
            <AlbumCard key={index}
            // data: infos sur tout les albums
             data={data} 
             //songs le tableau de chansons
             songs= {data.songs}
             //isPlaying pour savoir si une chanson est en cours de lecture 
             isPlaying={isPlaying}
            //ActiveSong pour savoir si une chanson est en cours de lecture 
             activeSong={activeSong}
             //index de la chanson en cours de lecture 
             index={0}
             
            />
          )
        })}
      </div>
    </div>
  )
}

export default Home