import React from 'react';
import { Card, Button, Row, ListGroup } from 'react-bootstrap';

class QuestRequirements extends React.Component {
    render() {
        let sortedObjectives = [
            {
                header: "Find in Raid:",
                requirements: this.props.objectives.filter(objective => objective.type === "find")
                    .map(objective => <QuestFindRequirement objective={objective} key={objective.id} />)
            },
            {
                header: "Turn In:",
                requirements: this.props.objectives.filter(objective => objective.type === "collect")
                    .map(objective => <QuestCollectRequirement objective={objective} key={objective.id} />)
            },
            {
                header: "Pick Up Items in Raid:",
                requirements: this.props.objectives.filter(objective => objective.type === "pickup")
                    .map(objective => <QuestPickupRequirement objective={objective} key={objective.id} />)
            },
            {
                header: "Items To Place:",
                requirements: this.props.objectives.filter(objective => objective.type === "place")
                    .map(objective => <QuestPlaceRequirement objective={objective} key={objective.id} />)
            },
            {
                header: "Keys Required:",
                requirements: this.props.objectives.filter(objective => objective.type === "key")
                    .map(objective => <QuestKeyRequirement objective={objective} key={objective.id} />)
            },
            {
                header: "Locations To Visit:",
                requirements: this.props.objectives.filter(objective => objective.type === "locate")
                    .map(objective => <QuestLocateRequirement objective={objective} key={objective.id} />)
            },
            {
                header: "Kills Required:",
                requirements: this.props.objectives.filter(objective => objective.type === "kill")
                    .map(objective => <QuestKillRequirement objective={objective} key={objective.id} />)
            },
            {
                header: "Skills Required:",
                requirements: this.props.objectives.filter(objective => objective.type === "skill")
                    .map(objective => <QuestSkillRequirement objective={objective} key={objective.id} />)
            },
            {
                header: "Reputation Required:",
                requirements: this.props.objectives.filter(objective => objective.type === "reputation")
                    .map(objective => <QuestReputationRequirement objective={objective} key={objective.id} />)
            },
            {
                header: "Marks Required:",
                requirements: this.props.objectives.filter(objective => objective.type === "mark")
                    .map(objective => <QuestMarkRequirement objective={objective} key={objective.id} />)
            }
        ];

        return (
            <div>
                {sortedObjectives.map(objective => {
                    if (objective.requirements.length) {
                        return (
                            <div>
                                <Card.Header>{objective.header}</Card.Header>
                                {objective.requirements}
                            </div>
                        );
                    }
                }
                )}
            </div>
        );
    }
}

function QuestCollectRequirement(props) {
    return (
        <div>
            <ListGroup variant="flush">
                <ListGroup.Item>{props.objective.number}x {props.objective.target}</ListGroup.Item>
            </ListGroup>
        </div>
    );
};

function QuestFindRequirement(props) {
    return (
        <div>
            <ListGroup variant="flush">
                <ListGroup.Item>{props.objective.number}x {props.objective.target}</ListGroup.Item>
            </ListGroup>
        </div>
    );
};

function QuestKillRequirement(props) {
    return (
        <div>
            <ListGroup variant="flush">
                <ListGroup.Item>{props.objective.number}x {props.objective.target} on {props.objective.location}</ListGroup.Item>
            </ListGroup>
        </div>
    );
};

function QuestKeyRequirement(props) {
    return (
        <div>
            <ListGroup variant="flush">
                <ListGroup.Item>{props.objective.number}x {props.objective.target} on {props.objective.location}</ListGroup.Item>
            </ListGroup>
        </div>
    );
};

function QuestPickupRequirement(props) {
    return (
        <div>
            <ListGroup variant="flush">
                <ListGroup.Item>{props.objective.number}x {props.objective.target} on {props.objective.location}</ListGroup.Item>
            </ListGroup>
        </div>
    );
};

function QuestLocateRequirement(props) {
    return (
        <div>
            <ListGroup variant="flush">
                <ListGroup.Item>{props.objective.target} on {props.objective.location}</ListGroup.Item>
            </ListGroup>
        </div>
    );
};

function QuestMarkRequirement(props) {
    return (
        <div>
            <ListGroup variant="flush">
                <ListGroup.Item>{props.objective.target} on {props.objective.location}</ListGroup.Item>
            </ListGroup>
        </div>
    );
};

function QuestSkillRequirement(props) {
    return (
        <div>
            <ListGroup variant="flush">
                <ListGroup.Item>{props.objective.target}</ListGroup.Item>
            </ListGroup>
        </div>
    );
};

function QuestReputationRequirement(props) {
    return (
        <div>
            <ListGroup variant="flush">
                <ListGroup.Item>{props.objective.target}</ListGroup.Item>
            </ListGroup>
        </div>
    );
};

function QuestPlaceRequirement(props) {
    return (
        <div>
            <ListGroup variant="flush">
                <ListGroup.Item>{props.objective.target} on {props.objective.location}</ListGroup.Item>
            </ListGroup>
        </div>
    );
};

export default QuestRequirements;