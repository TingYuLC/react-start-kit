import * as React from 'react';

const Loading = require('@img/Loading.png');

interface HelloProps {
  name: string;
}

interface HelloState {
  id: string;
}

class Hello extends React.Component<HelloProps, HelloState> {
  constructor(props: Readonly<HelloProps>) {
    super(props);
    this.state = {
      id: '20',
    };
  }

  render() {
    const { id } = this.state;
    return (
      <div>
        <h1>{id}</h1>
        <img src={Loading} alt="loading" />
      </div>
    );
  }
}

export default Hello;
