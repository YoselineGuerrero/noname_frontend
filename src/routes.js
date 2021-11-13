import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardApp from './pages/DashboardApp';
import Products from './pages/Products';
import Blog from './pages/Blog';
import User from './pages/User';
import Userpage from './pages/Userpage';
import NotFound from './pages/Page404';
import { PrivateRoute } from './global_context/PrivateRoute';
import Resetpass from './pages/Resetpass';
import Opportunity from './pages/Opportunity';
// ----------------------------------------------------------------------
import Customer_support from './pages/Customer_support';
export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" replace /> },
        {
          path: 'app',
          element: (
            <PrivateRoute>
              <DashboardApp />
            </PrivateRoute>
          )
        },
        {
          path: 'user',
          element: (
            <PrivateRoute>
              <User />
            </PrivateRoute>
          )
        },
        {
          path: 'products',
          element: (
            <PrivateRoute>
              <Products />
            </PrivateRoute>
          )
        },
        {
          path: 'userpage/:user_id',
          element: (
            <PrivateRoute>
              <Userpage />
            </PrivateRoute>
          )
        },
        {
          path: 'blog',
          element: (
            <PrivateRoute>
              <Blog />
            </PrivateRoute>
          )
        },
        {
          path: 'cus_sup',
          element: (
            <PrivateRoute>
              <Customer_support />
            </PrivateRoute>
          )
        },
        {
          path: 'opp',
          element: (
            <PrivateRoute>
              <Opportunity />
            </PrivateRoute>
          )
        }
      ]
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: 'login', element: <Login /> },
        { path: 'resetpass', element: <Resetpass /> },
        { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '/', element: <Navigate to="/dashboard" /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
