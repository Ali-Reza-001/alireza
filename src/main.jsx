import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from "./components/assets/ScrollToTop";
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
const queryClient = new QueryClient();


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient} >
      <Router>
        <ScrollToTop/>
        <Routes>
          <Route path='/*' element={<App />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  </StrictMode>,
)
