import { createBrowserRouter } from 'react-router-dom';
import Layout from '../../layout/Layout';
import Category from '../pages/Category';
import Home from '../pages/Home';
import Login from '../pages/Login';
import News from '../pages/News';
import Register from '../pages/Register';
import PrivateRoute from '../private/PrivateRoute';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                loader: () => fetch('https://news-hub-server.vercel.app/categories/08'),
                element: <Home />,
            },
            {
                path: '/category/:id',
                loader: ({ params }) =>
                    fetch(`https://news-hub-server.vercel.app/categories/${params.id}`),
                element: (
                    <PrivateRoute>
                        <Category />
                    </PrivateRoute>
                ),
            },
            {
                path: '/news/:id',
                loader: ({ params }) =>
                    fetch(`https://news-hub-server.vercel.app/news/${params.id}`),
                element: (
                    <PrivateRoute>
                        <News />
                    </PrivateRoute>
                ),
            },
        ],
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/register',
        element: <Register />,
    },
]);

export default routes;
