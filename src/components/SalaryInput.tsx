import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.css";
import "./main.css";

interface Salary {
  ProposeSalary: () => void;
}
const InputForm: React.FC<Salary> = (props) => {
  return (
    <div className="salary_inp">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Age</Form.Label>
          <Form.Control type="number" placeholder="Enter Age" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Experience</Form.Label>
          <Form.Control type="number" placeholder="Enter Experience" />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={(event) => {
            event.preventDefault();
            props.ProposeSalary();
          }}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default InputForm;
