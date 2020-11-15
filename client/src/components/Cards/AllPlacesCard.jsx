import React from "react";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import InfoIcon from "@material-ui/icons/Info";

export default function MediaCard({ id, image, name, location, type }) {
  return (
    <Card className="card-div-1">
      <CardActionArea className="card-div-2">
        <img className="card-img" src={image} width="100%"></img>
        <CardContent className="margin-auto">
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body1" component="p">
            {location}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            Place type: {type}
          </Typography>
        </CardContent>
        <Button size="small" color="primary" variant="contained">
          <InfoIcon /> &nbsp;
          <Link className="view-more-info" to={`/oneskateplace/${id}`}>
            View More Info
          </Link>
        </Button>
      </CardActionArea>
    </Card>
  );
}
