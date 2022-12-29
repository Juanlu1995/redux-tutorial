import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

interface Props {
  readonly item: string;
  readonly key: string;
}

const ListItemComponent = ({ item, key }: Props) => {
  return (
    <ListItem disablePadding key={key}>
      <ListItemButton>
        <ListItemText primary={item} />
      </ListItemButton>
    </ListItem>
  );
};

export default ListItemComponent;
