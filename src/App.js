import { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Charts from "./components/Charts/Charts";
import Colors from "./components/Colors/Colors";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Products from "./components/Products/Products";
import Theme from "./components/Theme/Theme";
import Users from "./components/Users/Users";
import UsersOutlet from "./components/UsersOutlet/UsersOutlet";
import getThemeVariants from "./components/utilities/getThemeVariants";
import { useThemeDetector } from "./hooks/useThemeDetector";
export const ThemeMode = createContext("Theme");
export const ThemeMode2 = createContext("Theme2");

function App() {
  const [theme, setTheme] = useState("dark");
  const [theme2, setTheme2] = useState({});
  const currentTheme = useThemeDetector();
  useEffect(() => {
    const themeData = getThemeVariants();
    setTheme(currentTheme ? "dark" : "light");
    setTheme2(themeData);
  }, [currentTheme]);
  return (
    <div className="duration-300">
      <ThemeMode.Provider value={[theme, setTheme]}>
        <ThemeMode2.Provider value={[theme2, setTheme2]}>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/products/:id" element={<ProductDetails />}></Route>
            <Route path="/users" element={<Users />}></Route>
            <Route path="/users/usersOutLet" element={<UsersOutlet />}></Route>
            <Route path="/charts" element={<Charts />}></Route>
            <Route path="/colors" element={<Colors />}></Route>
            <Route path="/theme" element={<Theme />}></Route>
          </Routes>
        </ThemeMode2.Provider>
      </ThemeMode.Provider>
    </div>
  );
}

export default App;
