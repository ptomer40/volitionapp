// JavaScript source code
import React from 'react';
import './MERN.css';
import { useNavigate } from 'react-router-dom';
function MERN() {
    
        const navigate = useNavigate();

    const goBack = () => {
        navigate('/');
    }
       
    return (
        <div className="toc-container">
            <h2>Table of Contents for MERN Stack</h2>
            <ul>
                <li>1. Introduction to MERN Stack
                    <ul>
                        <li>1.1 Overview of MERN Stack</li>
                        <li>1.2 Benefits of Using MERN Stack</li>
                        <li>1.3 Components of MERN Stack</li>
                    </ul>
                </li>
                <li>2. Setting Up the Development Environment
                    <ul>
                        <li>2.1 Installing Node.js and npm</li>
                        <li>2.2 Setting Up MongoDB</li>
                        <li>2.3 Installing and Configuring Express</li>
                        <li>2.4 Setting Up React</li>
                        <li>2.5 Installing and Configuring Node.js</li>
                    </ul>
                </li>
                <li>3. MongoDB
                    <ul>
                        <li>3.1 Introduction to MongoDB</li>
                        <li>3.2 CRUD Operations</li>
                        <li>3.3 MongoDB Atlas</li>
                        <li>3.4 Using Mongoose for Data Modeling</li>
                    </ul>
                </li>
                <li>4. Express
                    <ul>
                        <li>4.1 Introduction to Express</li>
                        <li>4.2 Setting Up Express Server</li>
                        <li>4.3 Middleware in Express</li>
                        <li>4.4 Routing in Express</li>
                        <li>4.5 Building RESTful APIs with Express</li>
                    </ul>
                </li>
                <li>5. React
                    <ul>
                        <li>5.1 Introduction to React</li>
                        <li>5.2 Creating a React Application with Create React App</li>
                        <li>5.3 React Components</li>
                        <li>5.4 State and Props</li>
                        <li>5.5 React Hooks</li>
                        <li>5.6 React Router for Single Page Applications (SPAs)</li>
                    </ul>
                </li>
                <li>6. Node.js
                    <ul>
                        <li>6.1 Introduction to Node.js</li>
                        <li>6.2 Setting Up a Node.js Server</li>
                        <li>6.3 Node.js Modules</li>
                        <li>6.4 Asynchronous Programming with Node.js</li>
                    </ul>
                </li>
                <li>7. Building a Full-Stack Application
                    <ul>
                        <li>7.1 Project Structure and Setup</li>
                        <li>7.2 Connecting Frontend and Backend</li>
                        <li>7.3 Implementing Authentication and Authorization</li>
                        <li>7.4 Using JWT for Authentication</li>
                    </ul>
                </li>
                <li>8. State Management with Redux
                    <ul>
                        <li>8.1 Introduction to Redux</li>
                        <li>8.2 Setting Up Redux</li>
                        <li>8.3 Actions, Reducers, and Store</li>
                        <li>8.4 Integrating Redux with React</li>
                    </ul>
                </li>
                <li>9. Deployment and Production
                    <ul>
                        <li>9.1 Preparing the Application for Deployment</li>
                        <li>9.2 Deploying to Heroku</li>
                        <li>9.3 Deploying to AWS</li>
                        <li>9.4 Best Practices for Production</li>
                    </ul>
                </li>
                <li>10. Testing
                    <ul>
                        <li>10.1 Testing React Components</li>
                        <li>10.2 Testing Express APIs</li>
                        <li>10.3 Integration Testing</li>
                        <li>10.4 End-to-End Testing with Cypress</li>
                    </ul>
                </li>
                <li>11. Advanced Topics
                    <ul>
                        <li>11.1 Server-Side Rendering with React</li>
                        <li>11.2 Performance Optimization</li>
                        <li>11.3 Securing MERN Applications</li>
                        <li>11.4 Scaling MERN Applications</li>
                    </ul>
                </li>
                <li>12. Case Studies and Real-World Applications
                    <ul>
                        <li>12.1 Case Study 1: E-commerce Platform</li>
                        <li>12.2 Case Study 2: Social Media Application</li>
                        <li>12.3 Case Study 3: Blogging Platform</li>
                    </ul>
                </li>
                <li>13. Resources and Further Reading
                    <ul>
                        <li>13.1 Official Documentation</li>
                        <li>13.2 Books and Articles</li>
                        <li>13.3 Online Courses and Tutorials</li>
                        <li>13.4 Community and Support</li>
                    </ul>
                </li>
            </ul>
            <button onClick={goBack} className="back-button">Back to Main Page</button>

        </div>
    );
}

export default MERN;
