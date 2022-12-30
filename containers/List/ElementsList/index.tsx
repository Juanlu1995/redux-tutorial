import React from 'react';
import List from '@mui/material/List';
import { useSelector } from 'react-redux';
import ListItemComponent from '../../../components/ListItem';
import { makeSelectList } from '../../List/selectors';

const ElementsList = () => {
  const list = useSelector(makeSelectList);
  return (
    <List sx={{ borderLeft: 1, borderColor: 'primary.main' }}>
      {list.map((item) => (
        <ListItemComponent item={item.name} key={item.id} />
      ))}
    </List>
  );
};

export default ElementsList;
