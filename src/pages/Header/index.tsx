import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { AppState } from '@/store';
import { ThemeState } from '@/store/theme/types';
import { toning, search } from '@/static';
import './index.less';

interface HeaderProps {
  theme: ThemeState;
  title?: string;
  leftImg?: string;
  rightImg?: string;
  leftClick?: () => void;
  rightClick?: () => void;
}

const Header = ({
  theme, title, leftImg, rightImg, leftClick,
}: RouteComponentProps & HeaderProps) => (
  <div className="app-header" style={{ backgroundColor: theme.color }}>
    <img role="presentation" src={leftImg} onClick={leftClick} alt="leftImg" />
    <p className="title">{title}</p>
    <img src={rightImg} alt="rightImg" />
  </div>
);

export default withRouter(connect((state: AppState) => ({
  theme: state.theme,
  leftImg: toning,
  rightImg: search,
  title: '豆瓣App',
}), (dispatch, ownProps: RouteComponentProps) => ({
  leftClick: () => { ownProps.history.push('/theme'); },
}))(Header));
