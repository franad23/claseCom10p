import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import LoginPage from "./pages/login";
import AdminPage from "./pages/admin";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <h1>HOME</h1>
    },
    {
      path: "/login",
      element: <LoginPage/>,
    },
    {
      path: "/admin",
      element: <AdminPage/>
    }, {
      path: "/contacto",
      element: <h1>CONTACTO</h1>
    }
]);
  return (
    <RouterProvider router={router} />
  )
}

export default App