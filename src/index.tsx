import * as React from 'react';
import * as ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import App from '@/App';
import '@/index.less';

ReactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app') as HTMLElement,
);
