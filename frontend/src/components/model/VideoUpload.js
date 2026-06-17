import React, { useState } from 'react';
import axios from 'axios';
import { Card, Container, Button, Alert } from 'react-bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';

function UploadVideo({ onResult }) {
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile && selectedFile.type.startsWith('video/')) {
            setFile(selectedFile);
            setError('');
        } else {
            setError('Please upload a valid video file.');
        }
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const droppedFile = event.dataTransfer.files[0];
        if (droppedFile && droppedFile.type.startsWith('video/')) {
            setFile(droppedFile);
            setError('');
        } else {
            setError('Please upload a valid video file.');
        }
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleUpload = async () => {
        if (!file) {
            setError('Please select or drop a video file.');
            return;
        }

        setLoading(true);
        setError('');

        const formData = new FormData();
        formData.append('video', file);

        try {
            const response = await axios.post('http://localhost:8000/api/detect_deepfake/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            onResult(response.data);
        } catch (error) {
            console.error('Error uploading video:', error);
            setError('Failed to upload video. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container className="mt-5">
            <h2 className="text-center mb-4">Upload a Video for Deepfake Detection</h2>
            <Card
                className="p-5 text-center"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                style={{
                    border: '2px dashed grey',
                    backgroundColor: 'rgba(255, 255, 255, 0)', 
                }}
            >
                <p className='text-white' >Drag and Drop a video file here, or click to select a file</p>
                <input
                    type="file"
                    accept="video/*"
                    onChange={handleFileChange}
                    className="form-control mb-3"
                    style={{ display: 'none' }}
                    id="fileInput"
                />
                <label htmlFor="fileInput" className="btn btn-outline-secondary">
                    {file ? file.name : 'Choose Video'}
                </label>
            </Card>

            <div className='d-grid gap-2 col-6 mx-auto mt-3'>
                <Button
                    onClick={handleUpload}
                    disabled={loading}
                    variant="secondary"
                    size="lg"
                >
                    {loading ? 'Uploading...' : 'Upload and Analyze'}
                </Button>
            </div>

            {error && (
                <Alert variant="danger" className="mt-3">
                    {error}
                </Alert>
            )}
        </Container>
    );
}

export default UploadVideo;
