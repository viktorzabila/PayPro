import React, { useState } from "react";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import Tooltip from "./../assets/tooltip.svg";
import PayPal from "../assets/paypal.svg";
import Visa from "../assets/visa.svg";
import VisaCircles from "../assets/visa-circles.svg";

const Billing = () => {
  const [validated, setValidated] = useState(false);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const setField = (field, value) => {
    setForm({ ...form, [field]: value });

    if (!!errors[field]) {
      setErrors({
        ...errors,
        [field]: null,
      });
    }
  };

  const validateForm = () => {
    const re = /^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/;
    //   /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const { firstName, lastName, email, code, card } = form;
    const newErrors = {};

    if (!firstName || firstName === "") newErrors.firstName = "Please enter your name";
    if (!lastName || lastName === "") newErrors.lastName = "Please enter your last name";
    if (!email || email === "") newErrors.email = "Please enter your email";
    else if (!email.match(re)) newErrors.email = "Invalid email address";
    if (!card || card === "") newErrors.card = "Please enter the number of card";
    if (!code || code === "") newErrors.code = "Please enter the code";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    }

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className="d-flex container bg-billing">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Label className="d-flex mb-4">
          <div className="d-flex me-2">
            <p className="fs-5 fw-bold">Billing information</p>
          </div>
          <img src={Tooltip} alt="" />
        </Form.Label>
        <div className="d-flex mb-2">
          <Form.Group className="mb-3" controlId="firstName">
            <Form.Control
              className="input-m me-3"
              type="name"
              placeholder="First name *"
              value={form.firstName}
              onChange={(e) => setField("firstName", e.target.value)}
              isInvalid={!!errors.firstName}
              required
            />
            <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="lastName">
            <Form.Control
              className="input-m"
              type="name"
              placeholder="Last name *"
              value={form.lastName}
              onChange={(e) => setField("lastName", e.target.value)}
              isInvalid={!!errors.lastName}
              required
            />
            <Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback>
          </Form.Group>
        </div>
        <Form.Group controlId="email">
          <Form.Control
            className="input-l mb-2"
            type="email"
            placeholder="E-mail *"
            value={form.email}
            onChange={(e) => setField("email", e.target.value)}
            isInvalid={!!errors.email}
            required
          />
          <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Select
            className={!!errors.country ? "red-border input-l mb-2" : "input-l mb-2"}
            type="name"
            placeholder="Ukraine"
          >
            <option>Ukraine</option>
            <option>USA</option>
            <option>Poland</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">{errors.country}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="number">
          <Form.Control className="input-l mb-2" type="phone" placeholder="Phone number" />
        </Form.Group>
        <Tabs className="tabs" justify>
          <Tab
            eventKey="profile"
            title={
              <div className="d-flex justify-content-center">
                <img src={Visa} alt="visa" />
                <img src={VisaCircles} alt="visa-circles" />
              </div>
            }
          />
          <Tab
            eventKey="profile"
            title={
              <div className="justify-content-center">
                <img src={PayPal} alt="paypal" className="d-inline" />
              </div>
            }
          />
        </Tabs>
        <div className="bg-form-card">
          <Form.Group role="form" controlId={"card"}>
            <Form.Control
              className="input-l mb-2 mt-2 input-card-number"
              type="number"
              placeholder="Card number *"
              value={form.card}
              onChange={(e) => setField("card", e.target.value)}
              isInvalid={!!errors.card}
              required
            />
            <Form.Control.Feedback type="invalid">{errors.card}</Form.Control.Feedback>
          </Form.Group>
          <div className="d-flex">
            <Form.Group>
              <Form.Select className="input-s me-3" type="name" placeholder="01">
                <option>01</option>
                <option>02</option>
                <option>03</option>
              </Form.Select>
            </Form.Group>
            <Form.Group>
              <Form.Select className="input-s me-3" type="email" placeholder="21" required>
                <option>21</option>
                <option>22</option>
                <option>23</option>
              </Form.Select>
            </Form.Group>
            <Form.Group controlId="code">
              <Form.Control
                className="input-s"
                type="number"
                placeholder="Security code *"
                value={form.code}
                onChange={(e) => setField("code", e.target.value)}
                isInvalid={!!errors.code}
                required
              />
              <Form.Control.Feedback type="invalid">{errors.code}</Form.Control.Feedback>
            </Form.Group>
          </div>
        </div>
        <Button className="billing-btn" variant="primary" type="submit" onClick={handleSubmit}>
          SUBMIT ORDER
        </Button>
      </Form>
    </div>
  );
};

export default Billing;
