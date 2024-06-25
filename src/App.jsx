import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes,useNavigate } from 'react-router-dom';
import MainPage from './main';

function App() {
  let navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 App">
      <div className="p-6 text-center bg-white rounded-lg shadow-md animate-fadeIn">
        <img src="./lotte_logo.png" alt="Lotte Logo" className="w-32 mx-auto mb-4" />
        <p className="text-3xl font-bold text-custom font-custom">롯데 자이언츠 팬 페이지</p>
        <button onClick={()=> navigate('/main')}className="px-4 py-2 mt-4 text-black border border-gray-300 rounded-full">입장하기</button>
      </div>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default AppWrapper;
