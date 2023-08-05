import React from 'react';
import axios from 'axios';
export default class MyList extends React.Component {
    state = {
        persons: []
    }
    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(response => {
                const users = response.data;
                this.setState ({users});
            })
    }
    render() {
        return (
            < ul >
                {/*{this.state.users (user =>  {user.name}   )}*/}
            < /ul >

        )
    }
}