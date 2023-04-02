import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    subject: "",
    email: "",
    body: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send form data to server or API endpoint here
    console.log(formData);
  };

  return (
    <Container style={{ maxWidth: "600px" }}>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formFullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your full name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            minLength={3}
            required
          />
        </Form.Group>

        <Form.Group controlId="formSubject">
          <Form.Label>Subject</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            minLength={3}
            required
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formBody">
          <Form.Label>Body</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter message"
            name="body"
            value={formData.body}
            onChange={handleChange}
            minLength={3}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default ContactForm;
