import "./Pages.css";
import AllPlacesCard from "../components/Cards/AllPlacesCard";
import Pagination from "../components/Pagination/Pagination";
import Select from "../components/InputFields/Select";
import { useEffect, useState } from "react";
import API from "../Utils/API";

//Displays all skate placed from simple seeds and created by all users. Can be sorted 
function AllPlaces() {
  //declares state 
  const [places, setPlaces] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [placesPerPage, setPlacesPerPage] = useState(5);
  const [filteredPlaces, setFilteredPlaces] = useState();
  const [currentPlaces, setCurrentPlaces] = useState();
  const [type, setType] = useState();

  //api call to db to find all places on load
  useEffect(() => {
    API.getPlaces()
      .then((res) => {
        setPlaces(res.data);
        setFilteredPlaces(res.data);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  // on load and on change of filtered places and currentPage, sets currentPlaces for pagination component
  useEffect(() => {
    if (filteredPlaces) {
      const indexOfLastPlace = currentPage * placesPerPage;
      const indexOfFirstPlace = indexOfLastPlace - placesPerPage;
      const newCurrentPlaces = filteredPlaces.slice(
        indexOfFirstPlace,
        indexOfLastPlace
      );

      setCurrentPlaces(newCurrentPlaces);
    }
  }, [filteredPlaces, currentPage]);

  //paginate creates page number to setCurrentPage 
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // onchange of filter dropdown 
  const onChange = async (e) => {
    //declares target value from event 
    let value = e.target.value;

    //sets the type from value 
    setType(value);
    // sets filteredPlaces to places to repopulate full list 
    setFilteredPlaces(places);

    // condtional 
    //All populates all pages 
    if (value === "All") {
      setFilteredPlaces(places);
      //defualts current page to first one 
      setCurrentPage(1);
    } else {
      //filteres the list based off of value because available onchange 
      let filteredList = await [...places].filter((place) => {
        if (value) {
          return place.type === value;
        }
        return true;
      });
      //set filteredPlaces to new array of filtered places by type 
      setFilteredPlaces(filteredList);
      //defualts current page to first one 
      setCurrentPage(1);
    }
  };

  return (
    <>
      <div className="body-wrapper">
        <div className="places-wrapper">
          <h1>All Skate Places</h1>
          <br />
          <br />

          <Select
            name="type"
            onChange={onChange}
            label="Filter by Type"
            text="All"
          />

          <br />
          <Pagination
            placesPerPage={placesPerPage}
            totalPlaces={filteredPlaces && filteredPlaces.length}
            paginate={paginate}
            currentPage={currentPage}
          />
          <div className="margin-auto">
            {currentPlaces &&
              currentPlaces.map((place) => (
          

                <AllPlacesCard
                  image={
                    place.image
                      ? place.image
                      : "https://images.pexels.com/photos/2005992/pexels-photo-2005992.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                  }
                  name={place.name}
                  location={place.location}
                  type={place.type}
                  key={place._id}
                  id={place._id}
                  notes={place.notes}
                />

              ))}
          </div>
          <Pagination
            placesPerPage={placesPerPage}
            totalPlaces={filteredPlaces && filteredPlaces.length}
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
