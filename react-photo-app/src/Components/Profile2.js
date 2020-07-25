import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import lady from '../assets/lady.jpg'

export default class Profile2 extends Component {
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
                <div className="profileInfo">
                    <img src={lady} class="rounded-circle" alt="profile picture" style={{width: '13vw', height: '19vh'}}/>
                    <p class="user">fizzamy</p>
                    <p class="bio">Bio bio bio bio bio</p>
                    <p class="follows">2 Followers | 2 Following</p>
                    <button>Follow</button>
                </div>
            </div>
            </div>
        )
    }
}
