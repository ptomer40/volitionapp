// JavaScript source code
import React from 'react';
import './OracleSQL.css';
import { useNavigate } from 'react-router-dom';

function OracleSQL() {
    const navigate = useNavigate();

    const goBack = () => {
        navigate('/');
    };
    return (
        <div className="oracle-sql-container">
            <h2>Oracle SQL Course Content</h2>
            <ul>
                <li>
                    <h3>Introduction to Oracle SQL</h3>
                    <ul>
                        <li>What is SQL?</li>
                        <li>Overview of Oracle Database</li>
                        <li>Setting up Oracle Database</li>
                        <li>Using SQL*Plus and SQL Developer</li>
                    </ul>
                </li>
                <li>
                    <h3>Basic SQL Commands</h3>
                    <ul>
                        <li>SELECT Statement</li>
                        <li>Filtering Data with WHERE Clause</li>
                        <li>Sorting Data with ORDER BY Clause</li>
                        <li>Using DISTINCT to Eliminate Duplicates</li>
                    </ul>
                </li>
                <li>
                    <h3>Advanced Data Retrieval</h3>
                    <ul>
                        <li>JOINs (INNER, OUTER, SELF, CROSS)</li>
                        <li>Subqueries</li>
                        <li>Set Operations (UNION, INTERSECT, MINUS)</li>
                        <li>Group Functions (AVG, COUNT, MAX, MIN, SUM)</li>
                        <li>GROUP BY and HAVING Clauses</li>
                    </ul>
                </li>
                <li>
                    <h3>Data Manipulation Language (DML)</h3>
                    <ul>
                        <li>INSERT Statement</li>
                        <li>UPDATE Statement</li>
                        <li>DELETE Statement</li>
                        <li>MERGE Statement</li>
                    </ul>
                </li>
                <li>
                    <h3>Data Definition Language (DDL)</h3>
                    <ul>
                        <li>Creating Tables</li>
                        <li>Modifying Tables</li>
                        <li>Dropping Tables</li>
                        <li>Creating and Managing Indexes</li>
                        <li>Creating and Managing Views</li>
                    </ul>
                </li>
                <li>
                    <h3>Constraints and Triggers</h3>
                    <ul>
                        <li>Primary Key, Foreign Key, Unique, Not Null, Check Constraints</li>
                        <li>Creating and Managing Triggers</li>
                    </ul>
                </li>
                <li>
                    <h3>PL/SQL Basics</h3>
                    <ul>
                        <li>Introduction to PL/SQL</li>
                        <li>PL/SQL Block Structure</li>
                        <li>Variables and Constants</li>
                        <li>Control Structures (IF, CASE, LOOP)</li>
                    </ul>
                </li>
                <li>
                    <h3>Advanced PL/SQL</h3>
                    <ul>
                        <li>Stored Procedures and Functions</li>
                        <li>Packages</li>
                        <li>Cursors</li>
                        <li>Exception Handling</li>
                    </ul>
                </li>
                <li>
                    <h3>Performance Tuning</h3>
                    <ul>
                        <li>Understanding Execution Plans</li>
                        <li>Using Indexes Effectively</li>
                        <li>Optimizing SQL Queries</li>
                        <li>Performance Tuning Tools</li>
                    </ul>
                </li>
                <li>
                    <h3>Security and User Management</h3>
                    <ul>
                        <li>Creating and Managing Users</li>
                        <li>Privileges and Roles</li>
                        <li>Securing Database Objects</li>
                    </ul>
                </li>
                <li>
                    <h3>Backup and Recovery</h3>
                    <ul>
                        <li>Understanding Backup Types</li>
                        <li>Performing Backups</li>
                        <li>Recovery Techniques</li>
                    </ul>
                </li>
                <li>
                    <h3>Data Import and Export</h3>
                    <ul>
                        <li>Using SQL*Loader</li>
                        <li>Data Pump (expdp, impdp)</li>
                    </ul>
                </li>
            </ul>
            <button onClick={goBack} className="back-button">Back to Main Page</button>

        </div>
    );
}

export default OracleSQL;
