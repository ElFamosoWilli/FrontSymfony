import { createSelector } from "@reduxjs/toolkit";

// on récupère les données des slice qu'on stock dans des constantes 
const selectAlbums = state => state.albums.albums ;
const selectLoading = state => state.albums.loading ; 
// on créer le selector 

export const selectAlbumData = createSelector(
    [selectAlbums,selectLoading],
    (albums,loading) => ({albums,loading})
)