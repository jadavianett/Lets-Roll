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
  const [type, setType] = useState();

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

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const onChange = async (e) => {
    let value = e.target.value;

    setType(value);
    setFilteredPlaces(places);

    if (value === "All") {
      setFilteredPlaces(places);
      setCurrentPage(1);
    } else {
      let filteredList = await [...places].filter((place) => {
        if (value) {
          return place.type === value;
        }
        return true;
      });
      setFilteredPlaces(filteredList);
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
                // <div className="wide-card">

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
                // </div>
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
