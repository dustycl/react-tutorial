import React, {Component} from 'react';
import Table from './Table.js';

class App extends Component {
    state = {
        characters: [],
    }

    removeCharacter = (index) => {

        this.setState({
            characters: this.state.characters.filter((character, i) => {
                return i !== index
            }),
        })
    }

    render() {
        const {characters} = this.state

        return (
            <div className="container">
                <Table characterData={characters} removeCharacter={this.removeCharacter} />
            </div>
        )
    }
}

  export default App