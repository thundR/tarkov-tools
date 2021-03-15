export function getCompletedQuestIDs() {
  let storage = window.localStorage;
  let completedQuestIDs = storage.getItem("completedQuestIDs");

  if (completedQuestIDs == null || completedQuestIDs === "") {
    return [];
  } else {
    return JSON.parse(completedQuestIDs);
  }
}

export function setCompletedQuestIDs(completedQuestIDs) {
  let storage = window.localStorage;
  storage.setItem("completedQuestIDs", JSON.stringify(completedQuestIDs));
}

export function setUserLevel(level) {
  let storage = window.localStorage;
  storage.setItem("userLevel", level.toString());
}

export function getUserLevel() {
  let storage = window.localStorage;
  let userLevel = parseInt(storage.getItem("userLevel"), 10);

  if (!isNaN(userLevel)) {
    return userLevel;
  }
  return 1;
}
