import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./components/layouts/Layout";
import { ThemeProvider } from "./components/themes/theme-provider";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import { eventsLoader } from "./store/loaders/eventLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
        loader: eventsLoader,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="eventloop-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
