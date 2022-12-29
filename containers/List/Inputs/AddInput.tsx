import { Button, Input, Stack } from '@mui/material';
import React, { FormEvent, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addToList } from '../../List/actions';

const AddInput = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    dispatch(addToList(inputRef.current.value));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="row" spacing={2}>
        <Input sx={{ m: 2 }} id="add" name="add" inputRef={inputRef} />
        <Button type="submit">Enviar</Button>
      </Stack>
    </form>
  );
};

export default AddInput;
