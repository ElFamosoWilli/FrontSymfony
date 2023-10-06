import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { fetchAlbumsSearch} from '../redux/search/searchSlice';

const Search = () => {

  const handleChange  = (event) => {
    // console.log(event.target.value);
    setSearchValue()
  }

  return (
    <>
      {/* <div>1- créer la barre de recherche dans la vue</div>
    <div>2- créer une méthode dans le slice pour passer la requete et stocker le resultat</div>
    <div>3- retourner la liste des albums dans la vue </div> */}
      <div className="flex w-full justify-center gap-2">
          <input onChange={fetchAlbumsSearch}type="search" placeholder="Search" className="border-b-2 border-gray-200 py-3 px-7 rounded-lg  w-[85%]" />
          <select className='rounded-lg'>
            <option value="default" selected disabled>filtres</option>
            {}
          </select>
          <button type="submit" className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-lg shadow'>
            <AiOutlineSearch size='20px' />
          </button>
      </div>
    </>
  )
}

export default Search