import { ThemeProvider } from "@/components/ui/theme-provider";
import { Client } from "appwrite";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Login from "@/Login";
import Register from "@/Register";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Route>,
  ),
);

export default function App({ routes }) {
  const client = new Client();
  client.setProject("671d9734ace647d7440b");
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
