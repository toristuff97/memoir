// Importing React dependencies and images and components for profile1 (user profile)
import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import tea from '../assets/tea.jpg'
import cathedral from '../assets/cathedral.jpg'
import couch from '../assets/couch.jpg'
import sunflowers from '../assets/sunflowers.jpg'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Home from './Home';
import Profile2 from './Profile2';
import Profile3 from './Profile3';
import Bookmarks from './Bookmarks';

export default class Profile1 extends Component {

    // State for whether or not the user is currently logged in or not
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: true
        }
    }
    // Function for logging the user out
    logOut = () => {
        this.setState({loggedIn: false});
    }

    render() {
        return (
            // Starting router for links in navbar
            <Router>
            <div>
                <div className= 'navigation'>
                    <nav class="navbar navbar-expand-lg navbar-custom">
                    <div class="container">
                        <a class="navbar-brand" style={{fontFamily: "Brush Script MT", fontSize: 40, color: "#c8553d"}} href="javascript:;">M</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-bar navbar-kebab"></span>
                        <span class="navbar-toggler-bar navbar-kebab"></span>
                        <span class="navbar-toggler-bar navbar-kebab"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                        <li class="nav-item active">
                            {/* Link to homepage */}
                            <Link to='/' style={{fontFamily: "American Typewriter", fontSize: 22, color: "#c8553d"}}>
                            <a class="nav-link" style={{fontFamily: "American Typewriter", fontSize: 22, color: "#c8553d"}} href="javascript:;">Home <span class="sr-only">(current)</span></a>
                            </Link>
                            </li>
                            <li class="nav-item">
                            {/* Link to Bookmarks page */}
                            <Link to='/Bookmarks' style={{fontFamily: "American Typewriter", fontSize: 22, color: "#c8553d"}}>
                            <a class="nav-link" style={{fontFamily: "American Typewriter", fontSize: 22, color: "#c8553d"}} href="javascript:;">Bookmarks</a>
                            </Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </nav>
                </div>
                <div class="container">
                    <div class="row">
                        <div class=".col-">
                            {/* Profile info starts here */}
                            <div className="profileInfo">
                                <img src={tea} class="rounded-circle" alt="profile picture" style={{width: '13vw', height: '19vh'}}/>
                                <p class="user">dietmangotea</p>
                                <p class="bio">Bio bio bio bio bio</p>
                                <p class="follows">2 Followers | 2 Following</p>
                                <button onClick={this.logOut}>Log Out</button>
                            </div>
                        </div>
                        <div class="col-10">
                        {/* Profile photos start here */}
                        <Container>
                                <Row>
                                <Col>
                                <div class="card" style={{width: '30vw'}}>
                                    <img class="card-img-top" src={cathedral} rel="nofollow" alt="Card image cap"/>
                                    <div class="card-body">
                                        <button className="likeButton1" class="material-icons" style={{border: "none", backgroundColor: "white"}}>favorite_border</button>
                                        <p class="likes">2 Likes</p>
                                        <p class="username" style={{fontWeight: "bold"}}>dietmangotea</p>
                                        <p class="caption">The view from up here...</p>
                                        <button type="button" class="btn btn-link">2 Comments</button>
                                        <button type="button" class="btn btn-link">Bookmark</button>
                                    </div>
                                </div>
                                </Col>
                                <Col>
                                <div class="card" style={{width: '30vw'}}>
                                    <img class="card-img-top" src={couch} rel="nofollow" alt="Card image cap"/>
                                    <div class="card-body">
                                        <button class="material-icons" style={{border: "none", backgroundColor: "white"}} >favorite_border</button>
                                        <p class="likes">2 Likes</p>
                                        <p class="username" style={{fontWeight: "bold"}}>dietmangotea</p>
                                        <p class="caption">Almost done decorating the living room!</p>
                                        <button type="button" class="btn btn-link">2 Comments</button>
                                        <button type="button" class="btn btn-link">Bookmark</button>
                                    </div>
                                </div>
                                </Col>
                                <Col>
                                <div class="card" style={{width: '30vw'}}>
                                    <img class="card-img-top" src={sunflowers} rel="nofollow" alt="Card image cap"/>
                                    <div class="card-body">
                                        <button class="material-icons" style={{border: "none", backgroundColor: "white"}} >favorite_border</button>
                                        <p class="likes">2 Likes</p>
                                        <p class="username" style={{fontWeight: "bold"}}>dietmangotea</p>
                                        <p class="caption">Here comes the sun</p>
                                        <button type="button" class="btn btn-link">2 Comments</button>
                                        <button type="button" class="btn btn-link">Bookmark</button>
                                    </div>
                                </div>
                                </Col>
                            </Row>
                            </Container>
                        </div>
                    </div>
                </div>
                <Switch>
                <Route exact path='/' Component={Home}/>
                <Route exact path='/Profile1' Component={Profile1}/>
                <Route exact path='/Profile2' Component={Profile2}/>
                <Route exact path='/Profile3' Component={Profile3}/>
                <Route exact path='/Bookmarks' Componen={Bookmarks}/>
            </Switch>
            </div>
            </Router>
        )
    }
}
