import "./Pages.css";
import AllPlacesCard from "../components/AllPlacesCard";
import Pagination from "../components/Pagination";
import Select from "../components/Select";
import { useEffect, useState } from "react";
import API from "../Utils/API";

function AllPlaces() {
  const [places, setPlaces] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [placesPerPage, setPlacesPerPage] = useState(5);
  const [filteredPlaces, setFilteredPlaces] = useState();
  const [currentPlaces, setCurrentPlaces] = useState();
  const [type, setType] =useState();
  const indexOfLastPlace = currentPage * placesPerPage;
  const indexOfFirstPlace = indexOfLastPlace - placesPerPage;

  useEffect(() => {
    API.getPlaces()
      .then((res) => {
        // console.log(res.data);
        setPlaces(res.data);  
        setFilteredPlaces(res.data);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  useEffect(()=> {
    if(filteredPlaces){
    setCurrentPlaces(filteredPlaces.slice(indexOfFirstPlace, indexOfLastPlace))
    }

  }, [filteredPlaces]);

 
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

 const onChange = async (e) => {


  
    let value = e.target.value
    setType(value);
    // let filteredList = places
    // console.log(value)
    let filteredList = await places.filter((place)=> {
        if(value){
          return place.type.indexOf(value) > -1
        }
        return true
    })
    console.log("filterd list", filteredList);
     setFilteredPlaces(filteredList)
 
     console.log("after",currentPlaces)
  };

  return (
    <>
      <div className="body-wrapper">
        <div className="places-wrapper">
          <h1>All Skate Places</h1>
          <br />
          <br />
          <p>(Search filters to go here)</p>
          <Select name="type" onChange={onChange}  label="Filter by Type" />
          {/* <label >Choose a Type:</label>
          <select name="type">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option>
          </select> */}
          {/* <input
                            // value={search}
                            onChange={onChange}
                            name='search'
                            type='text'
                            className='form-control'
                            placeholder='Search'
                            id='search'
          /> */}
          <br />
          <Pagination
            placesPerPage={placesPerPage}
            totalPlaces={places.length}
            paginate={paginate}
            currentPage={currentPage}
          />
          <div className="margin-auto">
            {currentPlaces && currentPlaces.map((place) => (
              // <div className="wide-card">
              
              <AllPlacesCard
                image={place.image}
                name={place.name}
                location={place.location}
                type={place.type}
                key={place._id}
                id={place._id}
                notes={place.notes}
              />
              // </div>
            ))}
          </div>
          <Pagination
            placesPerPage={placesPerPage}
            totalPlaces={places.length}
            paginate={paginate}
            currentPage={currentPage}
          />
          <br />
          <br />
        </div>
      </div>
    </>
  );
}

export default AllPlaces;
