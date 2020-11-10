import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className="wide-card">
      <CardActionArea>
        {/* <CardMedia
          image={props.image}
          title="Placeholder"
          className="card-media"
        /> */}
        {/* <div > */}
        <img
          className="card-media"
          src="https://via.placeholder.com/300x200.png"
        ></img>
        {/* </div> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.location}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.type}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" variant="contained">
          <Link className="view-more-info" to={`/oneskateplace/${props.id}`}>
            View More Info
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
}
