import React from 'react';
import { Card, Button, Row, ListGroup } from 'react-bootstrap';
import QuestRequirements from './QuestRequirements';

class QuestCard extends React.Component {
    render() {
        return (
            <Card>
                <Card.Body>
                    <Card.Title>
                        {this.props.questData.title} - <a href={this.props.questData.wiki}>wiki</a>
                    </Card.Title>
                    <Card.Subtitle>Status: Incomplete</Card.Subtitle>

                    <Card.Header>Level Required:</Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item>{this.props.questData.require.level}</ListGroup.Item>
                    </ListGroup>

                    <QuestRequirements objectives={this.props.questData.objectives} ></QuestRequirements>
                </Card.Body>
            </Card>
        );
    }
}

export default QuestCard;