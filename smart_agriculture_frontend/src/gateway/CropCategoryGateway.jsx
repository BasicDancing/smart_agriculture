import axios from "axios";
import { useEffect } from "react";

const CropCategoryGateway = ({ setCropCategories }) => {

  //get all data
  const getCropCategories = async () => {
    axios.get('http://127.0.0.1:8000/cropcategories/')
      .then(response => {
        setCropCategories(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  //post crop category
  const postCropCategory = async ({ cropCategory }) => {
    console.log(cropCategory);
    axios.post(`http://127.0.0.1:8000/cropcategories/`, cropCategory)
      .then(response => {
        //re render data again!
        getCropCategories();
        console.log(response.data);
      }).catch(error => {
        // Handle error
        console.error('Error:', error.message);
      });
  };

  //Render every change!
  useEffect(() => {
    // Fetch data from the API
    getCropCategories();
  }, []);

  return { postCropCategory };
}

export default CropCategoryGateway;