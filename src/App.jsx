import { useEffect, useState } from "react";
import './App.css'
import Card from './components/Card'
import Form from "./components/Form"
import axios from "axios"

import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./pages/DefaultLayout";
import Home from "./pages/Home";
import Index from "./pages/Index";
import Show from "./pages/Show";
import Create from "./pages/Create";

const apiUrl = import.meta.env.VITE_BASE_API_URL;

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />} >
          <Route index element={<Home />} />
          <Route path="index" element={<Index />} />
          <Route path="/show/:slug" element={<Show />} />
          <Route path="create" element={<Create />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )

}

export default App
