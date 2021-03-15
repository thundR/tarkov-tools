# Quest / Item page

- active quests + item requirements for quests
- select which quests are done, that shows what's active
- unfinish quest in case of mis-click.
- three tables, one for active, one for completed, one for locked
- ability to filter quests based on properties of quests: location

## Components

### QuestTable

- has QuestList
- has QuestFilter

### QuestFilter

- use query-ish language to filter quests
- information passed back to quest page which then sends filtered quests to questlist

### QuestCards

- One quest list
- gets passed list of quests that satisfy filters and state (active, locked, completed)

### QuestCard

- row in QuestList
- displays relevant information about quest: quest name, item requirements
- checkbox for completion
- click on quest to expand and show item requirements
- has item requirement(s)

### ItemRequirement

- name of item and +/- to show how many of each you have
