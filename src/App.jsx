import React, { Component } from 'react'
import Table from './Table'
import Page from './Page'


class App extends Component {

    state = {
        characters: [

            {
                name: 'Charlie',
                job: 'Janitor',
            },

            {
                name: 'Mac',
                job: 'Bouncer',
            },

            {
                name: 'Dee',
                job: 'Aspring actress'
            },

            {
                name: 'Dennis',
                job: 'Bartender'
            }

        ]
    }

    removeCharacter = (index) => {
        const { characters } = this.state
        this.setState({
            characters: characters.filter((characters, i) => {
            console.log(i + ' ii');
            console.log(index + ' index');
                return i !== index
            })
        })
    }



    render() {
        const { characters } = this.state
        return (
            <div className="container">
                <h2 className='text-center'>Belajar React</h2>
                <Table characterData={characters} removeCharacter={this.removeCharacter} />
                <Page />
            </div>
        )
    }
}


export default App