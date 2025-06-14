import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root/Root";
import Home from "../Pages/Home/Home";
import AvailableFoods from "../Pages/AvailableFoods/AvailableFoods";
import AddFood from "../Pages/AddFood/AddFood";
import ManageMyFoods from "../Pages/ManageMyFoods/ManageMyFoods";
import MyFoodRequest from "../Pages/MyFoodRequest/MyFoodRequest";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: '/availableFoods',
        element: <AvailableFoods></AvailableFoods>
      },
      {
        path: '/addFood',
        element: <AddFood></AddFood>
      },
      {
        path: '/manageMyFoods',
        element: <ManageMyFoods></ManageMyFoods>
      },
      {
        path: '/myFoodRequest',
        element: <MyFoodRequest></MyFoodRequest>
      }
    ]
  },
  {
    path: '/*',
    element: <ErrorPage></ErrorPage>
  }
]);