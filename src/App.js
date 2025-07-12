import "./App.css";
import Footer from "./components/footer";
import Nav from "./components/nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./components/signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/products" element={<h1>Products Listing Component</h1>} />
          <Route path="/add" element={<h1>Add Listing Component</h1>} />
          <Route
            path="/update"
            element={<h1>Update Products Listing Component</h1>}
          />
          <Route
            path="/logout"
            element={<h1>Logout Products Listing Component</h1>}
          />
          <Route
            path="/profile"
            element={<h1>Profile Products Listing Component</h1>}
          />
          <Route
            path="/signup"
            element={<Signup/>}
          />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
