  import React, { useState } from 'react';
  import { createBrowserRouter, RouterProvider } from 'react-router-dom';
  import Layout from './components/Layout/Layout';
  import Home from './components/Home/Home';
  import Notfound from './components/Notfound/Notfound';
  import RecipeDetails from './components/RecipeDetails/RecipeDetails';
  import '@fortawesome/fontawesome-free/css/all.min.css';

  export default function App() {
    const [search, setSearch] = useState('');

    const router = createBrowserRouter([
      {
        path: '/',
        element: <Layout setSearch={setSearch} />,
        children: [
          { path: 'home', element: <Home searchTerm={search} /> },
          { path: 'recipeDetails/:id', element: <RecipeDetails /> }, // use :id for dynamic recipe
          { index: true, element: <Home searchTerm={search} /> },
          { path: '*', element: <Notfound /> },
        ],
      },
    ]);

    return <RouterProvider router={router} />;
  }
