import axios from "axios";
import { useEffect } from "react";

const PostGateway = ({ setPosts }) => {

  //get all data
  const getPosts = async () => {
    axios.get('http://127.0.0.1:8000/posts/')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  //post Post
  const postPost = async ({ post }) => {
    console.log(post);
    axios.post(`http://127.0.0.1:8000/posts/`, post)
      .then(response => {
        getPosts();
        console.log(response.data);
      }).catch(error => {
        // Handle error
        console.error('Error:', error.message);
      });
  };

  //delete post
  const deletePost = async ({ post }) => {
    console.log(post);
    axios.delete(`http://127.0.0.1:8000/posts/${post.id}/`)
      .then(response => {
        //re render data again!
        getPosts();
        console.log(response.data);
      }).catch(error => {
        // Handle error
        console.error('Error:', error.message);
      });
  };

  //render all data
  useEffect(() => {
    // Fetch data from the API
    getPosts();
  }, []);

  return { 
    postPost,
    deletePost 
  };
}

export default PostGateway;