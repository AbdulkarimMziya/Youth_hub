import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './routes';
import MainLayout from '../layouts/MainLayout/MainLayout';

const AppRouter = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          {routes.map((route) => (
            <Route 
              key={route.path} 
              path={route.path} 
              element={<route.element />} 
            />
          ))}
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default AppRouter;
