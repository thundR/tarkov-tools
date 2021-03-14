import React from 'react';
import { Container } from "react-bootstrap";
import questData from '../../resources/quests.json';
import QuestCards from './QuestCards.js';

class QuestTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            questData: questData
        }
    }

    render() {
        return (
            <Container>
                <QuestCards questData={questData}></QuestCards>
            </Container>
        );
    }
}

export default QuestTable;