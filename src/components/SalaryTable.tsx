import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { uniqueNamesGenerator, Config, names } from "unique-names-generator";
// import Table from "react-bootstrap/Table";
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

const config: Config = {
  dictionaries: [names],
};

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
      <TableContainer component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell style={{ width: 20 }}>#</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Designation</TableCell>
              <TableCell align="right">Age</TableCell>
              <TableCell align="right">Experience</TableCell>
              <TableCell align="right">Salary</TableCell>
              {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {SalaryModel?.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell style={{ width: 20 }} component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell align="center">
                  {uniqueNamesGenerator(config)}
                </TableCell>
                <TableCell align="center">
                  {row.YearsExperience <= 6
                    ? "Associate Consultant"
                    : row.YearsExperience > 6 && row.YearsExperience <= 8
                    ? "Senior Consultant"
                    : "Architect/Manager"}
                </TableCell>
                <TableCell align="right">{row.Age}</TableCell>
                <TableCell align="right">{row.YearsExperience}</TableCell>
                <TableCell align="right">{row.Salary}</TableCell>
                {/* <TableCell align="right">{row.protein}</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* <Table striped bordered hover size="sm">
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
      </Table> */}
    </div>
  );
};

export default SalaryTable;
