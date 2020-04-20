import React from "react";
//import { moviesData } from "../moviesData";
import MovieItem from "./Movieitem";
import { API_URL, API_KEY_3 } from "../utils/api";
import MovieTabs from "./MovieTabs";
import MoviePages from "./MoviePages";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      moviesWillWatch: [],
      sort_by: "revenue.desc",
      pages: 0
    };
    // this.removeMovie = this.removeMovie.bind(this);
  }

  componentDidMount() {
    this.getMovies();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("DidUpdate");
    console.log("prev", prevProps, prevState);
    console.log("this", this.props, this.state);
    if (prevState.sort_by !== this.state.sort_by) {
      console.log("call api");
      this.getMovies();
    }
  }

  getMovies = () => {
    fetch(
      `${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sort_by}`
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log("data", data);
        this.setState({
          movies: data.results
        });
      });
  };

  removeMovie = movie => {
    const updateMovies = this.state.movies.filter(function(item) {
      return item.id !== movie.id;
    });
    // console.log(updateMovies);
    this.setState({
      movies: updateMovies
    });
  };

  removeMovieFromWillWatch = movie => {
    const updateMoviesWillWatch = this.state.moviesWillWatch.filter(function(
      item
    ) {
      return item.id !== movie.id;
    });
    // console.log(updateMovies);
    this.setState({
      moviesWillWatch: updateMoviesWillWatch
    });
  };

  addMovieToWillWatch = movie => {
    // this.state.moviesWillWatch.push(movie);
    const updateMoviesWillWatch = [...this.state.moviesWillWatch, movie];
    //updateMovies.push(movie);
    this.setState({
      moviesWillWatch: updateMoviesWillWatch
    });
  };

  updateSortBy = value => {
    this.setState({
      sort_by: value
    });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-9">
              <div className="row mb-4">
                <div className="col-12">
                  <MovieTabs
                    sort_by={this.state.sort_by}
                    updateSortBy={this.updateSortBy}
                  />
                </div>
              </div>
              <div className="row">
                {this.state.movies.map(movie => {
                  return (
                    <div className="col-6 mb-4" key={movie.id}>
                      <MovieItem
                        movie={movie}
                        removeMovie={this.removeMovie}
                        addMovieToWillWatch={this.addMovieToWillWatch}
                        removeMovieFromWillWatch={this.removeMovieFromWillWatch}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-3">
              <h2>Will Watch: {this.state.moviesWillWatch.length} movies</h2>
            </div>
          </div>
          <div className="row">
            <MoviePages pages={this.state.pages} />
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
