import React from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Item } from '../../../types';
import { removeFromList } from '../../List/actions';
import { makeSelectList } from '../../List/selectors';
import { useAppDispatch } from '../../../hooks';
interface Option extends Item {
  readonly label: string;
}
const RemoveInput = () => {
  const dispatch = useAppDispatch();
  const list = useSelector(makeSelectList);
  const options: Option[] = list.map((element: Item) => ({
    ...element,
    label: element.name,
  }));
  const handleChange = (event: any, newValue: Option | null) => {
    if (newValue) {
      dispatch(removeFromList(newValue.id));
    }
  };
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={options}
      renderInput={(params) => <TextField {...params} label="Item" />}
      onChange={handleChange}
    />
  );
};

export default RemoveInput;
