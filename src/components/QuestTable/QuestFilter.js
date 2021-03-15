import React from "react";
import { Card, Col, Form, Row } from "react-bootstrap";

class QuestFilter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showActiveQuests: true,
      showLockedQuests: true,
      showCompletedQuests: true,
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    let name = event.target.name;
    let value = event.target.checked;
    this.setState({ [name]: value }, () => this.updateFilters());
  }

  updateFilters() {
    let validStatus = [];
    if (this.state.showActiveQuests) {
      validStatus.push("active");
    }
    if (this.state.showLockedQuests) {
      validStatus.push("locked");
    }
    if (this.state.showCompletedQuests) {
      validStatus.push("completed");
    }
    this.props.setFilter((q) => validStatus.includes(q.status));
  }

  render() {
    return (
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Filters</Card.Title>
              <Form.Group>
                <Form.Check
                  inline
                  name="showActiveQuests"
                  label="Active Quests"
                  checked={this.state.showActiveQuests}
                  onChange={this.handleInput}
                />
                <Form.Check
                  inline
                  name="showLockedQuests"
                  label="Locked Quests"
                  checked={this.state.showLockedQuests}
                  onChange={this.handleInput}
                />
                <Form.Check
                  inline
                  name="showCompletedQuests"
                  label="Completed Quests"
                  checked={this.state.showCompletedQuests}
                  onChange={this.handleInput}
                />
              </Form.Group>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default QuestFilter;
