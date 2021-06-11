import React, { Component } from 'react';

export default class RecursiveComponent extends Component {

  renderSubComponent = () => {
    const [Component, ...restComponents] = this.props.components;
    if(restComponents.length > 0) {
      return <Component>
        <RecursiveComponent components={restComponents} />
      </Component>
    } else {
      return <Component/>
    }
  }

  render() {
    return this.renderSubComponent()
  }
};
