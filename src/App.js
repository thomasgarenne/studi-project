import './App.css';

import Layout from 'components/UI/Layout';
import Song from 'components/song';
import Home from 'components/home';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route element={<Song />} path="/song" />
          <Route element={<Home />} path="/" />
        </Routes>
      </Layout>
    </Router>

  );
}

export default App;
