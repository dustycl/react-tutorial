import React, {Component} from 'react';
import Table from './Table.js';
import Form from './Form.js';

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
                <Form />
            </div>
        )
    }
}

  export default App