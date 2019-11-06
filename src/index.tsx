import './index.less';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import Hello from '@/components/Hello';

ReactDom.render(<Hello name="react" />, document.getElementById('app') as HTMLElement);
