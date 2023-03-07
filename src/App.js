import { createBrowserRouter, RouterProvider, Outlet, Route } from "react-router-dom";
import LandingPage from "./pages/Landing";
import PostPage from "./pages/Posts";
import ErrorPage from "./pages/Error";
import UploadPost from "./pages/UploadPost";
import PostDetails from "./pages/PostDetails";

const router = createBrowserRouter([
  { path: "/", element: <LandingPage />, errorElement: <ErrorPage /> },
  { path: "/posts", element: <PostPage />, errorElement: <ErrorPage /> },
  { path: "/uploadpost", element: <UploadPost />, errorElement: <ErrorPage /> },
  { path: "/edit-product/:id", element: <PostDetails />, errorElement: <ErrorPage /> },
  { path: "*", element: <ErrorPage />, errorElement: <ErrorPage /> },
]);

function App() {
  return (
    <RouterProvider router={router}>
      <UploadPost />
    </RouterProvider>
  );
}

export default App;
