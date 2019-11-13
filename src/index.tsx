import * as React from 'react';
import * as ReactDom from 'react-dom';
import App from '@/App';
import '@/index.less';

ReactDom.render(<App />, document.getElementById('app') as HTMLElement);
