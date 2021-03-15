import React from 'react';
import { Row } from 'react-bootstrap';
import QuestCard from './QuestCard';

class QuestCards extends React.Component {
    render() {
        return (
            <Row>
                {this.props.questDataList.map(quest => { return <QuestCard questData={quest} key={quest.id}></QuestCard> })}
            </Row>
        );
    }
}

export default QuestCards;