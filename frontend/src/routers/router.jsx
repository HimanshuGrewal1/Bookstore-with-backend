import{
    createBrowserRouter
} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Cart from"../pages/Cart"
import Checkout from "../pages/Checkout";
import Singlebook from "../pages/books/Singlebook";
import Privateroute from "./privateroute"
import OrderPage from "../pages/OrderPage";
import AdminRoute from "./AdminRoute";
import AdminLogin from "../components/AdminLogin";
import Dashboard from "../pages/Dashboard";
import Addbook from "../pages/Addbook";
import DashboardLayout from "../pages/Home/DashboardLayout";
import ManageBooks from "../pages/ManageBook";
import UpdateBook from "../pages/EditBook";


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
        element:<AdminRoute><DashboardLayout/></AdminRoute>,
        children:[
            {
                path:"",
                element:<AdminRoute><Dashboard/></AdminRoute>
            },
            {
                path:"add-new-book",
                element:<AdminRoute><Addbook/></AdminRoute>
            },
            {
                path:"edit-book/:id",
                element:<AdminRoute><UpdateBook/></AdminRoute>
            },
            {
                path:"manage-books",
                element:<AdminRoute><ManageBooks/></AdminRoute>
            },
          
        ]
    }
]) 

export default router;