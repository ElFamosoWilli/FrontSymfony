import { configureStore } from "@reduxjs/toolkit";
import albumSlice from "./album/albumSlice";
import playerSlice from "./player/playerSlice";


const store  = configureStore({
reducer: {
    //on déclarera ici des futurs reducer
    albums: albumSlice,
    player:playerSlice
}
});

export default store ; 