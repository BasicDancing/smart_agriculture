import axios from "axios";
import { useEffect } from "react";

const DivisionGateway = ({ setDivisions }) => {

  const postDivision = async ({ division }) => {
    console.log(division);
    try {
      const response = axios.post(`http://127.0.0.1:8000/divisions/`, division);
      // Request was successful
      console.log('Response data:', response.data);
    } catch (error) {
      // Handle error
      console.error('Error:', error.message);
    }
  };

  useEffect(() => {
    // Fetch data from the API
    axios.get('http://127.0.0.1:8000/divisions/')
      .then(response => {
        setDivisions(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return { postDivision };
}

export default DivisionGateway;