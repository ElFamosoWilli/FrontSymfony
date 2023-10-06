import React from 'react'
import { BsArrowRepeat, BsFillPauseFill, BsFillPlayFill, BsShuffle } from 'react-icons/bs'
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md'

const Controls = ({isPlaying,repeat,setRepeat,shuffle,setShuffle,currentSongs,handlePlayPause,handlePrevSong,handleNextSong}) => {

  return (
    <div className='flex items-center justify-around md:w-36 lg:w-52 2xl:w-80'>
        {/* on affiche le bouton repeat  */}
        <BsArrowRepeat 
        size={20}
        color={repeat? 'rgba(30,215,96,1)' : '#fff'}
        className='cursor-pointer hidden sm:block'
        onClick={()=> setRepeat((prev) => !prev)}
        />
        {/* on affiche le bouton previous si on a un tableau de chanson */}
        
        {currentSongs.length >1 &&
        <MdSkipPrevious 
            size={30}
            color="#fff"
            className='cursor-pointer'
            onClick={handlePrevSong }
        />
        }
        {currentSongs.length >1  &&
        <MdSkipNext 
            size={30}
            color="#fff"
            className='cursor-pointer'
            onClick={handleNextSong}
        />
        }
        {isPlaying ? (
            <BsFillPauseFill 
            size={45}
            color='#fff'
            onClick={handlePlayPause}
            className='cursor-pointer'
            />
        ) : (
            <BsFillPlayFill 
            size={45}
            color='#fff'
            onClick={handlePlayPause}
            className='cursor-pointer'
            />

        )}
         {/* on affiche le bouton shuffle  */}
         <BsShuffle
        size={20}
        color={shuffle? 'rgba(30,215,96,1)' : '#fff'}
        className='cursor-pointer hidden sm:block'
        onClick={()=> setShuffle((prev) => !prev)}
        />
    </div>
  )
}

export default Controls