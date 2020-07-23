import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import climbing from '../assets/climbing.jpg'
import lady from '../assets/lady.jpg'
import cathedral from '../assets/cathedral.jpg'
import brunch from '../assets/brunch.jpg'
import building from '../assets/building.jpg'
import cat from '../assets/cat.jpg'
import couch from '../assets/couch.jpg'
import living from '../assets/living.jpg'
import museum from '../assets/museum.jpg'
import soup from '../assets/soup.jpg'
import sunflowers from '../assets/sunflowers.jpg'
import '../_brand.scss';

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className= 'navigation'>
                    <nav class="navbar navbar-expand-lg navbar-custom">
                    <div class="container">
                        <a class="navbar-brand" style={{fontFamily: "Brush Script MT", fontSize: 40, color: "#c8553d"}} href="javascript:;">Memoir</a>
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
                            <li class="nav-item">
                            <a class="nav-link" style={{fontFamily: "American Typewriter", fontSize: 22, color: "#c8553d"}} href="javascript:;">Profile</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" style={{fontFamily: "American Typewriter", fontSize: 22, color: "#c8553d"}} href="javascript:;">Bookmarks</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </nav>
                </div>
                <div className='feedPhotos'>
                <Container>
                <Row>
                    <Col>
                    <div class="card" style={{width: '30vw'}}>
                        <img class="card-img-top" src={cathedral} rel="nofollow" alt="Card image cap"/>
                        <div class="card-body">
                            <i class="material-icons">favorite_border</i> 
                            <p class="likes">2 Likes</p>
                            <p class="username">dietmangotea</p>
                            <p class="caption">Was here yesterday, pretty cool!</p>
                            <button type="button" class="btn btn-link">2 Comments</button>
                            <button type="button" class="btn btn-link">Bookmark</button>
                        </div>
                    </div>
                    </Col>
                    <Col>
                    <div class="card" style={{width: '30vw'}}>
                        <img class="card-img-top" src={lady} rel="nofollow" alt="Card image cap"/>
                        <div class="card-body">
                            <i class="material-icons">favorite_border</i>
                            <p class="likes">2 Likes</p>
                            <p class="username">fizzamy</p>
                            <p class="caption">Was here yesterday, pretty cool!</p>
                            <button type="button" class="btn btn-link">2 Comments</button>
                            <button type="button" class="btn btn-link">Bookmark</button>
                        </div>
                    </div>
                    </Col>
                    <Col>
                    <div class="card" style={{width: '30vw'}}>
                        <img class="card-img-top" src={climbing} rel="nofollow" alt="Card image cap"/>
                        <div class="card-body">
                            <i class="material-icons">favorite_border</i>
                            <p class="likes">2 Likes</p>
                            <p class="username">lucasicterine</p>
                            <p class="caption">Was here yesterday, pretty cool!</p>
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
                            <i class="material-icons">favorite_border</i>  
                            <p class="likes">2 Likes</p>
                            <p class="username">lucasicterine</p>
                            <p class="caption">Was here yesterday, pretty cool!</p>
                            <button type="button" class="btn btn-link">2 Comments</button>
                            <button type="button" class="btn btn-link">Bookmark</button>
                        </div>
                    </div>
                    </Col>
                    <Col>
                    <div class="card" style={{width: '30vw'}}>
                        <img class="card-img-top" src={brunch} rel="nofollow" alt="Card image cap"/>
                        <div class="card-body">
                            <i class="material-icons">favorite_border</i>
                            <p class="likes">2 Likes</p>
                            <p class="username">fizzamy</p>
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
                            <i class="material-icons">favorite_border</i>
                            <p class="likes">2 Likes</p>
                            <p class="username">dietmangotea</p>
                            <p class="caption">Was here yesterday, pretty cool!</p>
                            <button type="button" class="btn btn-link">2 Comments</button>
                            <button type="button" class="btn btn-link">Bookmark</button>
                        </div>
                    </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <div class="card" style={{width: '30vw'}}>
                        <img class="card-img-top" src={cat} rel="nofollow" alt="Card image cap"/>
                        <div class="card-body">
                            <i class="material-icons">favorite_border</i>
                            <p class="likes">2 Likes</p>
                            <p class="username">fizzamy</p>
                            <p class="caption">Was here yesterday, pretty cool!</p>
                            <button type="button" class="btn btn-link">2 Comments</button>
                            <button type="button" class="btn btn-link">Bookmark</button>
                        </div>
                    </div>
                    </Col>
                    <Col>
                    <div class="card" style={{width: '30vw'}}>
                        <img class="card-img-top" src={soup} rel="nofollow" alt="Card image cap"/>
                        <div class="card-body">
                            <i class="material-icons">favorite_border</i>
                            <p class="likes">2 Likes</p>
                            <p class="username">lucasicterine</p>
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
                            <i class="material-icons">favorite_border</i>
                            <p class="likes">2 Likes</p>
                            <p class="username">dietmangotea</p>
                            <p class="caption">Was here yesterday, pretty cool!</p>
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
                            <i class="material-icons">favorite_border</i>  
                            <p class="likes">2 Likes</p>
                            <p class="username">fizzamy</p>
                            <p class="caption">Was here yesterday, pretty cool!</p>
                            <button type="button" class="btn btn-link">2 Comments</button>
                            <button type="button" class="btn btn-link">Bookmark</button>
                        </div>
                    </div>
                    </Col>
                    <Col>
                    <div class="card" style={{width: '30vw'}}>
                        <img class="card-img-top" src={museum} rel="nofollow" alt="Card image cap"/>
                        <div class="card-body">
                            <i class="material-icons">favorite_border</i>
                            <p class="likes">2 Likes</p>
                            <p class="username">lucasicterine</p>
                            <p class="caption">Was here yesterday, pretty cool!</p>
                            <button type="button" class="btn btn-link">2 Comments</button>
                            <button type="button" class="btn btn-link">Bookmark</button>
                        </div>
                    </div>
                    </Col>
                </Row>
            </Container>
            <br/>
            <div class="footer" style={{fontFamily: "American Typewriter", color: "#c8553d"}}>
                <h3 >That's all - for now!</h3>
            </div>
            <br/>
            </div>
        </div>
        )
    }
}
