import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Charts from "./components/Charts/Charts";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Users from "./components/Users/Users";
export const ThemeMode = createContext("Theme");
function App() {
  const [theme, setTheme] = useState(true);
  return (
    <ThemeMode.Provider value={[theme, setTheme]}>
      <div>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/charts" element={<Charts />}></Route>
        </Routes>
      </div>
    </ThemeMode.Provider>
  );
}

export default App;
