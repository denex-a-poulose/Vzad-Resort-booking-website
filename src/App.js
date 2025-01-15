import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "@fontsource/dm-sans"; // Default styles
import "@fontsource/dm-sans/400.css"; // Regular
import "@fontsource/dm-sans/500.css"; // Medium
import "@fontsource/dm-sans/700.css"; // Bold
import Home from "./pages/Home";
import ResortPage from "./pages/ResortPage";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resorts" element={<ResortPage />} />
            {/* <Route path="/billing" element={<BillingPage />} /> */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
