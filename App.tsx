import { Box } from '@mui/material';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import ElementsList from './containers/List/ElementsList';
import Inputs from './containers/List/Inputs';
import './style.css';

export default function App() {
  const store = configureStore();
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
