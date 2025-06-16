import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root/Root";
import Home from "../Pages/Home/Home";
import AvailableFoods from "../Pages/AvailableFoods/AvailableFoods";
import AddFood from "../Pages/AddFood/AddFood";
import ManageMyFoods from "../Pages/ManageMyFoods/ManageMyFoods";
import MyFoodRequest from "../Pages/MyFoodRequest/MyFoodRequest";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import PrivateRoutes from "./PrivateRoutes";
import Loading from "../Pages/Loading/Loading";
import FoodDetails from "../Pages/FoodDetails/FoodDetails";
import UpdateFood from "../Pages/UpdateFood/UpdateFood";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () => fetch('http://localhost:3000/shareFood'),
        hydrateFallbackElement: <Loading></Loading>
      },
      {
        path: '/availableFoods',
        element: <AvailableFoods></AvailableFoods>,
        loader: () => fetch('http://localhost:3000/sortedAvailableFoods'),
        hydrateFallbackElement: <Loading></Loading>
      },
      {
        path: '/addFood',
        element:
          <PrivateRoutes>
            <AddFood></AddFood>
          </PrivateRoutes>
      },
      {
        path: '/updateFood/:id',
        element: <UpdateFood></UpdateFood>,
        loader: ({ params }) => fetch(`http://localhost:3000/shareFood/${params.id}`),
        hydrateFallbackElement: <Loading></Loading>
      },
      {
        path: '/manageMyFoods',
        element:
          <PrivateRoutes>
            <ManageMyFoods></ManageMyFoods>
          </PrivateRoutes>
      },
      {
        path: '/myFoodRequest',
        element:
          <PrivateRoutes>
            <MyFoodRequest></MyFoodRequest>
          </PrivateRoutes>
      },
      {
        path: '/shareFood/:id',
        element: <FoodDetails></FoodDetails>,
        loader: ({ params }) => fetch(`http://localhost:3000/shareFood/${params.id}`),
        hydrateFallbackElement: <Loading></Loading>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <Signup></Signup>
      }
    ]
  },
  {
    path: '/*',
    element: <ErrorPage></ErrorPage>
  }
]);