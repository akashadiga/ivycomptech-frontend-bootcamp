import React, {Component} from 'react';

export default class Dashboard extends React.Component {
        state = {
            users: [],
        };
        componentDidMount() {
            this.getFetchUsers();
        }
        getFetchUsers() {
            this.setState(this.state,() => {fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()).then(result => this.setState({users: result })).catch(console.log);});
        }
       
        
        render() {
            const {users} = this.state;
            return (
              <>
              <h1>All User</h1>
                {
                        users.map(user => {
                            const {name, email } = user;
                            return (
                            <div key={name}>
                                <p>Name: {name}</p>
                                <p>Email: {email}</p>
                                <hr />
                            </div>
                            );
                        })
                }
                </>
            );
        }
}
