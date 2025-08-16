import './styles/globals.css';
import './App.css';
import MainLayout from './layouts/MainLayout/MainLayout';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="app">
      <MainLayout>
        <Home />
      </MainLayout>
    </div>
  );
}

export default App
