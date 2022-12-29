import React from 'react';
import List from '@mui/material/List';
import { useSelector } from 'react-redux';
import { RootState } from '../../rootReducer';
import ListItemComponent from '../../../components/ListItem';

const ElementsList = () => {
  const list = useSelector((state: RootState) => state.list.list);
  return (
    <List sx={{ borderLeft: 1, borderColor: 'primary.main' }}>
      {list.map((item) => (
        <ListItemComponent item={item.name} key={item.id} />
      ))}
    </List>
  );
};

export default ElementsList;
