import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App'
import HomePage from "./pages/homepage/HomePage";
import ContactPage from "./pages/contactpage/ContactPage";
import ProjectsPage from "./pages/projectpage/ProjectPage";
import ProjectPages from "./pages/projectspages/ProjectsPages";


const router = createBrowserRouter(
  [
  {
    element: <App />,
    children: [
  
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/projects",
    element: <ProjectsPage/>,
  },
  {
    path: "/contact",
    element: <ContactPage/>,
  },
  {
    path: "/project/:id", 
    element: <ProjectPages/>,
  }, 
]}])


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);