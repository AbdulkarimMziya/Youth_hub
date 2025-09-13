import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import WhyYouth from '../pages/WhyYouth';
import PlanOfAction from '../pages/PlanOfAction';
import Donate from '../pages/Donate';
import Signup from '../pages/Signup';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about-us',
        element: <AboutUs />,
      },
      {
        path: 'why-youth',
        element: <WhyYouth />,
      },
      {
        path: 'plan-of-action',
        element: <PlanOfAction />, 
      },
      {
        path: 'donate',
        element: <Donate />,
      },
      {
        path: 'signup',
        element: <Signup />,
      }
    ],
  },
]);

export default router;
