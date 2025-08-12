import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./components/layouts/Layout";
import { ThemeProvider } from "./components/themes/theme-provider";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";

// function PrivateRoute({ children }: { children: JSX.Element }) {
//   const user = useAuthStore((s) => s.user);
//   return user ? children : <Navigate to="/login" />;
// }

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
