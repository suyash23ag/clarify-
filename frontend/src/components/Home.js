import { Link } from "react-router-dom";
import Header from "./Header";
import React, { useState } from 'react';
import VideoUpload from "./model/VideoUpload";
import OutputScreen from "./model/OutputScreen";

function Home() {
    const [result, setResult] = useState(null);

    const handleResult = (result) => {
        setResult(result);
    };
    return (
        <div className="container m-10">
            {/* Header */}
            <div className="md-6">
                <Header />
            </div>

            {/* Model Upload and Outpt Section */}
            <div className="card text-white bg-dark border-secondary mb-3" style={{ height: '71vh', borderRadius: '12px', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)' }}>
                <h3 className="text-center mt-3">Deep Fake Detector</h3>                <div className="card-body ">
                    <div className="row">
                        {/* Upload Card */}
                        <div className="col-sm-6">
                            <div className="card text-white bg-dark border-secondary mb-3" style={{ height: '59vh', borderRadius: '12px', boxShadow: '0px 4px 8px rgba(255, 255, 255, 0.1)', transition: 'transform 0.3s ease-in-out' }}>
                                <VideoUpload onResult={handleResult} />
                            </div>
                        </div>
                        {/* Output Card */}
                        <div className="col-sm-6">
                            <div className="card text-white bg-dark border-secondary mb-3" style={{ height: '59vh', borderRadius: '12px', boxShadow: '0px 4px 8px rgba(255, 255, 255, 0.1)', transition: 'transform 0.3s ease-in-out' }}>
                                <OutputScreen result={result} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Report */}
            <div className="container py-5">
                <div className="card bg-dark text-white shadow-lg p-5 rounded">
                    <div className="card-body">
                        <h1 className="display-5 text-center mb-4">Spot a Deepfake? Report it to Cyber Crime Authorities</h1>
                        <hr className="bg-light mx-auto" style={{ width: "80px" }} />

                        <p className="lead text-center mb-5">
                            Swift action is vital when identifying deepfakes. Protect online integrity by reporting suspicious content and ensuring thorough documentation.
                        </p>

                        <ul className="list-group list-group-flush">
                            <li className="list-group-item bg-dark text-white">
                                <strong>1. Document the evidence:</strong> Save videos, images, sources, timestamps, URLs, and screenshots.
                            </li>
                            <li className="list-group-item bg-dark text-white">
                                <strong>2. Verify authenticity:</strong> Consult experts, cross-reference information, and use deepfake detection tools.
                            </li>
                            <li className="list-group-item bg-dark text-white">
                                <strong>3. Report the incident:</strong> Contact cyber crime authorities and notify platform moderators.
                            </li>
                            <li className="list-group-item bg-dark text-white">
                                <strong>4. Alert affected individuals:</strong> Notify the impersonated individuals or organizations and monitor the spread.
                            </li>
                            <li className="list-group-item bg-dark text-white">
                                <strong>5. Seek professional support:</strong> Engage cybersecurity experts or legal counsel if necessary.
                            </li>
                        </ul>

                        <div className="alert alert-warning text-center mt-5 shadow-sm">
                            <h4><strong>Protect Yourself from Deepfakes</strong></h4>
                            <p>Don't fall victim to manipulated media. Verify sources, check facts, and report suspicious content.</p>
                            <p>Stay informed, stay safe, and safeguard your identity.</p>
                        </div>

                        <div className="text-center mt-4">
                            <h5 className="text-info">Cyber Crime Reporting Contacts:</h5>
                            <p className="text-warning">FBI IC3 | Local Law Enforcement Cyber Units | Platform Reporting Mechanisms</p>
                        </div>

                        <p className="text-center mt-5">
                            Together, we can mitigate deepfake threats. Support digital literacy, advocate for stricter regulations, and take collective responsibility to safeguard online security.
                        </p>

                        <div className="text-center mt-4">
                            <p className="lead">Reporting Deepfake Complaints in India: A Step-by-Step Guide</p>
                            <button className="btn btn-outline-light btn-lg px-4 py-2 shadow-sm"
                                style={{ transition: "background-color 0.3s" }}>
                                <Link to="/report-steps" className="text-light" style={{ textDecoration: "none" }}>
                                    View Steps
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonial Section */}
            <h3 className="pb-1 mb-4 mt-5 text-white">What Our Users Say</h3>
            <div id="carouselExampleIndicators" className="carousel slide bg-dark text-light py-5 px-3 rounded" data-bs-ride="carousel" style={{ boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.5)' }}>
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>

                {/* Testimonial Items */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <figure className="text-center">
                            <blockquote className="blockquote">
                                <p className="mb-4" style={{ fontSize: '1.4rem' }}>“The LP DeepFake Detection system has revolutionized the way we ensure video authenticity. Highly recommended!”</p>
                            </blockquote>
                            <figcaption className="blockquote-footer">
                                Rajesh Patel, <cite title="Source Title">Tech Innovator</cite>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="carousel-item">
                        <figure className="text-center">
                            <blockquote className="blockquote">
                                <p className="mb-4" style={{ fontSize: '1.4rem' }}>“A seamless experience with real-time analysis that we rely on for our media verification processes.”</p>
                            </blockquote>
                            <figcaption className="blockquote-footer">
                                Sunita Mehra, <cite title="Source Title">Media Analyst</cite>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="carousel-item">
                        <figure className="text-center">
                            <blockquote className="blockquote">
                                <p className="mb-4" style={{ fontSize: '1.4rem' }}>“Outstanding tool for combating misinformation and ensuring the integrity of online content.”</p>
                            </blockquote>
                            <figcaption className="blockquote-footer">
                                Arun Sharma, <cite title="Source Title">Security Expert</cite>
                            </figcaption>
                        </figure>
                    </div>
                </div>

                {/* Carousel Controls */}
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Home;
