import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { api } from "../../constants/apiConstant";

const slice = createSlice({
    // on lui donne un nom 
    name: 'albums',

    initialState: {
        loading:false,
        albums: []

    },
    //Reducers: permet de remplir les valeurs des states 
    reducers: {
        setLoading: (state,action) => {
            state.loading = action.payload
        },
        setAlbums: (state,action) => {
            state.albums = action.payload 
        }
    }
    
})
// on exporte les actions sous formes de constantes 
export const {setLoading,setAlbums} = slice.actions ;

// on va créer la méthode qui permet de récupérer les infos en base de données 

export const fetchAlbums = () => async dispatch => {
    try {
        // on passe le loading a true 
        dispatch(setLoading(true));
        //on va récuperer les onfos en bdd 
        const response = await axios.get(`${api}/albums?isActive=true`);
        // on doit set les valeurs dans le state 
        dispatch(setAlbums(response.data));
        // on passe le loading a false 
        dispatch(setLoading(false))
    } catch (error) {
        console.log(error);
        dispatch(setLoading(false));
    }
}

export default slice.reducer ;