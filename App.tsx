import { Box } from '@mui/material';
import ElementsList from './containers/List/ElementsList';
import Inputs from './containers/List/Inputs';
import './style.css';

export default function App() {
  return (
    <Box
      sx={{
        display: 'grid',
        columnGap: 2,
        gridTemplateColumns: '40% 60%',
      }}
    >
      <Inputs />
      <ElementsList />
    </Box>
  );
}
