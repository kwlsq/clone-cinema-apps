import React, { Component } from 'react';
import Axios from 'axios';
import {API_URL} from '../../../Helpers/apiUrl';
import CardForPoster from './cardForPoster';
import './moviePoster.css';

class MoviePoster extends Component {
    state = {  
        movies:[]
    }

    componentDidMount(){
        Axios.get(API_URL+`/movies`)
        .then((res)=>{
            this.setState({movies:res.data})
            console.log(this.state);
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    renderCardForPoster=()=>{
        return this.state.movies.map((val)=>{
            return(<CardForPoster image={val.image} title={val.name}/>)
        })
    }

    render() { 
        return (  
            <div className="movie-poster-cont">
                {this.renderCardForPoster()}
            </div>
        );
    }
}
 
export default MoviePoster;