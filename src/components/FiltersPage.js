import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Filter from './Filter';
import UsersList from './UsersList';

const FiltersPage = () => (
  <div>
  	<Filter/>
  	<UsersList/>
  </div>
);

export default FiltersPage;