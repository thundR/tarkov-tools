import React from 'react';

class QuestCard extends React.Component {
    render() {
        return (
            <div>
                {this.props.questData.title}
            </div>
        );
    }
}

export default QuestCard;