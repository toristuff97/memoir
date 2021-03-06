// Importing React depencencies and images and other components for Profile2
import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import lady from '../assets/lady.jpg'
import cat from '../assets/cat.jpg'
import brunch from '../assets/brunch.jpg'
import living from '../assets/living.jpg';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Home from './Home';
import Profile1 from './Profile1';
import Profile3 from './Profile3';
import Bookmarks from './Bookmarks';

export default class Profile2 extends Component {
    render() {
        return (
            // Starting Router to navigate from navbar
            <Router>
            <div>
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
                            {/* Link to Bookmarks */}
                            <Link to='/Bookmarks' style={{fontFamily: "American Typewriter", fontSize: 22, color: "#c8553d"}}>
                            <a class="nav-link" style={{fontFamily: "American Typewriter", fontSize: 22, color: "#c8553d"}} href="javascript:;">Bookmarks</a>
                            </Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </nav>
                </div><div class="container">
                    <div class="row">
                        <div class=".col-">
                            {/* Profile info starts here */}
                            <div className="profileInfo">
                                <img src={lady} class="rounded-circle" alt="profile picture" style={{width: '13vw', height: '19vh'}}/>
                                <p class="user">fizzamy</p>
                                <p class="bio">Bio bio bio bio bio</p>
                                <p class="follows">2 Followers | 2 Following</p>
                                <button>Following</button>
                            </div>
                        </div>
                        <div class="col-10">
                        {/* Profile photos start here in rows and columns */}
                        <Container>
                                <Row>
                                <Col>
                                <div class="card" style={{width: '30vw'}}>
                                    <img class="card-img-top" src={lady} rel="nofollow" alt="Card image cap"/>
                                    <div class="card-body">
                                        <button class="material-icons" style={{border: "none", backgroundColor: "white"}} >favorite_border</button>
                                        <p class="likes">2 Likes</p>
                                        <p class="username" style={{fontWeight: "bold"}}>fizzamy</p>
                                        <p class="caption">New profile pic!</p>
                                        <button type="button" class="btn btn-link">2 Comments</button>
                                        <button type="button" class="btn btn-link">Bookmark</button>
                                    </div>
                                </div>
                                </Col>
                                <Col>
                                <div class="card" style={{width: '30vw'}}>
                                    <img class="card-img-top" src={brunch} rel="nofollow" alt="Card image cap"/>
                                    <div class="card-body">
                                        <button class="material-icons" style={{border: "none", backgroundColor: "white"}} >favorite_border</button>
                                        <p class="likes">2 Likes</p>
                                        <p class="username" style={{fontWeight: "bold"}}>fizzamy</p>
                                        <p class="caption">Brunch with besties</p>
                                        <button type="button" class="btn btn-link">2 Comments</button>
                                        <button type="button" class="btn btn-link">Bookmark</button>
                                    </div>
                                </div>
                                </Col>
                                <Col>
                                <div class="card" style={{width: '30vw'}}>
                                    <img class="card-img-top" src={cat} rel="nofollow" alt="Card image cap"/>
                                    <div class="card-body">
                                        <button class="material-icons" style={{border: "none", backgroundColor: "white"}} >favorite_border</button>
                                        <p class="likes">2 Likes</p>
                                        <p class="username" style={{fontWeight: "bold"}}>fizzamy</p>
                                        <p class="caption">My baby :3</p>
                                        <button type="button" class="btn btn-link">2 Comments</button>
                                        <button type="button" class="btn btn-link">Bookmark</button>
                                    </div>
                                </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                <div class="card" style={{width: '30vw'}}>
                                    <img class="card-img-top" src={living} rel="nofollow" alt="Card image cap"/>
                                    <div class="card-body">
                                        <button class="material-icons" style={{border: "none", backgroundColor: "white"}} >favorite_border</button> 
                                        <p class="likes">2 Likes</p>
                                        <Link to='/Profile2' style={{fontFamily: "American Typewriter", color: "#c8553d"}}>
                                        <p class="username" style={{fontWeight: "bold"}}>fizzamy</p>
                                        </Link>
                                        <p class="caption">Interior goals</p>
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
            </div>
            {/* Added switch for router, I don't know if i need it here but I have it. */}
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
