import axios from "axios";

export default {
  findMovie: function(title) {
    return axios.get(`http://www.omdbapi.com/?apikey=trilogy&t=${title}`)
  }
}