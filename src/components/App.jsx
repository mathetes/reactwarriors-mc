import React from "react";
import { moviesData } from "../moviesData";
import MovieItem from "./Movieitem";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: moviesData
    };
    // this.removeMovie = this.removeMovie.bind(this);
  }

  removeMovie = movie => {
    const updateMovies = this.state.movies.filter(function(item) {
      return item.id !== movie.id;
    });
    console.log(updateMovies);
    this.setState({
      movies:updateMovies
    });
  }

  render() {
    return (
      <div>
        { this.state.movies.map(movie => {
         return (
          <MovieItem key={movie.id} movie={movie} removeMovie={this.removeMovie}/>
        )
        })}
      </div>
    );
  }
}


// function App() {
//   return <div>{ moviesData[0].title }</div>;
// }

export default App;
