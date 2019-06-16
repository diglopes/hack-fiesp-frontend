import axios from "axios";

const api = axios.create({
  baseURL: "https://tupinicodebackend.herokuapp.com/api"
});

export default api;
