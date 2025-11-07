import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/Login"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App
