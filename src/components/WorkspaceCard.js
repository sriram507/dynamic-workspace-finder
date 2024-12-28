import React from "react";
import { Card, Button } from "react-bootstrap";

const WorkspaceCard = ({ workspace }) => (
    <Card style={{ width: "18rem", margin: "1rem" }}>
        <Card.Img variant="top" src={workspace.image} />
        <Card.Body>
            <Card.Title>{workspace.name}</Card.Title>
            <Card.Text>{workspace.description}</Card.Text>
            <Button variant="primary">View Details</Button>
        </Card.Body>
    </Card>
);

export default WorkspaceCard;
