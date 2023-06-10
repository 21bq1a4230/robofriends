import React, { Component } from "react";
import Cardlist from "../Components/cardList";
import SearchBox from "../Components/SearchBar"
import Scroll from "../Components/Scroll.js"
import Loading from "../Components/Loading"
import ErrorBoundary from "../Components/ErrorBoundary";
import "./App.css"
class App extends Component{
    constructor(){
        super()
        this.state = {
            friend : [],
            searchfield : ""
        }
    }
    componentDidMount(){
        fetch("https://jsonplaceholder.cypress.io/users")
        .then(response=>{
            return response.json()
        })
        .then(users =>{
            this.setState({friend:users})
        });
    }
    onSearchChanged=(event)=>{
        this.setState({searchfield: event.target.value})
    }   
    render(){
        const filteredFriends = this.state.friend.filter(friends => {
            return friends.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if(this.state.friend.length === 0){
            return <Loading />
        }
        else{
            return (
                <div className="tc">
                    <h1 className="f1">Robo Friends</h1>
                        <SearchBox searchChange = {this.onSearchChanged}/>
                    <Scroll>
                        <ErrorBoundary>
                            <Cardlist friends ={filteredFriends} />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
        }
    }
}

export {App}