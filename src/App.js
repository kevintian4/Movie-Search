import { useLocation } from 'react-router-dom';
import Header from './components/Header';
import AppRoutes from './components/Routes';
import Footer from './components/Footer';
import './styles/App.scss';

function App() {
  const location = useLocation();

  return (
    <div className="app">
      {location.pathname === '/' && <Header />}
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;