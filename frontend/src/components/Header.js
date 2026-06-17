import { useEffect, useState } from "react";

function Header() {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimate(true);
        }, 100); // Delay to allow animation to play after component mounts
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col text-center">
                    <h1 style={{
                        fontSize: '5rem',
                        fontWeight: 'bold',
                        marginLeft: '20px',
                        marginTop: '20px',
                        color: '#ffffff', // White text color
                        textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)', // Black shadow
                        opacity: animate ? 1 : 0,
                        transform: animate ? 'translateY(0)' : 'translateY(-20px)',
                        transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out'
                    }}>
                        Welcome to
                    </h1>
                    <h2 style={{
                        fontSize: '5rem',
                        fontWeight: 'bold',
                        marginLeft: '20px',
                        marginTop: '1px',
                        color: '#ffffff', // White text color
                        textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)', // Black shadow
                        opacity: animate ? 1 : 0,
                        transform: animate ? 'translateY(0)' : 'translateY(-20px)',
                        transition: 'opacity 0.5s ease-in-out 0.3s, transform 0.5s ease-in-out 0.3s'
                    }}>
                        CLARIFY AI
                    </h2>
                    <p style={{
                        fontSize: '1.2rem',
                        marginLeft: '20px',
                        color: '#ffffff', // White text color
                        textShadow: '1px 1px 3px rgba(0, 0, 0, 0.7)', // Black shadow
                        opacity: animate ? 1 : 0,
                        transform: animate ? 'translateY(0)' : 'translateY(20px)',
                        transition: 'opacity 0.5s ease-in-out 0.6s, transform 0.5s ease-in-out 0.6s'
                    }}>
                        Our CLARIFY AI System leverages machine learning to accurately detect and identify deepfake videos, ensuring media integrity and trust.
                    </p>
                    <p style={{
                        fontSize: '1.2rem',
                        marginLeft: '20px',
                        color: '#ffffff', // White text color
                        textShadow: '1px 1px 3px rgba(0, 0, 0, 0.7)', // Black shadow
                        opacity: animate ? 1 : 0,
                        transform: animate ? 'translateY(0)' : 'translateY(20px)',
                        transition: 'opacity 0.5s ease-in-out 0.6s, transform 0.5s ease-in-out 0.6s'
                    }}>
                        In a world where visual misinformation can sway opinions and undermine truths, we empower users to discern reality from manipulation.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Header;
