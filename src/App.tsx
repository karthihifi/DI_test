import React, { useState, useEffect } from "react";
// import logo from './logo.svg';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import InputForm from "./components/SalaryInput";
import SalaryPredCard from "./components/SalaryPredCard";
import SalaryTable from "./components/SalaryTable";
import axios from "axios";
import "./App.css";

function App() {
  const [ProposedSalary, setProposedSalary] = useState<number>();

  const ProposeSalary = () => {
    const headers = {
      "X-Requested-With": "XMLHttpRequest",
      "Access-Control-Allow-Origin": "*",
    };

    const data = {
      YearsExperience: 6,
      Age: 28,
    };

    const auth = {
      username: "defaultlieuyongtan",
      password: "75488547As!",
    };
    const baseURL =
      "https://vsystem.ingress.dh-t4ss62ru9808.di-xmj.shoot.live.k8s-hana.ondemand.com/app/pipeline-modeler/openapi/service/59579020-61d1-4771-81ae-979f12519a58/v1/uploadjson/";

    // POST request using fetch()
    fetch(baseURL, {
      // Adding method type
      method: "POST",

      // Adding body or contents to send
      body: JSON.stringify(data),

      // Adding headers to the request
      headers: {
        "X-Requested-With": "XMLHttpRequest",
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      // Converting to JSON
      .then((response) => response.json())

      // Displaying results to console
      .then((json) => console.log(json));

    axios
      .post(baseURL, data, { headers: headers })
      .then(
        (response) => console.log(response)
        // this.setState({ articleId: response.data.id })
      )
      .catch((error) => {
        // this.setState({ errorMessage: error.message });
        console.error("There was an error!", error);
      });
  };
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Salary Proposal Tool</Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col>
            <InputForm ProposeSalary={ProposeSalary}></InputForm>
          </Col>
          <Col>
            <SalaryPredCard></SalaryPredCard>
          </Col>
        </Row>
        <Row>
          <Col>
            <SalaryTable></SalaryTable>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
