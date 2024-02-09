// import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import "./App.css";
import MainLayout from "./components/layout/MainLayout";

function App() {
  return (
    <>
      <MainLayout></MainLayout>;
      <Toaster />
    </>
  );
}

export default App;
