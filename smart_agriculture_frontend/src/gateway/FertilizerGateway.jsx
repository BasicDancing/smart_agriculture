import axios from "axios";
import { useEffect } from "react";

const FertilizerGateway = ({ setFertilizers }) => {

  //get all data
  const getFertilizers = async () => {
    axios.get('http://127.0.0.1:8000/fertilizers/')
      .then(response => {
        setFertilizers(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  // post fertilizer data
  const postFertilizer = async ({ fertilizer }) => {
    console.log(fertilizer);
    axios.post(`http://127.0.0.1:8000/fertilizers/`, fertilizer)
      .then(resposne => {
        getFertilizers();
        console.log(resposne.data);
      }).catch(error => {
        // Handle error
        console.error('Error:', error.message);
      })
  };

  // render data
  useEffect(() => {
    // Fetch data from the API
    getFertilizers();
  }, []);

  return { postFertilizer };
}

export default FertilizerGateway;