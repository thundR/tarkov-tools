import React from 'react';
import { Container } from "react-bootstrap";
import questDataList from '../../resources/quests.json';
import QuestCards from './QuestCards.js';

class QuestTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            questDataList: questDataList
        }
    }

    render() {
        return (
            <Container>
                <QuestCards questDataList={questDataList}></QuestCards>
            </Container>
        );
    }
}

export default QuestTable;