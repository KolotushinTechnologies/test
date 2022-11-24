// Import Engine Modules
import React from 'react';
import { Routes, Route } from "react-router-dom";

// Import Components Modules
import Header from "./components/header/header";

// Import Pages
import MainPage from "./pages/main/main-page";

// Import Styles(*optional)

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </>
  );
};

export default App;
