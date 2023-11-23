import axios from "axios";
import { useEffect } from "react";

const PostGateway = ({ setPosts }) => {

  const postPost = async ({ post }) => {
    console.log(post);
    try {
      const response = axios.post(`http://127.0.0.1:8000/posts/`, post);
      // Request was successful
      console.log('Response data:', response.data);
    } catch (error) {
      // Handle error
      console.error('Error:', error.message);
    }
  };

  useEffect(() => {
    // Fetch data from the API
    axios.get('http://127.0.0.1:8000/posts/')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return { postPost };
}

export default PostGateway;