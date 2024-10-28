import ErrorRout from "../pages/ErrorRout";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import Series from "../pages/Series";
import Collections from "../pages/Collections";
import ViewPage from "../pages/ViewPage";
import SearchPage from "../pages/SearchPage";

export const routes = [
    { path:"*", element: <ErrorRout /> },
    { path:"/Home", element: <Home /> },
    { path:"/Movies", element: <Movies /> },
    { path:"/Series", element: <Series /> },
    { path:"/Collections", element: <Collections /> },
]

export const notNavigationMunuRoutes = [
    { path:"/View/:id", element: <ViewPage /> },
    { path:"/Search/:text?", element: <SearchPage /> },
]