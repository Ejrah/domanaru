import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import Blog from './pages/Blog';
import Post from './pages/Post';
// import About from './pages/About';
import UnderMaintenance from './pages/UnderMaintenance';

import Header from './components/Header';
import Footer from './components/Footer';
import TopBtn from './components/TopBtn';

function App() {
  console.log("Rendering App");
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<UnderMaintenance />} />
          <Route path="/post" element={<Post />} />
          <Route path="/about" element={<UnderMaintenance />} />
        </Routes>
      </main>
      <Footer />
      <TopBtn />
    </Router>
  );
}

export default App;
