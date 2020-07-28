import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import lucas from '../assets/lucas.jpg'
import climbing from '../assets/climbing.jpg'
import soup from '../assets/soup.jpg'
import museum from '../assets/museum.jpg'
import building from '../assets/building.jpg';
import { Link } from 'react-router-dom';

export default class Profile3 extends Component {
    render() {
        return (
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
                            <Link to="/" style={{fontFamily: "American Typewriter", fontSize: 22, color: "#c8553d"}}>
                            <a class="nav-link" style={{fontFamily: "American Typewriter", fontSize: 22, color: "#c8553d"}} href="javascript:;">Home <span class="sr-only">(current)</span></a>
                            </Link>
                            </li>
                            {/* <li class="nav-item">
                            <a class="nav-link" style={{fontFamily: "American Typewriter", fontSize: 22, color: "#c8553d"}} href="javascript:;">Profile</a>
                            </li> */}
                            <li class="nav-item">
                            <Link to="/Bookmarks" style={{fontFamily: "American Typewriter", fontSize: 22, color: "#c8553d"}}>
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
                            <div className="profileInfo">
                                <img src={lucas} class="rounded-circle" alt="profile picture" style={{width: '13vw', height: '19vh'}}/>
                                <p class="user">lucasicterine</p>
                                <p class="bio">Bio bio bio bio bio</p>
                                <p class="follows">2 Followers | 2 Following</p>
                                <button>Follow</button>
                            </div>
                        </div>
                        <div class="col-10">
                        <Container>
                                <Row>
                                <Col>
                                <div class="card" style={{width: '30vw'}}>
                                    <img class="card-img-top" src={climbing} rel="nofollow" alt="Card image cap"/>
                                    <div class="card-body">
                                        <button class="material-icons" style={{border: "none", backgroundColor: "white"}} >favorite_border</button>
                                        <p class="likes">2 Likes</p>
                                        <p class="username" style={{fontWeight: "bold"}}>lucasicterine</p>
                                        <p class="caption">I'm already halfway there!</p>
                                        <button type="button" class="btn btn-link">2 Comments</button>
                                        <button type="button" class="btn btn-link">Bookmark</button>
                                    </div>
                                </div>
                                </Col>
                                <Col>
                                <div class="card" style={{width: '30vw'}}>
                                    <img class="card-img-top" src={soup} rel="nofollow" alt="Card image cap"/>
                                    <div class="card-body">
                                        <button class="material-icons" style={{border: "none", backgroundColor: "white"}} >favorite_border</button>
                                        <p class="likes">2 Likes</p>
                                        <p class="username" style={{fontWeight: "bold"}}>lucasicterine</p>
                                        <p class="caption">Call me Chef Lucas B)</p>
                                        <button type="button" class="btn btn-link">2 Comments</button>
                                        <button type="button" class="btn btn-link">Bookmark</button>
                                    </div>
                                </div>
                                </Col>
                                <Col>
                                <div class="card" style={{width: '30vw'}}>
                                    <img class="card-img-top" src={museum} rel="nofollow" alt="Card image cap"/>
                                    <div class="card-body">
                                        <button class="material-icons" style={{border: "none", backgroundColor: "white"}} >favorite_border</button>
                                        <p class="likes">2 Likes</p>
                                        <p class="username" style={{fontWeight: "bold"}}>lucasicterine</p>
                                        <p class="caption">A little dramatic, but I like it.</p>
                                        <button type="button" class="btn btn-link">2 Comments</button>
                                        <button type="button" class="btn btn-link">Bookmark</button>
                                    </div>
                                </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                <div class="card" style={{width: '30vw'}}>
                                    <img class="card-img-top" src={building} rel="nofollow" alt="Card image cap"/>
                                    <div class="card-body">
                                        <button class="material-icons" style={{border: "none", backgroundColor: "white"}} >favorite_border</button>
                                        <p class="likes">2 Likes</p>
                                        <Link to='/Profile3' style={{fontFamily: "American Typewriter", color: "#c8553d"}}>
                                        <p class="username" style={{fontWeight: "bold"}}>lucasicterine</p>
                                        </Link>
                                        <p class="caption">Not too shabby</p>
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
            </div>
        )
    }
}
