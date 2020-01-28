import React from 'react';

//components
import Input from "./../components/Input";
import Display from "./../components/Display"

//API
import API from "./../util/API"

class Home extends React.Component {
  state = {
    movie: "",
    title: "",
    message: "",
    plot: ""
  }

  //updates state
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]:value
    });
    // console.log(this.state.movie)
  };

  //submits form
  handleFormSubmit = event => {
    event.preventDefault();
    // console.log(`Movie Title = ${this.state.movie}`)
    API.findMovie(this.state.movie).then(response => {
      let movie = response.data
      console.log(movie)
      console.log(`${movie.Title} (${movie.Year})` );
      console.log(movie.Plot);

      this.setState({
        movie: "",
        title: `Movie Tonight - ${movie.Title} (${movie.Year})`,
        message: `Join us at 8PM at Julie's Safari Theatre for tonight's showing of ${movie.Title}`,
        plot: movie.Plot
      })
    });
  };

  //display info to user
  updateInfo = () => {
    return(
      <div>
        this.state.title
      </div>
    )
  }

  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <Input 
              value={this.state.movie}
              onChange={this.handleInputChange}
              name="movie"
              onSubmit={this.handleFormSubmit}
            />

            <Display 
              title={this.state.title}
              message={this.state.message}
              plot={this.state.plot}
            />
          </div>
        </div>
      </div>
    )    
  }
}

export default Home;