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
  const [UserName, setUserName] = useState<string>("default\\lieuyongtan");

  const ProposeSalary = () => {
    const headers = {
      "X-Requested-With": "XMLHttpRequest",
      "Access-Control-Allow-Origin": "*",
    };

    const data = {
      YearsExperience: 10,
      Age: 30,
    };

    const auth = {
      username: UserName,
      password: "75488547As!",
    };
    const baseURL =
      "https://vsystem.ingress.dh-t4ss62ru9808.di-xmj.shoot.live.k8s-hana.ondemand.com/app/pipeline-modeler/openapi/service/59579020-61d1-4771-81ae-979f12519a58/v1/uploadjson/";

    // POST request using fetch()
    // fetch(baseURL, {
    //   // Adding method type
    //   method: "POST",
    //   mode: "no-cors",

    //   // Adding body or contents to send
    //   body: JSON.stringify(data),

    //   // Adding headers to the request
    //   headers: {
    //     "X-Requested-With": "XMLHttpRequest",
    //     "Content-type": "application/x-www-form-urlencoded",
    //   },
    // })
    //   // Converting to JSON
    //   .then((response) => response.json())

    //   // Displaying results to console
    //   .then((json) => console.log(json));

    const options = {
      method: "POST",
      url: "https://http-cors-proxy.p.rapidapi.com/https://vsystem.ingress.dh-t4ss62ru9808.di-xmj.shoot.live.k8s-hana.ondemand.com/app/pipeline-modeler/openapi/service/53c96906-d5e6-4028-82ab-ce8857ae7dc9/v1/uploadjson/",
      headers: {
        "content-type": "application/json",
        "x-requested-with": "XMLHttpRequest",
        "X-RapidAPI-Key": "bc41357440msh081d6136a942088p184a7fjsn73ea4a87195d",
        "X-RapidAPI-Host": "http-cors-proxy.p.rapidapi.com",
      },
      auth: {
        username: UserName,
        password: "75488547As!",
      },
      data: data,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });

    // axios
    //   .post(baseURL, data, { headers: headers })
    //   .then(
    //     (response) => console.log(response)
    //     // this.setState({ articleId: response.data.id })
    //   )
    //   .catch((error) => {
    //     // this.setState({ errorMessage: error.message });
    //     console.error("There was an error!", error);
    //   });
  };
  return (
    <div className="App">
      {/* <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Salary Proposal Tool</Navbar.Brand>
        </Container>
      </Navbar> */}
      <Container>
        <Row>
          <Col className="main_topsect">
            <InputForm ProposeSalary={ProposeSalary}></InputForm>
            <SalaryPredCard></SalaryPredCard>
          </Col>
          <Col className="main_tablsect">
            <h3>Model Data Used for Sampling</h3>
            <SalaryTable></SalaryTable>
          </Col>
        </Row>
        {/* <Row>
          <Col className="main_tablsect">
            <h3>Model Data Used for Sampling</h3>
            <SalaryTable></SalaryTable>
          </Col>
        </Row> */}
      </Container>
    </div>
  );
}

export default App;
