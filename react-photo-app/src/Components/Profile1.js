import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import tea from '../assets/tea.jpg'
import cathedral from '../assets/cathedral.jpg'
import couch from '../assets/couch.jpg'
import sunflowers from '../assets/sunflowers.jpg'

export default class Profile1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loggedIn: true
        }
    }

    logOut = () => {
        this.setState({loggedIn: false});
    }

    render() {
        return (
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
                            <a class="nav-link" style={{fontFamily: "American Typewriter", fontSize: 22, color: "#c8553d"}} href="javascript:;">Home <span class="sr-only">(current)</span></a>
                            </li>
                            {/* <li class="nav-item">
                            <a class="nav-link" style={{fontFamily: "American Typewriter", fontSize: 22, color: "#c8553d"}} href="javascript:;">Profile</a>
                            </li> */}
                            <li class="nav-item">
                            <a class="nav-link" style={{fontFamily: "American Typewriter", fontSize: 22, color: "#c8553d"}} href="javascript:;">Bookmarks</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </nav>
                </div>
                <div class="container">
                    <div class="row">
                        <div class=".col-">
                            <div className="profileInfo">
                                <img src={tea} class="rounded-circle" alt="profile picture" style={{width: '13vw', height: '19vh'}}/>
                                <p class="user">dietmangotea</p>
                                <p class="bio">Bio bio bio bio bio</p>
                                <p class="follows">2 Followers | 2 Following</p>
                                <button onClick={this.logOut}>Log Out</button>
                            </div>
                        </div>
                        <div class="col-10">
                        <Container>
                                <Row>
                                <Col>
                                <div class="card" style={{width: '30vw'}}>
                                    <img class="card-img-top" src={cathedral} rel="nofollow" alt="Card image cap"/>
                                    <div class="card-body">
                                        <button className="likeButton1" class="material-icons" style={{border: "none", backgroundColor: "white"}}>favorite_border</button>
                                        <p class="likes">2 Likes</p>
                                        <p class="username" style={{fontWeight: "bold"}}>dietmangotea</p>
                                        <p class="caption">Was here yesterday, pretty cool!</p>
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
                                        <p class="caption">Was here yesterday, pretty cool!</p>
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
                                        <p class="caption">Was here yesterday, pretty cool!</p>
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
        )
    }
}
