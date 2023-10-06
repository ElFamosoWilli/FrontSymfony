import React from 'react'
import { BsPauseCircleFill, BsPlayCircleFill } from 'react-icons/bs'
const PlayPause = ({
    size = '60px',
    isPlaying, // gere l'état si on est en lecture ou en pause 
    songs, // tableau des chansons : totue les pistes d'un album
    activeSong, // chanson en cours de lecture
    handlePause, // methode qui permet de mettre en pause la chanson 
    handlePlay, // méthode qui permet de jouer de la chanson
    index

}) => {
  return (
    // on check si on est en mode play && 
    //si le titre de la chanson en cours de lecture est égale au titre de la chanson du tableau à l'index donnée
    isPlaying && activeSong?.title === songs[index]?.title ?
    // si vrai on retourne l'icone de pause avec la méthode handlePause 
    <BsPauseCircleFill size={size} className='text-green shadow-md' onClick={handlePause}/>
    :
    <BsPlayCircleFill size={size} className='text-green shadow-md' onClick={handlePlay} />
  )
}

export default PlayPause