import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <h1>MARVEL</h1>
      <Router>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/" element={<App />} />
          <Route path="/characters" element={<HomePage />} />
          <Route path="/series" element={<HomePage />} />
          <Route path="/events" element={<HomePage />} />
          <Route path="*"></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
