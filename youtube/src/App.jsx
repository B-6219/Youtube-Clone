import React from "react";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar"; // ✅ Matches file name exactly
import Home from "./components/Home";       // ✅ Only if you actually have Home.jsx

const App = () => {
  return (
    <section className="bg-[#000000] h-screen flex flex-col">
      {/* Navbar at the top */}
      <NavBar className="fixed top-0 left-0 right-0 z-50" />

      {/* Sidebar + Main content */}
      <div  className="flex pt-[64px] h-full">
        {/* Sidebar on the left */}
        <SideBar className="fixed top-[64px] left-0 h-[calc(100%-64px)]"/>

        {/* Main content on the right */}
      <div className="flex-1 ml-[240px] p-6 text-white">
        <h1 className="text-3xl font-serif text-center">Hi there</h1>
        <Home />
    </div>
      </div>


    </section>
  );
};

export default App;
