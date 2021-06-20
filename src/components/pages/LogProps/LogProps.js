import React from 'react';

// logProps is a Higher Order Component
// 1. HOC is a function
// 2. HOC takes a component as the input
export function logProps(WrapperComponent) {
  class LogProps extends React.Component {
    constructor(props) {
      super(props);
    }

    componentDidUpdate(prevProps) {
      console.log('Previous Props: ', prevProps);
      console.log('Current Props: ', this.props);
    }

    render() {
      return (
        <WrapperComponent {...this.props} />
      );
    }
  }

  // 3. HOC returns a new component (enhanced version of WrapperComponent) from the function
  return LogProps;
}