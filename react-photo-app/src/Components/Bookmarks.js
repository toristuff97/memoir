// Importing react dependencies and images and components to link up
import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import soup from '../assets/soup.jpg';
  import living from '../assets/living.jpg';
  import brunch from '../assets/brunch.jpg';
import Home from './Home';
import Profile1 from './Profile1';
import Profile2 from './Profile2';
import Profile3 from './Profile3';

export default class Bookmarks extends Component {
    render() {
        return (
            // Starting router for navbar links
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
                            <Link to='/' style={{fontFamily: "American Typewriter", fontSize: 22, color: "#c8553d"}}>
                            <a class="nav-link" style={{fontFamily: "American Typewriter", fontSize: 22, color: "#c8553d"}} href="javascript:;">Home <span class="sr-only">(current)</span></a>
                            </Link>
                            </li>
                            <li class="nav-item">
                            <Link to='Profile1' style={{fontFamily: "American Typewriter", fontSize: 22, color: "#c8553d"}}>
                            <a class="nav-link" style={{fontFamily: "American Typewriter", fontSize: 22, color: "#c8553d"}} href="javascript:;">Profile</a>
                            </Link>
                            </li>
                            <li class="nav-item">
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
                        <div class="col-10">
                        <Container>
                                <Row>
                                <Col>
                                <div class="card" style={{width: '30vw'}}>
                                    <img class="card-img-top" src={soup} rel="nofollow" alt="Card image cap"/>
                                    <div class="card-body">
                                        <button class="material-icons" style={{border: "none", backgroundColor: "white"}} >favorite_border</button>
                                        <p class="likes">2 Likes</p>
                                        <Link to="Profile3" style={{fontFamily: "American Typewriter", color: "#c8553d"}}>
                                        <p class="username" style={{fontWeight: "bold"}}>lucasicterine</p>
                                        </Link>
                                        <p class="caption">Was here yesterday, pretty cool!</p>
                                        <button type="button" class="btn btn-link">2 Comments</button>
                                        <button type="button" class="btn btn-link">Bookmarked</button>
                                    </div>
                                </div>
                                </Col>
                                <Col>
                                <div class="card" style={{width: '30vw'}}>
                                    <img class="card-img-top" src={brunch} rel="nofollow" alt="Card image cap"/>
                                    <div class="card-body">
                                        <button class="material-icons" style={{border: "none", backgroundColor: "white"}} >favorite_border</button>
                                        <p class="likes">2 Likes</p>
                                        <Link to='/Profile2' style={{fontFamily: "American Typewriter", color: "#c8553d"}}>
                                        <p class="username" style={{fontWeight: "bold"}}>fizzamy</p>
                                        </Link>
                                        <p class="caption">Was here yesterday, pretty cool!</p>
                                        <button type="button" class="btn btn-link">2 Comments</button>
                                        <button type="button" class="btn btn-link">Bookmarked</button>
                                    </div>
                                </div>
                                </Col>
                                <Col>
                                <div class="card" style={{width: '30vw'}}>
                                    <img class="card-img-top" src={living} rel="nofollow" alt="Card image cap"/>
                                    <div class="card-body">
                                        <button class="material-icons" style={{border: "none", backgroundColor: "white"}} >favorite_border</button> 
                                        <p class="likes">2 Likes</p>
                                        <Link to='/Profile2' style={{fontFamily: "American Typewriter", color: "#c8553d"}}>
                                        <p class="username" style={{fontWeight: "bold"}}>fizzamy</p>
                                        </Link>
                                        <p class="caption">Was here yesterday, pretty cool!</p>
                                        <button type="button" class="btn btn-link">2 Comments</button>
                                        <button type="button" class="btn btn-link">Bookmarked</button>
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
