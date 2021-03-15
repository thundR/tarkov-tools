import React from 'react';
import { Container } from "react-bootstrap";
import * as localStorage from "../../services/localStorage.js";
import * as quests from "../../services/quests.js";

class QuestTable extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            activeQuests: quests.getActiveQuests(),
            completedQuests: quests.getCompletedQuests(),
            lockedQuests: quests.getLockedQuests(),
            filters: {
                showActiveQuests: true,
                showCompletedQuests: true,
                showLockedQuests: true
            }
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

    updateQuests() {
        this.setState({
            activeQuests: quests.getActiveQuests(),
            completedQuests: quests.getCompletedQuests(),
            lockedQuests: quests.getLockedQuests()
        })
    }

    render() {
        return (
            <Container>
                {/* <QuestCards questDataList={questDataList}></QuestCards> */}
            </Container>
        );
    }
}

export default QuestTable;