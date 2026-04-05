import './App.css'
import Home from './home/Home';
import AuthLayout from './layouts/AuthLayout';
import Login from './login/Login';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { 
    element: <AuthLayout/>,
    children: [{
      element: <Login/>,
      path: "/"
    }]
  },
  { path: "/home", element: <Home/> },
]);

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App