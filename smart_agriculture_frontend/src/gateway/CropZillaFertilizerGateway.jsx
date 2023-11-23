import axios from "axios";
import { useEffect } from "react";

const CropZillaFertilizerGateway = ({ setZillaCropFertilizers }) => {

    const postZillaCropFertilizers = async ({ zillaCropFertilizer }) => {
        console.log(zillaCropFertilizer);
        try {
          const response = axios.post(`http://127.0.0.1:8000/zillacropfertilizers/`, zillaCropFertilizer);
          // Request was successful
          console.log('Response data:', response.data);
        } catch (error) {
          // Handle error
          console.error('Error:', error.message);
        }
      };
    
      useEffect(() => {
        // Fetch data from the API
        axios.get('http://127.0.0.1:8000/zillacropfertilizers/')
          .then(response => {
            setZillaCropFertilizers(response.data);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      }, []);

    const fetchPost = async ({zilla, crop, setFertilizers}) => {
        const response = await fetch(
            `http://127.0.0.1:8000/fertilizermeasures/?zilla__id=${zilla}&crop__id=${crop}`
        );
        const data = await response.json();
        console.log(data);
        setFertilizers(data);
    };

    return { fetchPost, postZillaCropFertilizers };
};

export default CropZillaFertilizerGateway;