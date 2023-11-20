import { useEffect } from "react";
import axios from 'axios';

const CropGateway = ({setCrops}) => {
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
}

export default CropGateway;