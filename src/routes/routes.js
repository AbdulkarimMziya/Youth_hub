// Route definitions for the Youth Hub application
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Programs from '../pages/Programs/Programs';
import Events from '../pages/Events/Events';
import Contact from '../pages/Contact/Contact';
import Join from '../pages/Join/Join';

// Define all application routes
export const routes = [
  {
    path: '/',
    element: Home,
    name: 'Home',
    showInNav: true
  },
  {
    path: '/about',
    element: About,
    name: 'About',
    showInNav: true
  },
  {
    path: '/events',
    element: Events,
    name: 'Events',
    showInNav: true
  },
  {
    path: '/contact',
    element: Contact,
    name: 'Contact',
    showInNav: true
  },
  {
    path: '/join',
    element: Join,
    name: 'Join',
    showInNav: false
  }
];

// Helper function to get navigation routes
export const getNavRoutes = () => {
  return routes.filter(route => route.showInNav);
};
