import { useEffect } from "react";
import axios from 'axios';

const ZillaGateway = ({ setZillas }) => {

  //get all districts
  const getDistricts = async () => {
    axios.get('http://127.0.0.1:8000/zillas/')
      .then(response => {
        setZillas(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  //post zilla
  const postZilla = async ({ zilla }) => {
    console.log(zilla);
    axios.post(`http://127.0.0.1:8000/zillas/`, zilla)
      .then(response => {
        getDistricts();
        console.log(response.data);
      }).catch(error => {
        // Handle error
        console.error('Error:', error.message);
      });
  };

  //delete district
  const deleteZilla = async ({ zilla }) => {
    console.log(zilla);
    axios.delete(`http://127.0.0.1:8000/zillas/${zilla.id}/`)
      .then(response => {
        //re render data again!
        getDistricts();
        console.log(response.data);
      }).catch(error => {
        // Handle error
        console.error('Error:', error.message);
      });
  };

  //render all data
  useEffect(() => {
    // Fetch data from the API
    getDistricts()
  }, []);

  return { 
    postZilla,
    deleteZilla
  };
}

export default ZillaGateway;