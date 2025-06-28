// JavaScript source code

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Training from './Training';
import JavaFSD from './Trainings/JavaFSD';
import SpringbootMicroservices from './Trainings/Bootmicro';
import MernStack from './Trainings/MERN';
import Java from './Trainings/Java';
import OracleSQL from './Trainings/OracleSQL';
import PLSQL from './Trainings/PLSQL';

function TrainingRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Training />} />
                <Route path="/training/java-fullstack" element={<JavaFSD />} />
                <Route path="/training/springboot-microservices" element={<SpringbootMicroservices />} />
                <Route path="/training/mern-stack" element={<MernStack />} />
                <Route path="/training/java8oops" element={<Java />} />
                <Route path="/training/oraclesql" element={<OracleSQL />} />
                <Route path="/training/plsql" element={<PLSQL />} />
            </Routes>
        </BrowserRouter>
    );
}

export default TrainingRoutes;