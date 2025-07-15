// JavaScript source code
import React from 'react';
import './JavaFSD.css';
import { useNavigate } from 'react-router-dom';
function JavaFSD() {
    const navigate = useNavigate();

    const goBack = () => {
        navigate('/');
    };


    return (
        <div className="toc-container">
            <h1>Table of Contents for Java 8 Fullstack Development</h1>
            <ul>
                <li>
                    <strong>1. Introduction</strong>
                    <ul>
                        <li>Overview of Fullstack Development</li>
                        <li>Importance of Java in Fullstack Development</li>
                        <li>Benefits of Using React, Servlet, JSP, JDBC, Spring, and Spring Boot</li>
                    </ul>
                </li>
                <li>
                    <strong>2. Java 8 Basics</strong>
                    <ul>
                        <li>Key Features of Java 8</li>
                        <li>Lambda Expressions</li>
                        <li>Stream API</li>
                        <li>Default and Static Methods in Interfaces</li>
                        <li>Optional Class</li>
                    </ul>
                </li>
                <li>
                    <strong>3. Frontend Development with React</strong>
                    <ul>
                        <li>Introduction to React</li>
                        <li>Setting Up a React Project</li>
                        <li>React Components and JSX</li>
                        <li>State and Props</li>
                        <li>React Hooks (useState, useEffect, etc.)</li>
                        <li>Routing with React Router</li>
                        <li>Managing Forms and Inputs</li>
                        <li>API Calls with Axios or Fetch</li>
                    </ul>
                </li>
                <li>
                    <strong>4. Backend Development with Servlets</strong>
                    <ul>
                        <li>Introduction to Servlets</li>
                        <li>Servlet Lifecycle</li>
                        <li>Handling HTTP Requests and Responses</li>
                        <li>Servlet Configuration (web.xml)</li>
                        <li>Session Management in Servlets</li>
                        <li>Error Handling in Servlets</li>
                    </ul>
                </li>
                <li>
                    <strong>5. JSP (JavaServer Pages)</strong>
                    <ul>
                        <li>Introduction to JSP</li>
                        <li>JSP Lifecycle</li>
                        <li>JSP Syntax and Directives</li>
                        <li>JSP Scriptlets, Expressions, and Declarations</li>
                        <li>Using JavaBeans in JSP</li>
                        <li>JSTL (JavaServer Pages Standard Tag Library)</li>
                        <li>Custom Tags in JSP</li>
                    </ul>
                </li>
                <li>
                    <strong>6. JDBC (Java Database Connectivity)</strong>
                    <ul>
                        <li>Introduction to JDBC</li>
                        <li>JDBC Architecture</li>
                        <li>Connecting to a Database</li>
                        <li>Executing SQL Queries</li>
                        <li>ResultSet and ResultSetMetaData</li>
                        <li>Handling Transactions</li>
                        <li>Batch Processing</li>
                        <li>Prepared Statements and Callable Statements</li>
                    </ul>
                </li>
                <li>
                    <strong>7. Introduction to Spring Framework</strong>
                    <ul>
                        <li>Overview of Spring Framework</li>
                        <li>Inversion of Control (IoC) and Dependency Injection (DI)</li>
                        <li>Spring Modules (Core, AOP, MVC, etc.)</li>
                        <li>Setting Up a Spring Project</li>
                        <li>Spring Bean Lifecycle</li>
                        <li>Spring Configuration (XML, Java Annotations, Java Config)</li>
                    </ul>
                </li>
                <li>
                    <strong>8. Spring MVC (Model-View-Controller)</strong>
                    <ul>
                        <li>Introduction to Spring MVC</li>
                        <li>Setting Up Spring MVC</li>
                        <li>Controllers in Spring MVC</li>
                        <li>Handling Forms in Spring MVC</li>
                        <li>Spring MVC View Resolvers</li>
                        <li>Data Binding and Validation</li>
                        <li>Exception Handling in Spring MVC</li>
                    </ul>
                </li>
                <li>
                    <strong>9. Spring Boot</strong>
                    <ul>
                        <li>Introduction to Spring Boot</li>
                        <li>Setting Up a Spring Boot Project</li>
                        <li>Spring Boot Auto Configuration</li>
                        <li>Spring Boot Starters</li>
                        <li>Spring Boot Annotations</li>
                        <li>Creating RESTful APIs with Spring Boot</li>
                        <li>Spring Boot Actuator</li>
                        <li>Spring Boot Testing</li>
                    </ul>
                </li>
                <li>
                    <strong>10. Integration of React with Spring Boot</strong>
                    <ul>
                        <li>Setting Up a Fullstack Project Structure</li>
                        <li>Connecting React Frontend with Spring
                        </li>
                    </ul>
                </li>


            </ul>
            <button onClick={goBack} className="back-button">Back to Main Page</button>

        </div>)
}
    export default JavaFSD;