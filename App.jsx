import React from 'react'
import Home from './src/pages'
import Contact from './src/pages/contact'
import Course from './src/pages/course'
import { Routes, Route } from 'react-router-dom'
import Footer from './src/components/Footer'
import Header from './src/components/Header'
import Register from "./src/pages/register";
export default function App() {
  return (
    <>
      <Header />
        <Register />
      <Footer />
    </>
  );
}
