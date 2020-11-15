import React from "react";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export default function MediaCard({ id, notes, name, location, type }) {
  return (
    <Card className="card-padding" key={id}>
      <CardActionArea>
        <img
          className="card-media"
          src="https://images.pexels.com/photos/2005992/pexels-photo-2005992.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          width="100%"
          alt={name}
        ></img>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {location}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {type}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {notes}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Link to={`/editplace/${id}`} className="no-link-style">
        <Button size="large" variant="contained">
          Edit Place
        </Button>
      </Link>
    </Card>
  );
}
