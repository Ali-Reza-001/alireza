import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from "./components/assets/ScrollToTop";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path='/*' element={<App />} />
      </Routes>
    </Router>
  </StrictMode>,
)
