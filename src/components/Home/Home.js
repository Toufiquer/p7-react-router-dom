import React, { useContext } from "react";
import { ThemeMode2 } from "../../App";
import HomeCarts from "../HomeCarts/HomeCarts";
import HomeContainer from "../HomeContainer/HomeContainer";

const Home = () => {
  const [theme2] = useContext(ThemeMode2);
  const { background, hoverBackground } = theme2;
  return (
    <div className={`${background} ${hoverBackground} min-h-screen w-full grid grid-cols-1 md:grid-cols-[1fr_400px]`}>
      <HomeContainer></HomeContainer>
      <HomeCarts></HomeCarts>
    </div>
  );
};

export default Home;
