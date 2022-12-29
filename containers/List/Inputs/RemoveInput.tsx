import { Autocomplete, Input, TextField } from '@mui/material';

const RemoveInput = () => {
  const elements = ['asdasd'];
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={elements}
      renderInput={(params) => <TextField {...params} label="Element" />}
    />
  );
};

export default RemoveInput;
