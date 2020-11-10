import React from "react";
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

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className="wide-card">
      <CardActionArea>
        {/* <CardMedia
          className={classes.media}
          image="https://via.placeholder.com/345x140.png/"
          title="Placeholder"
        /> */}
        <img
          className="card-media"
          src="https://via.placeholder.com/300x200.png"
        ></img>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Skate Place
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            This is a good skate place!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          View More Info
        </Button>
        <Button size="small" color="primary">
          Edit Place
        </Button>
        <Button size="small" color="primary">
          Delete Place
        </Button>
      </CardActions>
    </Card>
  );
}
