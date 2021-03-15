import questDataList from '../resources/quests.json';
import * as localStorage from "./localStorage.js";

export function getActiveQuests() {
    let completedQuestIDs = localStorage.getCompletedQuestIDs()
    let userLevel = localStorage.getUserLevel()

    let activeQuests = questDataList.filter(quest =>
        !completedQuestIDs.includes(quest.id)
        && quest.require.quests.every(requirement => completedQuestIDs.includes(requirement))
        && userLevel >= quest.require.level
    )
    activeQuests.forEach(quest => quest.status = "active")

    return activeQuests
}

export function getCompletedQuests() {
    let completedQuestIDs = localStorage.getCompletedQuestIDs()
    let completedQuests = questDataList.filter(quest => completedQuestIDs.includes(quest.id))
    completedQuests.forEach(quest => quest.status = "completed")

    return completedQuests
}

export function getLockedQuests() {
    let completedQuestIDs = localStorage.getCompletedQuestIDs()
    let userLevel = localStorage.getUserLevel()

    let lockedQuests = questDataList.filter(quest =>
        !quest.require.quests.every(requirement => completedQuestIDs.includes(requirement))
        || userLevel < !quest.require.level
    )
    lockedQuests.forEach(quest => quest.status = "locked")

    return lockedQuests
}