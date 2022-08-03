import { useState, useEffect } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";

const API_URL = "http://localhost:5005";

function PhoneListPage() {
  const [phones, setPhones] = useState([]);

  const getAllPhones = () => {
    axios
      .get(`${API_URL}/api/phones`)
      .then((response) => setPhones(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllPhones();
  }, []);

  return (
    <div className="PhoneListPage">

      { phones.map((phone) => (
        <div className="Phonecard">
            <h1>{phone.name}</h1>
            <p>{phone.manufacturer}</p>
            <p>Description: {phone.description}</p>
            <p>Color: {phone.color}</p>
            <p>Price: ${phone.price}</p>
            <p>{phone.ImageFileName}</p>
            <p>Screen: {phone.screen}</p>
            <p>Processor: {phone.processor}</p>
            <p>Ram: {phone.ram}</p>
        </div>
      ))}
      
    </div>
  );
}

export default PhoneListPage;