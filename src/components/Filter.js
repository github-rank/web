

import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 500,
    overflowY: 'auto',
    marginBottom: 24,
  },
};

const tilesData = [
  {
    title: 'Breakfast',
    author: 'jill111',
    id: '1'
  },
  {
    title: 'Tasty burger',
    author: 'pashminu',
    id: '2'
  },
  {
    title: 'Camera',
    author: 'Danson67',
    id: '3'
  },
  {
    title: 'Morning',
    author: 'fancycrave1',
    id: '4'
  }
];

const Filter = () => (
  <Card style={styles.root}>
    <GridList
      cellHeight={200}
      style={styles.gridList}
    >
      
      {tilesData.map((tile) => (
        <GridTile
          key={tile.id}
        >
          {tile.title}
        </GridTile>
      ))}
    </GridList>
  </Card>
);

export default Filter;