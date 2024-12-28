import React from "react";
import { Form, Button } from "react-bootstrap";

const BookingPage = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Booking submitted!");
    };

    return (
        <div className="container">
            <h1>Book Your Workspace</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="date" />
                </Form.Group>
                <Button type="submit" variant="primary">Book</Button>
            </Form>
        </div>
    );
};

export default BookingPage;
