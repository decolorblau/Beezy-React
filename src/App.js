import "./App.css";
import "@fontsource/roboto";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MarvelPage from "./pages/MarvelPage/MarvelPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import DetailPage from "./pages/DetailPage.js/DetailPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MarvelPage />} />
          <Route path="/:id" element={<DetailPage />} />
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
