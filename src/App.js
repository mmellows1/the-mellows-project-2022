import React from 'react';
// upgrading information - https://reactrouter.com/docs/en/v6/upgrading/v5
import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/Home';
import SingleWorkPage from './pages/SingleWork';
import WorkPage from './pages/Work';



function App() {

  return (
    <Router>
      <div className="flex">
        <div className="shrink-0 grow-0 m basis-auto md:basis-72 p-5 px-2 bg-green-500 h-screen overflow-y-scroll">
          <Navbar />
        </div>
        <div className="h-screen overflow-y-auto">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/work" element={<WorkPage />}>
              <Route path=":id" element={<SingleWorkPage />} />
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App;
