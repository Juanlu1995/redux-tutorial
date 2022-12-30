import { Box } from '@mui/material';
import { Provider } from 'react-redux';
import store from './store';
import ElementsList from './containers/List/ElementsList';
import Inputs from './containers/List/Inputs';
import './style.css';

export default function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}
