import './index.less';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Hello } from '@/Hello'

ReactDom.render(<Hello name="webpack" />, document.getElementById('app') as HTMLElement)