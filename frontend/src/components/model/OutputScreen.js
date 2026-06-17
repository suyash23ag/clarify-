import React from 'react';
import { Card, Container, Alert } from 'react-bootstrap';

function OutputScreen({ result }) {
    if (!result) {
        return (
            <Container className="mt-5 text-center">
                <h2 className="text-center mb-4">Deepfake Detection Results</h2>
                <Alert variant="secondary">
                    No result available. Please upload a video for analysis.
                </Alert>
            </Container>
        );
    }

    return (
        <Container className="mt-5">
            <h2 className="text-center mb-4">Deepfake Detection Results</h2>
            <Card className="p-3 shadow-sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)', border: 'none' }}>
                <Card.Body className="text-center">
                    <video
                        src={`http://localhost:8000${result.video}`}
                        controls
                        className="img-fluid mb-3"
                        style={{ maxWidth: '100%', maxHeight: '100px', objectFit: 'cover' }} // Adjust the size and maintain aspect ratio
                    />
                    <h3>
                        Detection Result:{' '}
                        <span
                            style={{
                                color: result.result === 1 ? 'red' : 'green',
                            }}
                        >
                            {result.result === 1 ? 'Fake' : 'Real'}
                        </span>
                    </h3>
                    <p>
                        <strong>Confidence (Real): </strong>
                        {(result.confidence_real * 100).toFixed(2)}% -
                        <strong> Confidence (Fake): </strong>
                        {(result.confidence_fake * 100).toFixed(2)}%
                    </p>
                    <p>
                        
                    </p>
                    <p>
                        <strong>Analyzed at: </strong>
                        {new Date(result.timestamp).toLocaleString('en-US', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                        })}
                    </p>
                </Card.Body>
            </Card>

        </Container>
    );
}

export default OutputScreen;
