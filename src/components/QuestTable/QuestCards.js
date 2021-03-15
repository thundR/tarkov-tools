import React from 'react';
import { Row, Col } from 'react-bootstrap';
import QuestCard from './QuestCard';

class QuestCards extends React.Component {
    render() {
        return (
            <Row>
                <Col>
                    {this.props.questDataList.map(quest => { return <QuestCard questData={quest} key={quest.id}></QuestCard> })}
                </Col>
            </Row>
        );
    }
}

export default QuestCards;