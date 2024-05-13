import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App';
import PageProjet from "./pages/pageProjet/PageProjet";
import HomePage from "./pages/homepage/HomePage";
import ContactPage from "./pages/contactpage/ContactPage";
import ProjectsPages from "./pages/projectspages/ProjectsPages";


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
    element: <ProjectsPages/>,
  },
  {
    path: "/contact",
    element: <ContactPage/>,
  },
  {
    path: "/projects/:id",
    element: <PageProjet/>,
  }
]}])


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);