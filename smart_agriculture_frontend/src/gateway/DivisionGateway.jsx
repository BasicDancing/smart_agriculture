import axios from "axios";
import { useEffect } from "react";

const DivisionGateway = ({ setDivisions }) => {

  // get all data
  const getDivisions = async () => {
    axios.get('http://127.0.0.1:8000/divisions/')
      .then(response => {
        setDivisions(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  // post division data
  const postDivision = async ({ division }) => {
    console.log(division);
    axios.post(`http://127.0.0.1:8000/divisions/`, division)
      .then(response => {
        getDivisions();
        console.log(response.data);
      }).catch(error => {
        // Handle error
        console.error('Error:', error.message);
      })
  };

  //delete division
  const deleteDivision = async ({ division }) => {
    console.log(division);
    axios.delete(`http://127.0.0.1:8000/divisions/${division.id}/`)
      .then(response => {
        //re render data again!
        getDivisions();
        console.log(response.data);
      }).catch(error => {
        // Handle error
        console.error('Error:', error.message);
      });
  };

  // get data in every render
  useEffect(() => {
    // Fetch data from the API
    getDivisions();
  }, []);

  return { 
    postDivision,
    deleteDivision
  };
}

export default DivisionGateway;