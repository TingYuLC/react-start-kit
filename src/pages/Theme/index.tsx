import * as React from 'react';
import './index.less';
import colorConfigs from '@/configs/theme';

interface ThemeConfigProps {
  color?: string;
  name?: string;
}

const Theme = () => (
  <div className="demo-theme">
    <div className="theme-wrapper">
      {
        colorConfigs.map((item) => (
          <div className="theme-item" style={{ backgroundColor: item.color }}>
            <p style={{ color: item.color }}>{item.name}</p>
          </div>
        ))
      }
    </div>
  </div>
);

export default Theme;
