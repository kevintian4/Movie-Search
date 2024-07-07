import { createRoot } from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import './styles/index.scss';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Router>
    <App />
  </Router>
);
