import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// log something here
console.log('Hello, world!');

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
