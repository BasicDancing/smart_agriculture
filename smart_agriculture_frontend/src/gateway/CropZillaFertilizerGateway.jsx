import axios from "axios";
import { useEffect } from "react";

const CropZillaFertilizerGateway = ({ setZillaCropFertilizers }) => {

  //get all data
  const getZillaCropFertilizers = async () => {
    axios.get('http://127.0.0.1:8000/zillacropfertilizers/')
      .then(response => {
        setZillaCropFertilizers(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  // post zill crop fertilizer data
  const postZillaCropFertilizer = async ({ zillaCropFertilizer }) => {
    console.log(zillaCropFertilizer);
    axios.post(`http://127.0.0.1:8000/zillacropfertilizers/`, zillaCropFertilizer)
      .then(response => {
        getZillaCropFertilizers()
        console.log(response.data);
      }).catch(error => {
        // Handle error
        console.error('Error:', error.message);
      });
  };

  // filter data by zilla and crop
  const fetchPost = async ({ zilla, crop, setFertilizers }) => {
    const response = await fetch(
      `http://127.0.0.1:8000/fertilizermeasures/?zilla__id=${zilla}&crop__id=${crop}`
    );
    const data = await response.json();
    console.log(data);
    setFertilizers(data);
  };

  //get data in every render
  useEffect(() => {
    // Fetch data from the API
    getZillaCropFertilizers();
  }, []);

  return { fetchPost, postZillaCropFertilizer };
};

export default CropZillaFertilizerGateway;