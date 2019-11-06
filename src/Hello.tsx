import * as React from 'react';

interface HelloProps {
  name: string;
}

export class Hello extends React.Component<HelloProps, {}> {
  render () {
    return  <div>
      <h1>webpack react</h1>
      <img src={require('@img/Loading.png')} alt="loading"/>
    </div>
  }
}