import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import Dialog from "@material-ui/core/Dialog"

const useStyles = makeStyles({
  root: {
    maxWidth: "20rem",
  },
  media: {
    height: "20rem",
  },
  content: {
    width: "20rem",
  },
  h2: {
    fontFamily: "MonteserratR",
    color: "#aa5c3b",
    textTransform: "uppercase",
  },
  p: {
    fontFamily: "DinRegular",
    textAlign: "justify",
  }
})

export default function MediaCard({ open, handleClose, product }) {
  const classes = useStyles()

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={product.Image}
            title={product.title}
          />
          <CardContent className={classes.content}>
            <Typography gutterBottom variant="h5" component="h2" className={classes.h2}>
              {product.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" style={{ overflow: 'auto', height: '5rem'}} className={classes.p}>
              {product.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Dialog>
  )
}
