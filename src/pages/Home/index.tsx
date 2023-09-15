import * as React from "react";
import Navbar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import ServiceCard from "./components/ServiceCard";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <SearchBar />
      <ServiceCard />
    </>
  );
};

export default Home;
