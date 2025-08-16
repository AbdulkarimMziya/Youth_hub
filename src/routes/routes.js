// Route definitions for the Youth Hub application
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Programs from '../pages/Programs/Programs';
import Contact from '../pages/Contact/Contact';

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
    path: '/programs',
    element: Programs,
    name: 'Programs', 
    showInNav: true
  },
  {
    path: '/contact',
    element: Contact,
    name: 'Contact',
    showInNav: true
  }
];

// Helper function to get navigation routes
export const getNavRoutes = () => {
  return routes.filter(route => route.showInNav);
};

// Helper function to get route by path
export const getRouteByPath = (path) => {
  return routes.find(route => route.path === path);
};
