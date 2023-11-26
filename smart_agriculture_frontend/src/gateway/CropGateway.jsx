import { useEffect } from "react";
import axios from 'axios';

const CropGateway = ({ setCrops }) => {

  // get all data
  const getCrops = async () => {
    axios.get('http://127.0.0.1:8000/crops/')
      .then(response => {
        setCrops(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  // post crop
  const postCrop = async ({ crop }) => {
    console.log(crop);
    axios.post(`http://127.0.0.1:8000/crops/`, crop).
      then(response => {
        getCrops();
        console.log(response.data);
      }).catch(error => {
        // Handle error
        console.error('Error:', error.message);
      });
  };

  // render in every change
  useEffect(() => {
    // Fetch data from the API
    getCrops()
  }, []);

  return { postCrop };
}

export default CropGateway;