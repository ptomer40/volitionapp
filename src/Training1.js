// JavaScript source code
import './trainingcontainer.css';
import { Row, Col } from 'react-bootstrap';
import { useState } from 'react';
// Import useHistory hook from react-router-dom

function Training1() {
    //const history = useHistory(); // Initialize useHistory hook
    const [isMoreInfoClicked, setIsMoreInfoClicked] = useState(false);

    // Function to handle button click
    const handleMoreInfoClick = () => {
        // Redirect to JavaFullstack component
        /*history.push('/java-fullstack'); */
    };

    return (
        <div className="trainingcontainer">
            <Row className="justify-content-around">
                <Col xs={12} md={4} lg={4}>
                    <div className="horizontal-div">


                        <div className="d-flex flex-wrap justify-content-around">
                            {/* Content about Java Full Stack */}
                            <div>
                                <h4 style={{ color: 'darkorange' }}>Java Full Stack Training</h4>
                            </div>
                            <div>
                                <p>
                                    This is a brief description of Java Full Stack training. Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus
                                    diam.
                                </p>
                            </div>
                            <div>
                                {/* Button to show more information */}
                                <button style={{ backgroundColor: '#45a049', color: 'white', borderRadius: '10px' }} onClick={() => setIsMoreInfoClicked(true)}>More Info</button>
                            </div>
                        </div>
                        )

                    </div>
                </Col>
                <Col xs={12} md={4} lg={4}>
                    <div className="horizontal-div">

                        <div className="d-flex flex-wrap justify-content-around">
                            <div>
                                <h4 style={{ color: 'darkorange' }}>Springboot and Microservices</h4>
                            </div>
                            <div>
                                <p>
                                    This is a brief description of Java Full Stack training. Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus
                                    diam.
                                </p>
                            </div>
                            <div>
                                {/* Button to show more information */}
                                <button style={{ backgroundColor: '#45a049', color: 'white', borderRadius: '10px' }} onClick={() => setIsMoreInfoClicked(true)}>More Info</button>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xs={12} md={4} lg={4}>
                    <div className="horizontal-div">
                        <div className="d-flex flex-wrap justify-content-around">
                            <div>
                                <h4 style={{ color: 'darkorange' }}>MERN Stack Training</h4>
                            </div>
                            <div>
                                <p>
                                    This is a brief description of Java Full Stack training. Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus
                                    diam.
                                </p>
                            </div>
                            <div>
                                {/* Button to show more information */}
                                <button style={{ backgroundColor: '#45a049', color: 'white', borderRadius: '10px' }} onClick={() => setIsMoreInfoClicked(true)}>More Info</button>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>


        </div>
    );
}

export default Training1;
