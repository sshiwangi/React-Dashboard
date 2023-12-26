import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Sidebar_Links } from "./lib/consts/navigation";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import { Suspense } from "react";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          {Sidebar_Links.map((routes) => (
            <Route
              key={routes.key}
              path={routes.path}
              element={<Suspense fallback>{routes.component}</Suspense>}
            />
          ))}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
