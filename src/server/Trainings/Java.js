// JavaScript source code
import React from 'react';
import './java.css';
import { useNavigate } from 'react-router-dom';

function Java() {
    const navigate = useNavigate();

    const goBack = () => {
        navigate('/');
    };


    return (
        <div className="java8-oops-container">
            <h2>Java 8 and OOPs Course Content</h2>
            <ul>
                <li>
                    <h3>Introduction to Java</h3>
                    <ul>
                        <li>History of Java</li>
                        <li>Features of Java</li>
                        <li>Setting up Java Development Environment</li>
                    </ul>
                </li>
                <li>
                    <h3>Object-Oriented Programming Concepts</h3>
                    <ul>
                        <li>Classes and Objects</li>
                        <li>Inheritance</li>
                        <li>Polymorphism</li>
                        <li>Encapsulation</li>
                        <li>Abstraction</li>
                    </ul>
                </li>
                <li>
                    <h3>Core Java Concepts</h3>
                    <ul>
                        <li>Data Types and Variables</li>
                        <li>Operators</li>
                        <li>Control Statements</li>
                        <li>Arrays</li>
                        <li>Strings</li>
                    </ul>
                </li>
                <li>
                    <h3>Advanced OOPs Concepts</h3>
                    <ul>
                        <li>Interfaces and Abstract Classes</li>
                        <li>Inner Classes</li>
                        <li>Packages and Access Modifiers</li>
                        <li>Exception Handling</li>
                    </ul>
                </li>
                <li>
                    <h3>Java 8 Features</h3>
                    <ul>
                        <li>Lambda Expressions</li>
                        <li>Stream API</li>
                        <li>Functional Interfaces</li>
                        <li>Default and Static Methods in Interfaces</li>
                        <li>Optional Class</li>
                        <li>New Date and Time API</li>
                    </ul>
                </li>
                <li>
                    <h3>Java Collections Framework</h3>
                    <ul>
                        <li>List, Set, Map Interfaces</li>
                        <li>Collections Class</li>
                        <li>Generics</li>
                        <li>Comparable and Comparator Interfaces</li>
                    </ul>
                </li>
                <li>
                    <h3>Multithreading and Concurrency</h3>
                    <ul>
                        <li>Introduction to Multithreading</li>
                        <li>Thread Life Cycle</li>
                        <li>Creating Threads</li>
                        <li>Synchronization</li>
                        <li>Concurrency Utilities</li>
                    </ul>
                </li>
                <li>
                    <h3>File I/O and Serialization</h3>
                    <ul>
                        <li>File Handling</li>
                        <li>Byte Stream and Character Stream</li>
                        <li>Object Serialization</li>
                    </ul>
                </li>
                <li>
                    <h3>Networking in Java</h3>
                    <ul>
                        <li>Basics of Networking</li>
                        <li>InetAddress</li>
                        <li>Socket Programming</li>
                        <li>URL and HttpURLConnection</li>
                    </ul>
                </li>
                <li>
                    <h3>Java Database Connectivity (JDBC)</h3>
                    <ul>
                        <li>Introduction to JDBC</li>
                        <li>JDBC Drivers</li>
                        <li>Connecting to Database</li>
                        <li>CRUD Operations</li>
                        <li>PreparedStatement and CallableStatement</li>
                    </ul>
                </li>
                <li>
                    <h3>Building GUI Applications with JavaFX</h3>
                    <ul>
                        <li>Introduction to JavaFX</li>
                        <li>JavaFX Basics</li>
                        <li>Event Handling</li>
                        <li>Layouts and UI Controls</li>
                    </ul>
                </li>
            </ul>
            <button onClick={goBack} className="back-button">Back to Main Page</button>
        </div>
    );
}

export default Java;
