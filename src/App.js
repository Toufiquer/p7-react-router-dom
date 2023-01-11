import { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Charts from "./components/Charts/Charts";
import Colors from "./components/Colors/Colors";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Users from "./components/Users/Users";
import { useThemeDetector } from "./hooks/useThemeDetector";
export const ThemeMode = createContext("Theme");

function App() {
  const [theme, setTheme] = useState(true);
  const currentTheme = useThemeDetector();
  useEffect(() => {
    setTheme(currentTheme);
  }, [currentTheme]);
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
          <Route path="/colors" element={<Colors />}></Route>
        </Routes>
      </div>
    </ThemeMode.Provider>
  );
}

export default App;
