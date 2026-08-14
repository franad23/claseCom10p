import { useEffect } from 'react'
import './App.css'
import { usersSeeder } from './utils/users';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Login from './pages/login';
import Admin from './pages/admin';

function App() {

  const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login/>,
  }, {
    path: "/admin",
    element: <Admin/>
  }
]);

  useEffect(() => {
    usersSeeder();
  }, []);

  return (
    <>
      <RouterProvider router={router} />,
    </>
  )
}

export default App
