import * as React from 'react';

interface HeaderProps {
  text: string;
}

const Header = (props: HeaderProps) => {
  const { text } = props;
  return (
    <header className="theater-header">
      <h2>{text}</h2>
    </header>
  );
};

export default Header;
