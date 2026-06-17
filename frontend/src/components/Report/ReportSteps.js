import React, { useState } from 'react';

// Sample image URLs for each step
const stepsData = [
  {
    title: "Step 1: Gather Evidence",
    description: "Save all related videos, images, URLs, timestamps, and screenshots. It's crucial to have a complete record of the deepfake material.",
    icon: "fas fa-folder-open",
    image: "https://securityintelligence.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/05/Deep-fake-AI-and-face-swap-in-video-edit.-Deepfake-and-machine-learning.-Facial-tracking-detection-and-recognition-technology.-Digital-identity-interchange.-Computer-software-moc.jpeg.webp",
    link: "https://www.indiancybersquad.org/post/comprehensive-guide-to-handling-a-deepfaked-video-shared-online"
  },
  {
    title: "Step 2: Verify the Deepfake",
    description: "Consult experts or use reliable deepfake detection tools. Cross-reference information to ensure the video is indeed manipulated.",
    icon: "fas fa-search",
    image: "https://media.geeksforgeeks.org/wp-content/uploads/20240214181315/10-Best-Open-Source-Deepfake-Software.webp",
    link: "/"
  },
  {
    title: "Step 3: Go to the official cybercrime website ",
    description: "Report the deepfake to your local Cyber Crime authorities or agencies like the FBI’s Internet Crime Complaint Center (IC3) in the US.",
    icon: "fas fa-phone-alt",
    image: "https://i.ibb.co/4NPXH7H/step3.jpg",
    link: "https://cybercrime.gov.in/"
  },
  {
    title: "Step 4: Select File a Complaint",
    description: "File a Complaint: Report deepfake incidents, misinformation, or identity theft Attach evidence, describe the incident, and provide suspect information",
    icon: "fas fa-exclamation-triangle",
    image: "https://i.postimg.cc/pTG3Q5X1/step4.png", // Replace with actual image URLs
    link: "https://cybercrime.gov.in/webform/cyber_suspect.aspx"
  },
  {
    title: "Step 5: Register ",
    description: "Register Your Complaint Report cyber crimes(deepfakes, online harassment, financial fraud) and provide:Name, Email, Phone, Complaint Type, Incident Description & Evidence.",
    icon: "fas fa-user-shield",
  image: "https://i.postimg.cc/W4syQwdH/step5.png", // Replace with actual image URLs
  link: "https://cybercrime.gov.in/webform/Index.aspx"
  },
  {
    title: "Step 6: Choose the specified Category",
    description: "Fill in the report then File the Complaint, your deepfaked would be removed from the internet!",
    icon: "fas fa-user-shield",
  image: "https://i.postimg.cc/pTT6dVYQ/step6.png", // Replace with actual image URLs
  link: "https://cybercrime.gov.in/webform/cyber_suspect.aspx"
  },
];

function ReportSteps() {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < stepsData.length - 1) setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="container py-5">
      <div className="card bg-dark text-white shadow-lg p-5 rounded">
        <div className="card-body text-center">
          <h2 className="display-5 mb-4">How to Report a Deepfake Video</h2>
          <p className="lead text-info mb-5">Follow these steps to report a suspicious deepfake video to cyber crime authorities.</p>

          <div className="step-content mb-4">
            <div className="step-icon mb-4">
              <i className={stepsData[currentStep].icon} style={{ fontSize: '3rem', color: '#ffc107' }}></i>
            </div>
            <h3>{stepsData[currentStep].title}</h3>
            <p className="lead mb-5">{stepsData[currentStep].description}</p>
            <img src={stepsData[currentStep].image} alt={stepsData[currentStep].title} className="img-fluid mb-3" style={{ maxWidth: '100%', maxHeight: '33vh' }} />
            <a href={stepsData[currentStep].link} target="_blank" rel="noopener noreferrer" className="btn btn-outline-info">
              Learn More
            </a>
          </div>

          <div className="step-navigation d-flex justify-content-between">
            <button
              className="btn btn-outline-light btn-lg px-4"
              onClick={handlePrevious}
              disabled={currentStep === 0}
            >
              Previous
            </button>
            <button
              className="btn btn-outline-light btn-lg px-4"
              onClick={handleNext}
              disabled={currentStep === stepsData.length - 1}
            >
              Next
            </button>
          </div>

          <div className="mt-4">
            <p className="text-light">{currentStep + 1} / {stepsData.length} Steps Completed</p>
            {currentStep === stepsData.length - 1 && (
              <div className="alert alert-success mt-4" role="alert">
                <strong>All steps completed!</strong> You are now ready to report the deepfake to cyber crime authorities.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReportSteps;
