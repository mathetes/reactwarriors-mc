import React from "react";
import { moviesData } from "../moviesData";
import MovieItem from "./Movieitem";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: moviesData,
      moviesWillWatch: []
    };
    // this.removeMovie = this.removeMovie.bind(this);
  }

  removeMovie = movie => {
    const updateMovies = this.state.movies.filter(function(item) {
      return item.id !== movie.id;
    });
    console.log(updateMovies);
    this.setState({
      movies: updateMovies
    });
  };

  addMovieToWillWatch = movie => {
    // this.state.moviesWillWatch.push(movie);
    const updateMovies = [...this.state.moviesWillWatch, movie];
    //updateMovies.push(movie);
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-9">
              <div className="row">
                {this.state.movies.map(movie => {
                  return (
                    <div className="col-6 mb-4" key={movie.id}>
                      <MovieItem
                        movie={movie}
                        removeMovie={this.removeMovie}
                        addMovieToWillWatch={this.addMovieToWillWatch}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-3">
              <p>Will Watch: {this.state.moviesWillWatch.length}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// function App() {
//   return <div>{ moviesData[0].title }</div>;
// }

export default App;
