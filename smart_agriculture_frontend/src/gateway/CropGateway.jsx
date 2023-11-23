import { useEffect } from "react";
import axios from 'axios';

const CropGateway = ({ setCrops }) => {

  const postCrop = async ({ crop }) => {
    console.log(crop);
    try {
      const response = axios.post(`http://127.0.0.1:8000/crops/`, crop);
      // Request was successful
      console.log('Response data:', response.data);
    } catch (error) {
      // Handle error
      console.error('Error:', error.message);
    }
  };

  useEffect(() => {
    // Fetch data from the API
    axios.get('http://127.0.0.1:8000/crops/')
      .then(response => {
        setCrops(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return { postCrop };
}

export default CropGateway;