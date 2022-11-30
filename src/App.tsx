import { IoIosCloseCircleOutline } from "react-icons/io";
import { useState } from "react";
import { Box, Container } from "@mui/material";
// import './App.css'
import { Header } from "./components";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import HomePage from "./pages";

function App() {
  return (
    <Box
      sx={{
        height: '100vh',
        widows: '100vh',
        margin: 0,
        display: "flex",
        flexDirection: "column",
        background: 'black'
      }}
    >
      <Header />
      <Routes>
        <Route path="/*" element={<HomePage />} />
      </Routes>
    </Box>
  );
}

export default App;
