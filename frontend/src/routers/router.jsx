import{
    createBrowserRouter
} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Cart from"../pages/Cart"
import Checkout from "../pages/Checkout";
import Singlebook from "../pages/books/singlebook";
import Privateroute from "./privateroute"
import OrderPage from "../pages/OrderPage";
import AdminRoute from "./AdminRoute";
import AdminLogin from "../components/AdminLogin";


const router= createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children: [
            {
                path:"/",
                element: <Home/>
            },
            {
                path:"/orders",
                element: <Privateroute><OrderPage/></Privateroute>  
            },
            {
                path:"/about",
                element: <h1>Home</h1>
            },
            {
                path:"/login",
                element: <Login/>
            },
            {
                path:"/register",
                element: <Register/>
            },
            {
                path:"/cart",
                element: <Cart/>
            },
            {
                path:"/checkout",
                element:<Privateroute><Checkout/></Privateroute>  
            },
            {
                path:`/books/:id`,
                element:<Singlebook/>
            }
        ]
    },
    {
        path:"/admin",
        element:<AdminLogin/>
    },
    {
        path:"/dashboard",
        element:<AdminRoute></AdminRoute>,
        children:[
            {
                path:"",
                element:<AdminRoute></AdminRoute>
            },
            {
                path:"add-new-book",
                element:<AdminRoute></AdminRoute>
            },
            {
                path:"edit-book/:id",
                element:<AdminRoute></AdminRoute>
            },
            {
                path:"manage-books",
                element:<AdminRoute></AdminRoute>
            },
          
        ]
    }
]) 

export default router;