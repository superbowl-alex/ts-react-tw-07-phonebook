import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { store } from '../src/redux/store.js';

import App from './components/App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement as HTMLElement);

root.render(
<StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
</StrictMode>
)
