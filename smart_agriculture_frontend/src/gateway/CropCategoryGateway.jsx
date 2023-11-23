import axios from "axios";
import { useEffect } from "react";

const CropCategoryGateway = ({ setCropCategories }) => {

  const postCropCategory = async ({ cropCategory }) => {
    console.log(cropCategory);
    try {
      const response = axios.post(`http://127.0.0.1:8000/cropcategories/`, cropCategory);
      // Request was successful
      console.log('Response data:', response.data);
    } catch (error) {
      // Handle error
      console.error('Error:', error.message);
    }
  };

  useEffect(() => {
    // Fetch data from the API
    axios.get('http://127.0.0.1:8000/cropcategories/')
      .then(response => {
        setCropCategories(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return { postCropCategory };
}

export default CropCategoryGateway;