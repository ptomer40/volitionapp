// JavaScript source code
import React from 'react';
import './PLSQL.css';
import { useNavigate } from 'react-router-dom';
function PLSQL() {
    const navigate = useNavigate();

    const goBack = () => {
        navigate('/');
    };
    return (
        <div className="plsql-container">
            <h2>PL/SQL Course Content</h2>
            <ul>
                <li>
                    <h3>Introduction to PL/SQL</h3>
                    <ul>
                        <li>What is PL/SQL?</li>
                        <li>Advantages of PL/SQL</li>
                        <li>Overview of PL/SQL Architecture</li>
                    </ul>
                </li>
                <li>
                    <h3>PL/SQL Basics</h3>
                    <ul>
                        <li>PL/SQL Block Structure</li>
                        <li>Declaring Variables</li>
                        <li>Data Types</li>
                        <li>Control Structures: IF, CASE, LOOP</li>
                        <li>Handling SQL in PL/SQL</li>
                    </ul>
                </li>
                <li>
                    <h3>Cursors</h3>
                    <ul>
                        <li>Introduction to Cursors</li>
                        <li>Implicit vs. Explicit Cursors</li>
                        <li>Cursor Attributes</li>
                        <li>FOR Loop Cursors</li>
                    </ul>
                </li>
                <li>
                    <h3>Exception Handling</h3>
                    <ul>
                        <li>Types of Exceptions</li>
                        <li>Handling Exceptions</li>
                        <li>RAISE_APPLICATION_ERROR</li>
                    </ul>
                </li>
                <li>
                    <h3>Stored Procedures and Functions</h3>
                    <ul>
                        <li>Creating Procedures</li>
                        <li>Creating Functions</li>
                        <li>Parameter Modes: IN, OUT, IN OUT</li>
                        <li>Using Procedures and Functions</li>
                    </ul>
                </li>
                <li>
                    <h3>Packages</h3>
                    <ul>
                        <li>What are Packages?</li>
                        <li>Creating a Package</li>
                        <li>Package Specification and Body</li>
                        <li>Using Package Elements</li>
                    </ul>
                </li>
                <li>
                    <h3>Triggers</h3>
                    <ul>
                        <li>Introduction to Triggers</li>
                        <li>Creating DML Triggers</li>
                        <li>Trigger Firing Points</li>
                        <li>INSTEAD OF and Compound Triggers</li>
                    </ul>
                </li>
                <li>
                    <h3>Collections</h3>
                    <ul>
                        <li>Types of Collections</li>
                        <li>Associative Arrays</li>
                        <li>Nested Tables</li>
                        <li>Varrays</li>
                        <li>Using Collection Methods</li>
                    </ul>
                </li>
                <li>
                    <h3>Dynamic SQL</h3>
                    <ul>
                        <li>Introduction to Dynamic SQL</li>
                        <li>Using EXECUTE IMMEDIATE</li>
                        <li>DBMS_SQL Package</li>
                    </ul>
                </li>
                <li>
                    <h3>Performance Tuning</h3>
                    <ul>
                        <li>Identifying Performance Issues</li>
                        <li>Optimizing PL/SQL Code</li>
                        <li>Bulk Collect and FORALL</li>
                    </ul>
                </li>
                <li>
                    <h3>Advanced PL/SQL</h3>
                    <ul>
                        <li>Working with Large Objects (LOBs)</li>
                        <li>Working with XML</li>
                        <li>Using PL/SQL with JSON</li>
                    </ul>
                </li>
            </ul>

            <button onClick={goBack} className="back-button">Back to Main Page</button>
        </div>
    );
}

export default PLSQL;
