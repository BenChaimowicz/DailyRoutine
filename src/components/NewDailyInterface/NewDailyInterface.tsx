import * as React from 'react';

class NewDailyInterface extends React.Component {
    
    public creatorShowing: boolean = false;

    public showCreator = () => {
        this.creatorShowing = !this.creatorShowing;
    };
    

    public render(): any {
        return (
            <div>
                <button type="button" onClick={this.showCreator}>New Daily</button>
                    <h2>Create new Daily:</h2>
                    <input
                        name="nameInput"
                        type="text"
                        placeholder="Daily name"
                    />
                    <h2>Daily hours:</h2>
                    <input
                        name="timeInput"
                        type="number"
                        placeholder="0"
                        step="0.5"
                    /> 
            </div>
        )
    }
}

export default NewDailyInterface;