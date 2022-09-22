import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function SalaryPredCard() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Title>Salary Proposed by AI</Card.Title>
      <Card.Body>
        <Card.Text className="salary_pred_txt">
          <ListGroup variant="flush">
            <ListGroup.Item>
              <div>Candidate Name : Andy Roberts</div>
              <div>Candidate Age : 27</div>
              <div>Candidate Experience : 6 Years</div>
            </ListGroup.Item>

            <ListGroup.Item>
              <h6>Proposed Salary : 15000 MYR</h6>
            </ListGroup.Item>
          </ListGroup>
          {/* <ListGroup variant="flush">
            <ListGroup.Item>Candidate Name : Andy Roberts</ListGroup.Item>
            <ListGroup.Item>Candidate Age : 27 </ListGroup.Item>
            <ListGroup.Item>Candidate Experience : 6 </ListGroup.Item>
          </ListGroup> */}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default SalaryPredCard;
