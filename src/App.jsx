import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './styles/index.scss';
import { Home, Login, UserProfile } from './pages';
import { Header, Footer } from './components';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
