

import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import AutoCompleteChanged from './AutoComplete';
import RaisedButton from 'material-ui/RaisedButton';
import SelectFieldChanged from './SelectField';


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 800,
    height: 100,
    overflowY: 'auto',
    marginBottom: 24,
    marginTop: 24
  },
};

const tilesData = [
  {
    title: 'Select language',
    id: '1',
    content: <AutoCompleteChanged dataSourceTarget="language"/>
  },
  {
    title: 'Location',
    id: '2',
    content: <AutoCompleteChanged dataSourceTarget="location"/>
  },
  {
    title: 'Level',
    id: '3',
    content: <SelectFieldChanged />
  },
  {
    title: ' ',
    id: '4',
    content: <RaisedButton label="Submit" secondary={true}/>
  }
];

const Filter = () => (
  <Card style={styles.root}>
    <GridList
      cellHeight={200}
      cols={4}
      padding={20}
      style={styles.gridList}
    >
      
      {tilesData.map((tile) => (
        <GridTile
          key={tile.id}
        >
          {tile.title}<br/>
          {tile.content}
        </GridTile>
      ))}
    </GridList>
  </Card>
);

export default Filter;