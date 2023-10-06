import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { playPause, setActiveAlbum, setActiveSong } from '../../redux/player/playerSlice';
import PlayPause from '../PlayPause';
import { AiFillHeart, AiFillInfoCircle, AiOutlineHeart, AiOutlineInfoCircle } from 'react-icons/ai';
import { Collapse } from 'react-collapse';
import InfoAlbum from './InfoAlbum';

const ToolsBarDetail = ({ dataAlbum }) => {
    //info de l'album
    const data = dataAlbum;
    const songs = dataAlbum?.songs; //tableau de chansons
    const [index, setIndex] = useState(0); //index de la chanson en cours d'utilisation 
    const [isInList, setIsInList] = useState(false); // si la chanson est dans la liste 
    const [isCollapsed, setIsCollapsed] = useState(false); // si la liste  de la lecture  est réduite 
    // o nrécupère les données du slice 
    const { isPlaying, activeSong } = useSelector(state => state.player);
    // méthode pour l'affichage de l'icone favoris 
    const toggleFavorite = () => {
        setIsInList(!isInList);
        // TODO  prevoir la requête pour le changer en BDD 
    }

    //on récupère le hook dispatch 
    const dispatch = useDispatch();

    //méthode pour mettre en pause la chanson 
    const handlePauseClick = () => {
        dispatch(playPause(false));
    }
    const handlePlayClick = (index) => {
        dispatch(setActiveSong({ songs, data, index }))
        dispatch(setActiveAlbum({data}))
        dispatch(playPause(true));
    }

    //méthode pour ouvrir ou fermer le collapse 
    const handleCOllapseClick = () => {
        setIsCollapsed(!isCollapsed);
    }

    return (
        <>
            <div className='flex items-center ml-5'>
                <div className='tools-menu-detail cursor-pointer mr-3'>
                    <PlayPause songs={songs} handlePause={handlePauseClick} handlePlay={handlePlayClick} isPlaying={isPlaying} activeSong={activeSong} index={index} data={data} />
                </div>
                {/* bouton favori */}
                <div className='cursor-pointer' onClick={() => toggleFavorite()}>
                    {isInList ?
                        <AiFillHeart className='text-green m-3' style={{ fontSize: '30px' }} />
                        :
                        <AiOutlineHeart className='text-green m-3' style={{ fontSize: '30px' }} />
                    }
                </div>
                {/* bouton pour le collapse (pour la biographie de l'artiste) */}
                <div className='cursor-pointer' onClick={handleCOllapseClick}>
                    {isCollapsed ?
                        <AiFillInfoCircle className='text-green m-3' style={{ fontSize: '30px' }} />
                        :
                        <AiOutlineInfoCircle className='text-green m-3' style={{ fontSize: '30px' }} />
                    }
                </div>
            </div>
            {/* on récuère les infos du collapse */}
            <div>
                <Collapse isOpened={isCollapsed}>
                    {/* TODO  recupérer le composant pour le rendu */}
                    <InfoAlbum dataAlbum={dataAlbum}/>
                </Collapse>
            </div>
        </>
    )
}

export default ToolsBarDetail