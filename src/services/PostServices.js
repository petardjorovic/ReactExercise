import axios from "axios";

class PostService {
  static getAllProducts() {
    return axios.get("https://dummyjson.com/products");
  }
  static getSingleProduct = (id) =>
    axios.get("https://dummyjson.com/products/" + id);
}

export default PostService;
