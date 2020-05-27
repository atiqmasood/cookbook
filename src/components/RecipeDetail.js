import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardHeader, CardMedia, CardContent, Avatar, Typography} from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import Alert from './Alert';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '1rem',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeDetail({itemDetail}) {
  const classes = useStyles();

  if (!itemDetail){
      return <div className={classes.root}>
          <Alert
            message='Please select the item to see detail.'
            variant='filled'
            severity='info'
          />
      </div>
  }
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {itemDetail && itemDetail.author && itemDetail.author.charAt(0)}
          </Avatar>
        }
        title={itemDetail.title}
        subheader={`Author: ${itemDetail.author}`}
      />
      <CardMedia
        className={classes.media}
        image={`https://spoonacular.com/recipeImages/${itemDetail.image}`}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {itemDetail.description}
        </Typography>
      </CardContent>
    </Card>
  );
}