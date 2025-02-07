import{
    createBrowserRouter
} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Cart from"../pages/Cart"
import Checkout from "../pages/Checkout";


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
                element: <div>himanshu</div>
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
                element: <Checkout/>
            },
        ]
    },
]) 

export default router;