import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import AddProduct from "../pages/AddProduct/AddProduct";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import MyCart from "../pages/MyCart/MyCart";
import BrandInfo from "../pages/Brands/BrandInfo";
import ProductDetails from "../pages/Brands/ProductDetails";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/signIn',
                element:<SignIn></SignIn>
            },
            {
                path:'/signUp',
                element:<SignUp></SignUp>
            },
            {
                path:'/addProduct',
                element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path:'/myCart',
                element:<PrivateRoute><MyCart></MyCart></PrivateRoute>
            },
            {
                path:'/brand/:id',
                element:<BrandInfo></BrandInfo>,
                loader:({params})=> fetch(`http://localhost:5000/brands/${params.id}`)
            },
            {
                path:'/productDetails/:id',
                element:<ProductDetails></ProductDetails>,
                loader:({params})=>fetch(`http://localhost:5000/products/${params.id}`)
            }
        ]
    }
])