import axios from "axios";
import { useEffect } from "react";

const FertilizerGateway = ({ setFertilizers }) => {

  const postFertilizer = async ({ fertilizer }) => {
    console.log(fertilizer);
    try {
      const response = axios.post(`http://127.0.0.1:8000/fertilizers/`, fertilizer);
      // Request was successful
      console.log('Response data:', response.data);
    } catch (error) {
      // Handle error
      console.error('Error:', error.message);
    }
  };

  useEffect(() => {
    // Fetch data from the API
    axios.get('http://127.0.0.1:8000/fertilizers/')
      .then(response => {
        setFertilizers(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return { postFertilizer };
}

export default FertilizerGateway;