import React, { Component } from 'react';
import MoviePoster from './LandingComp/moviePoster';
import './landingPage.css';


class LandingPage extends Component {
    state = {  }
    render() { 
        return (  
            <div className="content-wrapper">
                <div className="carousel-advertisement">
                    disini carousel
                </div>
                <div className="now-playing-movies-container">
                    <div className="now-playing-text-cont">
                        <div className="now-playing-text">Now Playing</div>
                        <div className="now-playing-dropdown">
                        </div>
                    </div>
                    <div className="movie-posters-cont">
                        <MoviePoster/>
                    </div>
                </div>
                <div className="upcoming-movies-container">
                    disini upcoming movies
                </div>
            </div>
        );
    }
}
 
export default LandingPage;