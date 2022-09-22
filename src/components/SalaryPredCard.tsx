import React from "react";
// import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function SalaryPredCard() {
  return (
    <div>
      <h2>Salary Proposed by AI</h2>
      <Card className="salary_pred_card">
        <CardMedia
          component="img"
          alt="green iguana"
          max-height="140"
          // width="50"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOLsKP3bfFy-JtFYnbyQqwy98rZ7K4pjX_ow&usqp=CAU"
        />
        <CardContent className="salary_pred_card-text">
          {/* <Typography gutterBottom variant="h5" component="div">
          Details
        </Typography> */}
          <Typography variant="body1" color="text.secondary">
            <div>Name : Andy Roberts</div>
            <div>Age : 27</div>
            <div>Relevant Experience : 6 Years</div>
            <ul></ul>
            <Typography variant="h6" gutterBottom>
              Proposed Salary : 15000 MYR
            </Typography>
          </Typography>
        </CardContent>
        {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
      </Card>
    </div>
    // <div className="salary_pred_txt">
    //   <h3>Salary Proposed by AI</h3>
    //   <div>Candidate Name : Andy Roberts</div>
    //   <div>Candidate Age : 27</div>
    //   <div>Candidate Experience : 6 Years</div>
    //   <ul></ul>
    //   <h6>Proposed Salary : 15000 MYR</h6>
    // </div>
    // <Card style={{ width: "20rem" }}>
    //   <Card.Title>Salary Proposed by AI</Card.Title>
    //   <Card.Body>
    //     <Card.Text className="salary_pred_txt">
    //       <ListGroup variant="flush">
    //         <ListGroup.Item>
    //           <div>Candidate Name : Andy Roberts</div>
    //           <div>Candidate Age : 27</div>
    //           <div>Candidate Experience : 6 Years</div>
    //         </ListGroup.Item>

    //         <ListGroup.Item>
    //           <h6>Proposed Salary : 15000 MYR</h6>
    //         </ListGroup.Item>
    //       </ListGroup>
    //       {/* <ListGroup variant="flush">
    //         <ListGroup.Item>Candidate Name : Andy Roberts</ListGroup.Item>
    //         <ListGroup.Item>Candidate Age : 27 </ListGroup.Item>
    //         <ListGroup.Item>Candidate Experience : 6 </ListGroup.Item>
    //       </ListGroup> */}
    //     </Card.Text>
    //   </Card.Body>
    // </Card>
  );
}

export default SalaryPredCard;
