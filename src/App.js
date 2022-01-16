import React from 'react';
// upgrading information - https://reactrouter.com/docs/en/v6/upgrading/v5
import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/Home';
import PortfolioPage from './pages/Portfolio';
import { portfolio } from './routes';

function App() {

  return (
    <Router>
      <div className="flex">
        <div className="shrink-0 grow-0 m basis-auto md:basis-72 p-2 md:p-5 px-2 md:px-6 bg-green-500 h-screen">
          <Navbar />
        </div>
        <div className="justify-self-stretch w-full h-screen bg-white overflow-y-scroll">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="portfolio" element={<PortfolioPage />} />
            {portfolio.map(p => (
              <Route path={p.href} element={<p.component />} />
            ))}
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App;
