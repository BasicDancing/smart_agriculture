import { useEffect } from "react";
import axios from 'axios';

const ZillaGateway = ({ setZillas }) => {

  const postZilla = async ({ zilla }) => {
    console.log(zilla);
    try {
      const response = axios.post(`http://127.0.0.1:8000/zillas/`, zilla);
      // Request was successful
      console.log('Response data:', response.data);
    } catch (error) {
      // Handle error
      console.error('Error:', error.message);
    }
  };

  useEffect(() => {
    // Fetch data from the API
    axios.get('http://127.0.0.1:8000/zillas/')
      .then(response => {
        setZillas(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return {postZilla};
}

export default ZillaGateway;