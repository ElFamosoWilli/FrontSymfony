import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../screens/ErrorPage";
import Home from "../screens/Home";
import Search from "../screens/Search";
import Library from "../screens/Library";
import Playlist from "../screens/Playlist";
import Wishlist from "../screens/Wishlist";
import Details from "../screens/Details";

const Router = createBrowserRouter([
    {
        element:(
            <>
            {/* on appelle l'element qu'on voudras afficher sur toute les vues  */}
                <App/>
            </>
        ),
        errorElement: <ErrorPage/>,
        //on déclare les routes
        children:[
            {
                path: "/",
                element: <Home/>,
                errorElement: <ErrorPage/>
            },
            {
                path: "/search",
                element: <Search/>,
                errorElement: <ErrorPage/>
            },
            {
                path: "/library",
                element: <Library/>,
                errorElement: <ErrorPage/>
            },
            {
                path: "/add-playlist",
                element: <Playlist/>,
                errorElement: <ErrorPage/>
            },
            {
                path: "/wishlist",
                element: <Wishlist/>,
                errorElement: <ErrorPage/>
            },
            {
                path: "/detail",
                element: <Details/>,
                errorElement: <ErrorPage/>
            },
        ]
    }
])

export default Router ;