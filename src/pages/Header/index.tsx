import * as React from 'react';
import './index.less';

interface HeaderProps {
  title?: string;
  leftImg?: string;
  rightImg: string;
  color?: string;
  leftClick?: () => void;
  rightClick?: () => void;
}

const Header = ({
  title, color, leftImg, rightImg,
}: HeaderProps) => (
  <div className="app-header" style={{ backgroundColor: color }}>
    <img src={leftImg} alt="leftImg" />
    <p className="title">{title}</p>
    <img src={rightImg} alt="rightImg" />
  </div>
);

export default Header;
