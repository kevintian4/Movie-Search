import Header from './components/Header';
import AppRoutes from './components/Routes';
import Footer from './components/Footer';
import './styles/App.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;