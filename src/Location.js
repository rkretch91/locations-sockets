import React from 'react';
import consumer from './cable';

export default class Location extends React.Component {
  componentDidMount() {
    consumer.subscriptions.create({
      channel: 'LocationChannel',
      username: 'rkretch91',
    }, {
      connected: () => console.log('connected'),
      disconnected: () => console.log('disconnected'),
      received: data => console.log(data),
    })
  };

  componentWillUnmount() {
    consumer.disconnect()
  };

  render() {
    return(
      null
    );
  }
};
