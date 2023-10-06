import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { nextSong, playPause, prevSong } from '../../redux/player/playerSlice';
import Track from './Track';
import Controls from './Controls';
import Seekbar from './Seekbar';
import Player from './Player';
import VolumeBar from './VolumeBar';

const MusicPlayer = () => {
    // on récupère toutes les données du slice player
    const {activeSong, currentSongs, currentAlbum, currentIndex, isActive, isPlaying} = useSelector(state => state.player );
    // on définit tout les states du player 
    const [duration, setDuration] = useState(0); // Durée du titre
    const [seekTime, setSeekTime] = useState(0); // Récupérer une position de la barre (si ondéplace le curseur manuellement)
    const [appTime, setAppTime] = useState(0);// Position réel de la lecture
    const [volume, setVolume] = useState(0.3); //  pour gérer le volume 
    const [repeat, setRepeat] = useState(false);// si on active la lecture en boucle
    const [shuffle, setShuffle] = useState(false); // si on active la lecture aléatoire 
    const dispatch = useDispatch();

    useEffect(() => {
      // si le store contient un tableau de chanson on passe a true 
    if(currentSongs.length ) dispatch(playPause(true))
    
    }, [currentIndex]) // si current index change on reload le composant 

    // gestion de l'état play pause 
    const handlePlayPause = () => {
        // si aucune chanson est active on return 
        if(!isActive) return ; 

        isPlaying ? dispatch(playPause(false)) : dispatch(playPause(true))

        // if(isPlaying){
        //     //on met en pause 
        //     dispatch(playPause(false));
        // }else{
        //     //on met en play
        //     dispatch(playPause(true));
        // }
    }
    
// pour changer de musique en avant 
const handleNextSong = () => {
    // si on n'est pas en mode "aléatoire"
    if(!shuffle){
        let modul = (currentIndex + 1) % currentSongs.length ;
        dispatch(nextSong((modul)));
    }else{
        dispatch(nextSong(Math.floor(Math.random() * currentSongs.length -1)))
    }
}
// pour changer de musique en arrière 
const handlePrevSong = () => {
    // si on n'est pas en mode aléatoire 
    if(currentIndex === 0){
        //si l'index est a 0 on récupère le dernier index du tableau 
        dispatch(prevSong(currentSongs.length - 1))
    }else if(shuffle){
        dispatch(prevSong(Math.floor(Math.random() * currentSongs.length - 1)))
    }else {
        dispatch(prevSong((currentIndex - 1)))
    }
}


  return (
    <div className='relative sm:px-12 px-8 w-full flex items-center justify-between'>
        <Track isPlaying={isPlaying} isActive={isActive} activeSong={activeSong} currentAlbum={currentAlbum}/>
        <div className='flex-1 flex flex-col items-center justify-center'>
            <Controls
                isPlaying={isPlaying}
                isActive={isActive}
                repeat={repeat}
                setRepeat={setRepeat}
                shuffle={shuffle}
                setShuffle={setShuffle}
                currentSongs={currentSongs}
                handlePlayPause={handlePlayPause}
                handleNextSong={handleNextSong}
                handlePrevSong={handlePrevSong}
            />
            <Seekbar value={appTime} min="0" max={duration} onInput={(event) => setSeekTime(event.target.value)} setSeekTime={setSeekTime} appTime={appTime} /> 
            <Player activeSong={activeSong} volume={volume} isPlaying={isPlaying} seekTime={seekTime} repeat={repeat} currentIndex={currentIndex} onEnded={handleNextSong} onTimeUpdate={(event) => setAppTime(event.target.currentTime)} onLoadedData={(event) => setDuration(event.target.duration)}/>
        </div>
            <VolumeBar value={volume} min="0" max="1" onChange={(event) => setVolume(event.target.value)} setVolume={setVolume} />
    </div>
  )
}

export default MusicPlayer