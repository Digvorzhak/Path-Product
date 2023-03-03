import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/Landing";
import PostPage from "./pages/Posts";
import ErrorPage from "./pages/Error";

const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/posts", element: <PostPage /> },
  { path: "*", element: <ErrorPage /> },
]);

function App() {
  return (
    <RouterProvider router={router}>
      <LandingPage />
    </RouterProvider>
  );
}

export default App;
