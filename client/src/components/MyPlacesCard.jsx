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
    <Card className="card-padding">
      <CardActionArea>
        <img
          className="card-media"
          src="https://images.pexels.com/photos/2005992/pexels-photo-2005992.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          width="400px"
          height="300px"
        ></img>
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
          <Typography variant="body2" color="textSecondary" component="p">
            {props.notes}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Link to={`/editplace/${props.id}`}>
        <Button size="small" color="primary">
          Edit Place
        </Button>
      </Link>
    </Card>
  );
}
