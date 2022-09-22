import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.css";
import "./main.css";
import axios from "axios";

interface SalaryModel {
  YearsExperience: number;
  Age: number;
  Salary: number;
}

interface OdataResp {
  value: SalaryModel[];
}
const SalaryTable: React.FC = (props) => {
  const [SalaryModel, setSalaryModel] = useState<SalaryModel[]>();

  const baseURL =
    "https://b8076800trial-dev-salary-di-regression-srv.cfapps.us10.hana.ondemand.com/catalog/SalaryModel";

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      let SalaryModel: OdataResp = response.data;
      setSalaryModel(SalaryModel.value);
    });
  }, []);

  return (
    <div className="salary_table">
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Age</th>
            <th>Years of Experience</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {SalaryModel?.map((item, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{item.Age}</td>
              <td>{item.YearsExperience}</td>
              <td>{item.Salary}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default SalaryTable;
