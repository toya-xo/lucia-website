import { createRoot } from 'react-dom/client'
import './index.css'
import Effects from './Effects.jsx'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from './pages/index.jsx'
import Projects from './pages/projects.jsx';
import Photos from './pages/photos.jsx'

createRoot(document.getElementById('root')).render(
  <div className="main-container">
    <Effects />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/photos" element={<Photos />} />
      </Routes>
    </Router>
  </div>
)
