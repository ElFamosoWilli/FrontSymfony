// ici on va construire 2 tableaux avec les données pour la navbar
// le premier pour la gestion des albums 
import {AiOutlineAppstoreAdd , AiOutlineHome , AiOutlineSearch} from 'react-icons/ai'
import {BiLibrary} from 'react-icons/bi'
import {MdFavoriteBorder} from 'react-icons/md'
import { apiRoot } from "./apiConstant";

export const styleIcon = {width: '25px', height: '25px'};
export const tableIcon = {width: '20px', height: '20px'};


export const dataAlbumNav = [
    {title: "Accueil", path: "/",icon: AiOutlineHome},
    {title: "Rechercher", path: "/search",icon: AiOutlineSearch},
    {title: "Bibliothèque", path: "/library",icon: BiLibrary},
];

// 2 ème pour les options utilisateurs 


export const dataUserNav = [
    {title: "Creer une playlist", path: "/add-playlist",icon: AiOutlineAppstoreAdd},
    {title: "Titres likés", path: "/wishlist",icon: MdFavoriteBorder},


]

export const imgLogo = `${apiRoot}image/spotify_2.png`;