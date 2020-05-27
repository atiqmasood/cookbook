import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {List, ListItem, Divider, ListItemAvatar, ListItemText, Avatar, Typography} from '@material-ui/core';
import styled from 'styled-components';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '1rem',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

const ListItemStyle = styled(ListItem)`
    cursor: pointer;
    &:hover {
        background: darkgrey;
    }
`;

export default function AppList({recipeList, showDetails}) {
  const classes = useStyles();

  return (
    <List className={classes.root}>
        {
            (recipeList || []).map((item) => {
                return(
                    <Fragment key={item.id}>
                        <ListItemStyle onClick={() => showDetails(item)} alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src={`https://spoonacular.com/recipeImages/${item.image}`} />
                            </ListItemAvatar>
                            <ListItemText
                            primary={item.title}
                            secondary={
                                <Typography
                                    component="span"
                                    variant="body2"
                                    className={classes.inline}
                                    color="textPrimary"
                                >
                                    Author: {item.author}
                                </Typography>
                            }
                            />
                        </ListItemStyle>
                        <Divider variant="inset" component="li" />
                    </Fragment>
                )
            })
        }
    </List>
  );
}