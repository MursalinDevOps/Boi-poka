import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Root from './Components/Root/Root';
import ErrorPage from './Components/ErrorPage/ErrorPage.';
import HomePage from './Components/HomePage/HomePage';
import Dashboard from './Components/Dashboard/Dashboard';
import BookDetail from './Components/BookDetail/BookDetail';
import ListedBooks from './Components/ListedBooks/ListedBooks';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<HomePage></HomePage>
      },
      {
        path:'/books/:bookId',
        element:<BookDetail></BookDetail>,
        loader:()=> fetch('/booksData.json')  // for learning purpose. Ideally we won't fetch all data for a single data
      },
      {
        path:'/dashboard',
        element:<Dashboard></Dashboard>
      },
      {
        path:'/listed-books',
        element:<ListedBooks></ListedBooks>,
        loader:()=> fetch('/booksData.json')  // for learning purpose. Ideally we won't fetch all data for a single data
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer></ToastContainer>
  </StrictMode>,
)
