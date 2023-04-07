//Component that establishes the routing of the application based on the routes defined in routes.

import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Exercises from '../pages/Exercises';
import Home from '../pages/Home';
import Result from '../pages/Result';
import { finish } from '../store/exerciseSlicer';


const RoutesApp = () => {

  const isFinish = useSelector(finish)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/exercise" element={!isFinish?<Exercises/>:<Navigate to="/result" replace/>} />
        <Route path="/result" element={isFinish?<Result/>:<Navigate to="/exercise"  replace/>} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp
