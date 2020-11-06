import AllPlacesCard from "../components/Places/AllPlacesCard";
function AllPlaces() {
  return (
    <div>
      <h1>This is the all skate places page.</h1>
      <AllPlacesCard
        image="https://via.placeholder.com/345x140.png"
        placeName="Skate Place Name"
        location="place location"
      />
      <AllPlacesCard
        image="https://via.placeholder.com/345x140.png"
        placeName="Skate Place Name"
        location="place location"
      />{" "}
      <AllPlacesCard
        image="https://via.placeholder.com/345x140.png"
        placeName="Skate Place Name"
        location="place location"
      />
    </div>
  );
}

export default AllPlaces;
