import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills';


ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </Router>
	</React.StrictMode>
)