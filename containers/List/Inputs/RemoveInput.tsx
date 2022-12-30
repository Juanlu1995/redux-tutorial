import React from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Item } from '../../../types';
import { removeFromList } from '../../List/actions';
import { makeSelectList } from '../../List/selectors';
interface Option extends Item {
  readonly label: string;
}
const RemoveInput = () => {
  const dispatch = useDispatch();
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
      renderInput={(params) => <TextField {...params} label="Element" />}
      onChange={handleChange}
    />
  );
};

export default RemoveInput;
