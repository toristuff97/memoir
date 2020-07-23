import React, { Component } from 'react';
import reactstrap from 'reactstrap';


export default class Home extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg">
                <div class="container">
                    <a class="navbar-brand" href="javascript:;">Photos</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-bar navbar-kebab"></span>
                    <span class="navbar-toggler-bar navbar-kebab"></span>
                    <span class="navbar-toggler-bar navbar-kebab"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                        <a class="nav-link" href="javascript:;">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="javascript:;">Profile</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="javascript:;">Bookmarks</a>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>


                
            </div>
        )
    }
}
