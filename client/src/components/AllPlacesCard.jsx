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
import InfoIcon from '@material-ui/icons/Info';

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
    <Card className="card-div-1">
      <CardActionArea className="card-div-2">
        {/* <CardMedia
          image={props.image}
          title="Placeholder"
          className="card-media"
        /> */}
        {/* <div > */}
        <img
          className="card-img"
          src={props.image}
          width="100%"
        ></img>
        {/* </div> */}
        <CardContent className="margin-auto">
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography variant="body1" component="p">
            {props.location}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            Place type: {props.type}
          </Typography>
        </CardContent>
        <Button size="small" color="primary" variant="contained">
        <InfoIcon/> &nbsp;
          <Link className="view-more-info" to={`/oneskateplace/${props.id}`}>
            View More Info
          </Link>
        </Button>
      </CardActionArea>
    </Card>
  );
}
