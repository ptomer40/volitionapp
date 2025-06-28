// JavaScript source code
import React from 'react';
import './bootmicro.css';
import { useNavigate } from 'react-router-dom';
function Bootmicro() {
    const navigate = useNavigate();

    const goBack = () => {
        navigate('/');
    };

    return (
        <div className="toc-container">
            <h2>Table of Contents for Spring Boot and Microservices</h2>
            <ul>
                <li>1. Introduction to Spring Boot and Microservices
                    <ul>
                        <li>1.1 Overview of Spring Boot</li>
                        <li>1.2 Understanding Microservices Architecture</li>
                        <li>1.3 Benefits of Microservices</li>
                    </ul>
                </li>
                <li>2. Setting Up Spring Boot
                    <ul>
                        <li>2.1 Installing Spring Boot</li>
                        <li>2.2 Creating a Spring Boot Project</li>
                        <li>2.3 Project Structure and Configuration</li>
                    </ul>
                </li>
                <li>3. Building RESTful Web Services
                    <ul>
                        <li>3.1 Introduction to RESTful Services</li>
                        <li>3.2 Creating REST Controllers</li>
                        <li>3.3 Handling HTTP Methods (GET, POST, PUT, DELETE)</li>
                        <li>3.4 Data Binding and Validation</li>
                    </ul>
                </li>
                <li>4. Data Access with Spring Data JPA
                    <ul>
                        <li>4.1 Introduction to Spring Data JPA</li>
                        <li>4.2 Configuring JPA and H2 Database</li>
                        <li>4.3 Creating Repositories</li>
                        <li>4.4 Performing CRUD Operations</li>
                    </ul>
                </li>
                <li>5. Spring Boot Security
                    <ul>
                        <li>5.1 Introduction to Spring Security</li>
                        <li>5.2 Configuring Authentication and Authorization</li>
                        <li>5.3 Implementing JWT for Token-Based Security</li>
                        <li>5.4 Securing REST Endpoints</li>
                    </ul>
                </li>
                <li>6. Microservices Architecture
                    <ul>
                        <li>6.1 Principles of Microservices</li>
                        <li>6.2 Designing Microservices</li>
                        <li>6.3 Decomposing the Application into Microservices</li>
                        <li>6.4 Communication between Microservices</li>
                    </ul>
                </li>
                <li>7. Building Microservices with Spring Boot
                    <ul>
                        <li>7.1 Creating Microservices with Spring Boot</li>
                        <li>7.2 Service Discovery with Eureka</li>
                        <li>7.3 API Gateway with Spring Cloud Gateway</li>
                        <li>7.4 Load Balancing with Ribbon</li>
                    </ul>
                </li>
                <li>8. Inter-Service Communication
                    <ul>
                        <li>8.1 Synchronous Communication with REST</li>
                        <li>8.2 Asynchronous Communication with RabbitMQ</li>
                        <li>8.3 Event-Driven Architecture with Kafka</li>
                    </ul>
                </li>
                <li>9. Configuration Management
                    <ul>
                        <li>9.1 Introduction to Spring Cloud Config</li>
                        <li>9.2 Centralized Configuration with Spring Cloud Config Server</li>
                        <li>9.3 Managing Configurations for Multiple Environments</li>
                        <li>9.4 Refreshing Configuration at Runtime</li>
                    </ul>
                </li>
                <li>10. Monitoring and Logging
                    <ul>
                        <li>10.1 Introduction to Monitoring and Logging</li>
                        <li>10.2 Implementing Logging with Logback</li>
                        <li>10.3 Monitoring with Spring Boot Actuator</li>
                        <li>10.4 Distributed Tracing with Zipkin</li>
                    </ul>
                </li>
                <li>11. Testing Spring Boot Applications
                    <ul>
                        <li>11.1 Unit Testing with JUnit and Mockito</li>
                        <li>11.2 Integration Testing</li>
                        <li>11.3 Testing REST APIs</li>
                        <li>11.4 Performance Testing</li>
                    </ul>
                </li>
                <li>12. Deployment and Scaling
                    <ul>
                        <li>12.1 Containerization with Docker</li>
                        <li>12.2 Orchestrating Microservices with Kubernetes</li>
                        <li>12.3 Continuous Integration and Continuous Deployment (CI/CD)</li>
                        <li>12.4 Scaling Microservices</li>
                    </ul>
                </li>
                <li>13. Advanced Topics
                    <ul>
                        <li>13.1 Circuit Breakers with Hystrix</li>
                        <li>13.2 Rate Limiting with Spring Cloud Gateway</li>
                        <li>13.3 Service Mesh with Istio</li>
                        <li>13.4 Best Practices for Microservices Security</li>
                    </ul>
                </li>
                <li>14. Case Studies and Real-World Applications
                    <ul>
                        <li>14.1 Case Study 1: E-commerce Application</li>
                        <li>14.2 Case Study 2: Banking System</li>
                        <li>14.3 Case Study 3: Social Media Platform</li>
                    </ul>
                </li>
                <li>15. Resources and Further Reading
                    <ul>
                        <li>15.1 Official Documentation</li>
                        <li>15.2 Books and Articles</li>
                        <li>15.3 Online Courses and Tutorials</li>
                        <li>15.4 Community and Support</li>
                    </ul>
                </li>
            </ul>
            <button onClick={goBack} className="back-button">Back to Main Page</button>
        </div>
    );
}

export default Bootmicro;
