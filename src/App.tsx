import { ThemeProvider } from "@/components/ui/theme-provider";
import { Client } from "appwrite";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Login from "@/Login";
import Register from "@/Register";
import Dashboard from "@/Dashboard";
import { isLoggedIn } from "./lib/server/auth/controller";

const userLoggedIn = await isLoggedIn();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="/login" element={userLoggedIn ? <Dashboard /> : <Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/dashboard"
        element={userLoggedIn ? <Dashboard /> : <Navigate to="/login" />}
      />
      <Route path="/dashboard" element={<Dashboard />} />
    </Route>,
  ),
);

export default function App({ routes }) {
  const client = new Client();
  console.log(process.env.NODE_ENV);
  if (process.env.NODE_ENV === "development") {
    client
      .setEndpoint("http://localhost/v1")
      .setProject("673e5e130010788ad4c9");
  } else {
    client.setProject("671d9734ace647d7440b");
  }
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
