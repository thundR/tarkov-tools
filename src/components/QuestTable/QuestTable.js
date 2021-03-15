import React from 'react';
import { Container } from "react-bootstrap";
import * as localStorage from "../../services/localStorage.js";
import * as quests from "../../services/quests.js";
import QuestCards from "./QuestCards";

class QuestTable extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            allQuests: this.getAllQuests(),
            filters: [],
        }
        console.log(this.state)
    }

    setQuestCompletion(questID, completed) {
        if (completed) {
            if (!this.state.completedQuestIDs.includes(questID)) {
                this.state.completedQuestIDs.push(questID)
                localStorage.getCompletedQuestIDs(this.state.completedQuestIDs)
                this.updateQuests()
            }
        } else {
            var index = this.state.completedQuestIDs.indexOf(questID)

            if (index >= 0) {
                this.state.completedQuestIDs.splice(index)
                this.updateQuests()
            }
        }
    }

    getAllQuests() {
        let activeQuests = quests.getActiveQuests()
        let completedQuests = quests.getCompletedQuests()
        let lockedQuests = quests.getLockedQuests()
        return activeQuests.concat(lockedQuests, completedQuests)
    }

    getFilteredQuests() {
        return this.state.allQuests.filter(
            quest => this.state.filters.every(filter => filter(quest))
        )
    }

    render() {
        return (
            <Container>
                <QuestCards questDataList={this.getFilteredQuests()}></QuestCards>
            </Container>
        );
    }
}

export default QuestTable;