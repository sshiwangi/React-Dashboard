import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Settings from "./components/Settings";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Layout />}>
          <Route index path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
