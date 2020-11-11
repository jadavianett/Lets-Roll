import "./AllPlaces.css";
import AllPlacesCard from "../components/Places/AllPlacesCard";
import Pagination from "../components/Pagination";
import { useEffect, useState } from "react";
import API from "../Utils/API";

function AllPlaces() {
  const [places, setPlaces] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [placesPerPage, setPlacesPerPage] = useState(5);

  useEffect(() => {
    API.getPlaces()
      .then((res) => {
        // console.log(res.data);
        setPlaces(res.data);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  const indexOfLastPlace = currentPage * placesPerPage;
  const indexOfFirstPlace = indexOfLastPlace - placesPerPage;
  const currentPlaces = places.slice(indexOfFirstPlace, indexOfLastPlace);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="page-wrapper-with-nav">
        <div id="all-places-wrapper">
          <h1>All Skate Places</h1>
          <br />
          <br />
          <p>(Search filters to go here)</p>
          <br />
          <Pagination
            placesPerPage={placesPerPage}
            totalPlaces={places.length}
            paginate={paginate}
            currentPage={currentPage}
          />
          <div className="centerMe">
            {currentPlaces.map((place) => (
              // <div className="wide-card">
              <AllPlacesCard
                image="https://via.placeholder.com/345x300.png"
                name={place.name}
                location={place.location}
                type={place.type}
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
        </div>
      </div>
    </>
  );
}

export default AllPlaces;
