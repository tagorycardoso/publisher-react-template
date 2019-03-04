import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import {
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";

import Card from "components/Card/Card.jsx";
import { thArray, tdArray } from "variables/Variables.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import { UserCard } from "components/UserCard/UserCard.jsx";
import avatar from "assets/img/faces/face-3.jpg";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PublishersEdit from "views/Publishers/edit";
import PublishersCreate from "views/Publishers/create";


function index() {
  return (
    <div className="content">
      <Grid fluid>
        <Row>
          <Col md={12}>
            <Card
              title="Striped Table with Hover"
              category="Here is a subtitle for this table"
              ctTableFullWidth
              ctTableResponsive
              content={
                <Table striped hover>
                  <thead>
                    <tr>
                      {thArray.map((prop, key) => {
                        return <th key={key}>{prop}</th>;
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    {tdArray.map((prop, key) => {
                      return (
                        <tr key={key}>
                          {prop.map((prop, key) => {
                            return <td key={key}>{prop}</td>;
                          })}
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              }
            />
          </Col>

          <Col md={12}>
            <Card
              plain
              title="Striped Table with Hover"
              category="Here is a subtitle for this table"
              ctTableFullWidth
              ctTableResponsive
              content={
                <Table hover>
                  <thead>
                    <tr>
                      {thArray.map((prop, key) => {
                        return <th key={key}>{prop}</th>;
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    {tdArray.map((prop, key) => {
                      return (
                        <tr key={key}>
                          {prop.map((prop, key) => {
                            return <td key={key}>{prop}</td>;
                          })}
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              }
            />
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

class Publishers extends Component {

  render() {
    const { match } = this.props
    console.log(match)
    console.log(match.path)

    return (
      <div className="content">
        <Route path={`${match.path}/:action`} component={this.Route} />
      </div>
    );

  }
  Route({ match }) {
    console.log("Route");
    console.log(match);

    switch (match.params.action) {
      case "edit":
        return (
          <PublishersEdit></PublishersEdit>
        )
      case "create":
        return (
          <PublishersCreate></PublishersCreate>
        )
      default:
        return (index());
    }
    return index();
  }

}

export default Publishers;
