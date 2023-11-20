import { useEffect } from "react";
import axios from 'axios';

const ZillaGateway = ({setZillas}) => {
    useEffect(() => {
        // Fetch data from the API
        axios.get('http://127.0.0.1:8000/zillas/')
          .then(response => {
            setZillas(response.data);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      }, []);
}

export default ZillaGateway;