import React from "react";
import HomeCarts from "../HomeCarts/HomeCarts";
import HomeContainer from "../HomeContainer/HomeContainer";

const Home = () => {
  return (
    <div className="bg-[#4c1d95] min-h-screen w-full grid grid-cols-1 md:grid-cols-[1fr_400px]">
      <HomeContainer></HomeContainer>
      <HomeCarts></HomeCarts>
    </div>
  );
};

export default Home;
