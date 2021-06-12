import React from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox'
import '../Containers/App.css'
import Scroll from '../Components/Scroll'


class App extends React.Component {

    constructor() {
        super()
        this.state = {
            robots: [],
            searchField: '',
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                return response.json();
            })
            .then(users => {
                this.setState({ robots: users })
            })


    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })

    }

    render() {
        const {robots, searchField} = this.state;
        const filteredBots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })

        if (!robots.length) {
            return (
                <h1>Loading</h1>
            )
        }

        else {
            return (
                <div className="tc">
                    <h1 className="f1">ROBOFRIENDS</h1>
                    < SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList robots={filteredBots} />
                    </Scroll>
                </div>
            )
        }
    }

}

export default App