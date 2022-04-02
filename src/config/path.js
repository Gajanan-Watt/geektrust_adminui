import axios from "axios";

export default axios.create({
  baseURL: "/",
  heading: {
    "Content-Type": "application/json",
  },
});
