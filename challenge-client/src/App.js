import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import PhonesListPage from "./pages/PhonesListPage";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/phones" element={<PhonesListPage />}/>
      </Routes>
    </div>
  );
}
export default App;
