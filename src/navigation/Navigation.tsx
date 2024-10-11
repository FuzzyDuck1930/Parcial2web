import MainPage from "../screens/mainpage/MainPage";
import DetailPage from "../screens/detailpage/DetailPage";
import {
    createBrowserRouter,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage></MainPage>
    },
    {
        path: "/cuerpo/:id",
        element: <DetailPage></DetailPage>
    }
]);

export default router