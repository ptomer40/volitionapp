import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainLayout from './MainLayout';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import EnquiryForm from './EnquiryForm';
import TrainingEnquiryForm from './TrainingEnquiryForm';
import ContactForm from './ContactForm';
// import JavaFSD from '../public/Trainings/JavaFSD'
// import SpringbootMicroservices from '../public/Trainings/Bootmicro'
// import MernStack  from '../public/Trainings/MERN'
// import Java from '../public/Trainings/Java'
// import OracleSQL from '../public/Trainings/OracleSQL'
// import PLSQL from '../public/Trainings/PLSQL'


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/signup" element={<SignUpForm />} />
                <Route path='/contactform' element={<ContactForm />} />
                {/* <Route path="/" element={<Training />} />
                <Route path="/java-fullstack" element={<JavaFSD />} />
            <Route path="/springboot-microservices" element={<SpringbootMicroservices />} />
                <Route path="/mern-stack" element={<MernStack />} />
                <Route path="/java8oops" element={<Java />} />
                <Route path="/oraclesql" element={<OracleSQL />} />
                <Route path="/plsql" element={<PLSQL />} />  */}
            </Routes>
        </Router>
    );
}

export default App;
