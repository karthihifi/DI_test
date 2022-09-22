import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.css";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import "./main.css";

interface Salary {
  ProposeSalary: () => void;
}
const InputForm: React.FC<Salary> = (props) => {
  return (
    <div className="salary_inp">
      <h2>Enter Candidate Details</h2>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField sx={{ width: '40ch' }} InputLabelProps={{
            shrink: true,
          }} helperText="Please Enter Name" required label="Name" id="standard-basic" variant="standard" />
        </div>
        <div>
          <TextField sx={{ width: '20ch' }} 
          type="number"
          InputLabelProps={{
            shrink: true,
          }} helperText="Please Enter Age" required label="Age" id="standard-basic" variant="standard" />
        </div>
        <div>
          <TextField sx={{ width: '20ch' }} 
          type="number"
          InputLabelProps={{
            shrink: true,
          }} helperText="Please Enter Experience" required label="Experience" id="standard-basic" variant="standard" />
        </div>

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
      </Box>

      {/* <Form>
        <Form.Group  className="mb-3" controlId="formBasicEmail">
          <Form.Label>Candidate Name</Form.Label>
          <Form.Control type="number" placeholder="Enter Name" />
        </Form.Group>
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
      </Form> */}
    </div>
  );
};

export default InputForm;
